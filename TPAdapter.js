import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TPAdapter = ({ pw }) => {
    
    return (
        <View style={styles.container}>
            <Text>Titre: {pw.internes}</Text>
            <Text>Objectif: {pw.externes}</Text>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: `data:image/jpeg;base64,${pw.image}` }}
            />
        </View>
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
export default TPAdapter;