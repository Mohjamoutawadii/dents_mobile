import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ToastAndroid, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';

const Profile = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [uname, setUname] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [groupe, setGroupe] = useState('');
  const [photoBase64, setPhotoBase64] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let data = await AsyncStorage.getItem('user');
        data = JSON.parse(data);
        setGroupe(data.groupe.code);
        setFname(data.firstName);
        setLname(data.lastName);
        setUname(data.userName);
        setNumber(data.number);
        setEmail(data.email);
        if (data.photo) {
          const decodedPhoto = decodeURIComponent(data.photo);
          setPhotoBase64(decodedPhoto);
        }

      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    getData();
  }, []);

  const handleImagePicker = () => {
    let options = {
      mediaType: 'photo', // Spécifier le type de média comme une photo
      includeBase64: true, // Demander à inclure la représentation base64 de l'image
      maxHeight: 200, // Spécifier la hauteur maximale de l'image
      maxWidth: 200, // Spécifier la largeur maximale de l'image
    };

    launchImageLibrary(options, (response) => {
      if (!response.didCancel && !response.errorCode) { // Vérifier si la sélection d'image a été annulée ou si une erreur s'est produite
        setPhotoBase64(response.assets[0].base64); // Mettre à jour l'état avec la représentation base64 de l'image sélectionnée
      }
    });
  };

  
  

  const handleSubmit = async () => {
    const url = `http://192.168.0.92:5050/etudiant/changeProfil?email=${encodeURIComponent(email)}`;
    const data = {
      email: email,
      firstName: fname,
      lastName: lname,
      userName: uname,
      number: number,
      photo: photoBase64
    };

    try {
      const response = await axios.post(url, data);
      const responseData = response.data;
    } catch (error) {
      console.error('Error fetching data: ', error);
      ToastAndroid.show('Erreur : Échec de la récupération des données', ToastAndroid.SHORT);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          {photoBase64 && (
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: `data:image/jpeg;base64,${photoBase64}` }}
            />
          )}
          <TouchableOpacity style={styles.button} onPress={handleImagePicker}>
            <Text style={styles.buttonText}>Change Profile Picture</Text>
          </TouchableOpacity>
          <Text style={styles.label}>First Name:</Text>
          <TextInput
            style={styles.input}
            value={fname}
            onChangeText={(text) => setFname(text)}
          />
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            style={styles.input}
            value={lname}
            onChangeText={(text) => setLname(text)}
          />
          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.input}
            value={uname}
            onChangeText={(text) => setUname(text)}
          />
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.label}>Number:</Text>
          <TextInput
            style={styles.input}
            value={number}
            onChangeText={(text) => setNumber(text)}
          />
          <Text style={styles.label}>Groupe:</Text>
          <Text style={styles.value}>{groupe}</Text>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '100%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Profile;
