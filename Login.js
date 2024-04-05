
import React, { useState } from 'react';
import AsyncStorageManager from './AsyncStorageManager';
import axios from 'axios';
import {

StyleSheet,
Text,
Image,
View,
TextInput,
TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Make sure you've installed this package

const Login =  ({navigation}) => {
    const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

// Assuming this code runs in a JavaScript environment (e.g., Node.js, browser with Axios library imported)

// Import Axios (Node.js) or include Axios library (browser)


// Assuming userName and password are variables holding the input values // Replace with actual value

// Assuming APIConfig.BASE_URL is defined somewhere, replace it with the actual base URL


const onPressLogin = async () => {

    
    const endpoint = 'http://192.168.0.92:5050/etudiant/register';
    const url = endpoint;

    
    
    try {
      const response = await axios.post(url, {
          userName: email,
          password: password,
      });
  
      // Si le statut de la réponse est "FORBIDDEN", cela signifie que l'authentification a échoué
      if (response.status === 403) {
          console.log('Authentification échouée: Nom d\'utilisateur ou mot de passe incorrect');
          ToastAndroid.show('Erreur : Nom d\'utilisateur ou mot de passe incorrect', ToastAndroid.SHORT);
      } else {
          // Gérer la réponse réussie
          const data = response.data;
          const user = { status: 'connected' };
          await AsyncStorageManager.signIn(user);
          await AsyncStorage.setItem('user', JSON.stringify(data));
          console.log('Connexion réussie !');
  
          // Extraire et traiter les données ou naviguer vers un autre écran
      }
  } catch (error) {
      // Gérer les erreurs ou afficher un message d'erreur
      console.error('Erreur :', error);
      ToastAndroid.show('Erreur : Authentification échouée', ToastAndroid.SHORT);
  }
  


};
const onPressForgotPassword = () => {
// Do something about forgot password operation
};
const onPressSignUp = () => {
// Do something about signup operation
};

return (
    
<View style={styles.container}>
<Image
                  source={require('./android/app/src/main/res/mipmap-hdpi/ic_launcher_foreground.png') }
                 
                  resizeMode="contain"
                />
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
placeholder="Email"
placeholderTextColor="#003f5c"
onChangeText={text => setEmail(text)}/>
</View>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
secureTextEntry
placeholder="Password"
placeholderTextColor="#003f5c"
onChangeText={text => setPassword(text)}/>
</View>
<TouchableOpacity
onPress = {onPressForgotPassword}>
<Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {onPressLogin}
style={styles.loginBtn}>
<Text style={styles.loginText}>LOGIN </Text>
</TouchableOpacity>

</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#4FD3DA',
alignItems: 'center',
justifyContent: 'center',
},
title:{
fontWeight: "bold",
fontSize:50,
color:"#fb5b5a",
marginBottom: 40,
},
inputView:{
width:"80%",
backgroundColor:"#3AB4BA",
borderRadius:25,
height:50,
marginBottom:20,
justifyContent:"center",
padding:20
},
inputText:{
height:50,
color:"white"
},
forgotAndSignUpText:{
color:"white",
fontSize:11
},
loginBtn:{
width:"80%",
backgroundColor:"lightblue",
borderRadius:25,
height:50,
alignItems:"center",
justifyContent:"center",
marginTop:40,
marginBottom:10
},
});
export default Login;