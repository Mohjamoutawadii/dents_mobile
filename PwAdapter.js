import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PwAdapter = ({ pw }) => {
  const navigation = useNavigation();

  const handlePress = async () => {
    try {
      // Stocker l'ID du TP dans AsyncStorage
      await AsyncStorage.setItem('tpID', pw.id.toString());
      // Naviguer vers la page d'accueil lorsqu'un TP est cliqué
      navigation.navigate('Les Tps');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de l\'ID du TP:', error);
    }
  };
    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Text>ID: {pw.id}</Text>
            <Text>Titre: {pw.title}</Text>
            <Text>Objectif: {pw.objectif}</Text>
            <Text>Docs: {pw.docs}</Text>
            <Text>Dent: {pw.nom}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 5,
        padding: 10,
        margin: 5,
    },
});
export default PwAdapter;