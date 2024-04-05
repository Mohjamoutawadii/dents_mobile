import React, { useEffect, useState } from 'react';
import { View, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TPActivityLayout from './TPActivityLayout';
import axios from 'axios';

const TPS = () => {
    const [pws, setPws] = useState([]);
    const [id, setId] = useState('');
    const [photoBase64, setPhotoBase64] = useState(null);

    useEffect(() => {
        const getId = async () => {
            try {
                let data = await AsyncStorage.getItem('user');
                data = JSON.parse(data);
                setId(data.id);
            } catch (error) {
                console.error('Error fetching code: ', error);
            }
        };

        getId();
    }, []);

    useEffect(() => {
        if (id !== '') {
            loadProfs();
        }
    }, [id]);

    const loadProfs = async () => {
        const url = `http://192.168.0.92:5050/etudiant/studentpw?id=${encodeURIComponent(id)}`;
        console.log('URL:', url);
        try {
            const response = await axios.get(url);
            const data = response.data;
            if (Array.isArray(data)) {
                const parsedPws = data.map((item) => ({
                    internes: item.internes,
                    externes: item.externes,
                    image: item.image1 ? decodeURIComponent(item.image1) : null
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
            <TPActivityLayout pws={pws} />
        </View>
    );
};

export default TPS;
