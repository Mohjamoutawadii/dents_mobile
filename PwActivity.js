import React, { useEffect, useState } from 'react';
import { View, Text, ToastAndroid, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PwActivityLayout from './PwActivityLayout';
import axios from 'axios';

const PwActivity = () => {
    const [pws, setPws] = useState([]);
    const [code, setCode] = useState('');

    useEffect(() => {
        const getcode = async () => {
            try {
                let data = await AsyncStorage.getItem('user');
                data = JSON.parse(data);
                // Extraire la valeur de la clé "code"
                const groupCode = data.groupe.code;
                setCode(groupCode);
            } catch (error) {
                console.error('Error fetching code: ', error);
            }
        };

        getcode();
    }, []);

    useEffect(() => {
        if (code !== '') {
            loadProfs();
        }
    }, [code]);

    const loadProfs = async () => {
        console.log('Code:', code);
        const url = `http://192.168.0.92:5050/etudiant/all?code=${encodeURIComponent(code)}`;
        console.log('URL:', url);
        try {
            const response = await axios.get(url);
            const data = response.data;
            if (Array.isArray(data)) {
                const parsedPws = data.map((item) => ({
                    id: item.id,
                    title: item.title,
                    docs: item.docs,
                    objectif: item.objectif,
                    nom: item.tooth.name
                }));
                setPws(parsedPws);
                ToastAndroid.show('Chargement de données', ToastAndroid.SHORT);
            } else {
                console.error('Les données reçues ne sont pas au format attendu :', data);
                ToastAndroid.show('Erreur : Données incorrectes', ToastAndroid.SHORT);
            }
        } catch (error) {
            console.error('Error fetching data: ', error);
            ToastAndroid.show('Erreur : Échec de la récupération des données', ToastAndroid.SHORT);
        }
    };
    

    return (
        <View style={{ flex: 1 }}>
            <PwActivityLayout pws={pws} />
        </View>
    );
};

export default PwActivity;
