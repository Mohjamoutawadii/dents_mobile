import { ScrollView, View,Alert, Button,ToastAndroid, Image, StyleSheet, Animated, Text, TouchableOpacity, Modal, Dimensions, useWindowDimensions, TouchableWithoutFeedback } from 'react-native';
import React, { useState, useRef } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default  DentChoose = () => { 
const goTomeasureAngles = () => {
  
}

const  handleButtonClick = (dent) => {
      setDent(dent)
  }

  
  
  const [couleur,setCouleur] = useState('blue')
  const [dent,setDent] = useState(0)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Coulée (CC)', value: 'CC'},
    {label: 'Incrustation vestibulaire (CIV)', value: 'CIV'},
    {label: 'Céramo-métallique (CCM)', value: 'CCM'},
    {label: 'Céramo-céramique (CCC)', value: 'CCC'}
    
  ]);
return (
  <View style = {{flexDirection:'column',alignContent:'center',justifyContent:'center'}}>
    <Text style={{color:'black',fontSize:16,marginLeft:20,marginBottom:20,marginTop:15}}>Choisir le type du préparation : </Text>
<View>
<DropDownPicker style = {{backgroundColor:'lightgray'}} 
   
      containerStyle = {{
       
        marginLeft:20,
        
        width:350
      }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
</View>
  <Text style={{color:'black',fontSize:16,marginLeft:20,marginBottom:5,marginTop:20}} >Choisir la dent à préparer : </Text>
  <Text style={{color:'black',fontSize:16,marginLeft:20,marginBottom:20}}>{dent==0 ? " Aucune dent n'est chosit" : 'la dent chosit est '+dent }</Text>

  <View style={{alignItems:'center',alignContent:'center',position:'relative' }}>
  <Image
   style = {{width:'89%'}}
    source={ require('./assets/fix2.png') } // Replace with the actual image source
  
  />
    <TouchableOpacity //28
   style={{ position: 'absolute', top: 174, left: 285}}
    onPress={() => handleButtonClick(28)}
  >
    <View id='28' style={{ backgroundColor: couleur, padding: 10,width:5,height:5}}/>
  
  </TouchableOpacity>
  <TouchableOpacity //27
   style={{ position: 'absolute', top: 144, left: 280 }}
    onPress={() => handleButtonClick(27)}
  >
    <View id='27' style={{ backgroundColor: couleur, padding: 10,width:5,height:5}}/>
  
  </TouchableOpacity>

  <TouchableOpacity //26
   style={{ position: 'absolute', top: 112, left: 270 }}
    onPress={() => handleButtonClick(26)}
  >
    <View id='27' style={{ backgroundColor: couleur, padding: 10,width:5,height:5}}/>
  
  </TouchableOpacity>

  <TouchableOpacity //25
   style={{ position: 'absolute', top: 91, left: 268 }}
    onPress={() => handleButtonClick(25)}
  >
    <View style={{ backgroundColor: couleur,width:15,height:15}}/>
  
  </TouchableOpacity>

  <TouchableOpacity //24
   style={{ position: 'absolute', top: 68, left: 255 }}
    onPress={() => handleButtonClick(24)}
  >
    <View style={{ backgroundColor: couleur,width:15,height:15}}/>
  
  </TouchableOpacity>

  <TouchableOpacity //23
   style={{ position: 'absolute', top: 48, left: 240 }}
    onPress={() => handleButtonClick(23)}
  >
    <View style={{ backgroundColor: couleur,width:15,height:15}}/>
  
  </TouchableOpacity>

  <TouchableOpacity //22
   style={{ position: 'absolute', top: 35, left: 220 }}
    onPress={() => handleButtonClick(22)}
  >
    <View style={{ backgroundColor: couleur,width:15,height:15}}/>
  
  </TouchableOpacity>
  <TouchableOpacity //21
   style={{ position: 'absolute', top: 30, left: 198 }}
    onPress={() => handleButtonClick(21)}
  >
    <View style={{ backgroundColor: couleur,width:15,height:15}}/>
  
  </TouchableOpacity>
  <TouchableOpacity //11
   style={{ position: 'absolute', top: 30, left: 170 }}
    onPress={() => handleButtonClick(11)}
  >
    <View style={{ backgroundColor: couleur,width:15,height:15}}/>
  
  </TouchableOpacity>

  <TouchableOpacity //12
   style={{ position: 'absolute', top: 35, left: 148 }}
    onPress={() => handleButtonClick(12)}
  >
    <View style={{ backgroundColor: couleur,width:11,height:11}}/>
  
  </TouchableOpacity>
  <TouchableOpacity //13
   style={{ position: 'absolute', top: 45, left: 125 }}
    onPress={() => handleButtonClick(13)}
  >
    <View style={{ backgroundColor: couleur,width:15,height:15}}/>
  
  </TouchableOpacity>

  <TouchableOpacity //14
   style={{ position: 'absolute', top: 65, left: 110 }}
    onPress={() => handleButtonClick(14)}
  >
    <View style={{ backgroundColor: couleur,width:15,height:15}}/>
  
  </TouchableOpacity>

  <TouchableOpacity //15
   style={{ position: 'absolute', top: 86, left: 100 }}
    onPress={() => handleButtonClick(15)}
  >
    <View style={{ backgroundColor: couleur,width:15,height:15}}/>
  
  </TouchableOpacity>
  <TouchableOpacity //16
    style={{ position: 'absolute', top: 110, left: 85 }}
    onPress={() => handleButtonClick(16)}
  >
    <View style={{ backgroundColor: couleur, padding: 10,width:5,height:5}}/>
  
  </TouchableOpacity>
  <TouchableOpacity //17
    style={{ position: 'absolute', top: 140, left: 78 }}
    onPress={() => handleButtonClick(17)}
  >
    <View style={{ backgroundColor: couleur, padding: 10,width:5,height:5}}/>
  
  </TouchableOpacity>

  <TouchableOpacity //18
    style={{ position: 'absolute', top: 168, left: 70 }}
    onPress={() => handleButtonClick(18)}
  >
    <View style={{ backgroundColor: couleur, padding: 10,width:5,height:5}}/>
  
  </TouchableOpacity>

  <TouchableOpacity //48
    style={{ position: 'absolute', top: 272, left: 78 }}
    onPress={() => handleButtonClick(48)}
  >
    <View style={{ backgroundColor: couleur, padding: 10,width:5,height:5}}/>
  
  </TouchableOpacity>

  <TouchableOpacity //47
    style={{ position: 'absolute', top: 300, left: 83 }}
    onPress={() => handleButtonClick(47)}
  >
    <View style={{ backgroundColor: couleur, padding: 10,width:5,height:5}}/>
  
  </TouchableOpacity>

  <TouchableOpacity //46
    style={{ position: 'absolute', top: 331, left: 93 }}
    onPress={() => handleButtonClick(46)}
  >
    <View style={{ backgroundColor: couleur, padding: 10,width:5,height:5}}/>
  
  </TouchableOpacity>
  <TouchableOpacity //45
    style={{ position: 'absolute', top: 364, left: 110 }}
    onPress={() => handleButtonClick(45)}
  >
    <View style={{ backgroundColor: couleur,width:15,height:15}}/>
  
  </TouchableOpacity>

  <TouchableOpacity //44
    style={{ position: 'absolute', top: 383, left: 118 }}
    onPress={() => handleButtonClick(44)}
  >
    <View style={{ backgroundColor: couleur,width:15,height:15}}/>
  
  </TouchableOpacity>
  <TouchableOpacity //43
    style={{ position: 'absolute', top: 398, left: 135 }}
    onPress={() => handleButtonClick(43)}
  >
    <View style={{ backgroundColor: couleur,width:13,height:13}}/>
  
  </TouchableOpacity>
  <TouchableOpacity //42
    style={{ position: 'absolute', top: 407, left: 152 }}
    onPress={() => handleButtonClick(42)}
  >
    <View style={{ backgroundColor: couleur,width:13,height:13}}/>
  
  </TouchableOpacity>

  <TouchableOpacity //41
    style={{ position: 'absolute', top: 407, left: 170 }}
    onPress={() => handleButtonClick(41)}
  >
    <View style={{ backgroundColor: couleur,width:13,height:13}}/>
  
  </TouchableOpacity>
  <TouchableOpacity //31
    style={{ position: 'absolute', top: 407, left: 190 }}
    onPress={() => handleButtonClick(31)}
  >
    <View style={{ backgroundColor: couleur,width:13,height:13}}/>
  
  </TouchableOpacity>
  <TouchableOpacity //32
    style={{ position: 'absolute', top: 407, left: 208 }}
    onPress={() => handleButtonClick(32)}
  >
    <View style={{ backgroundColor: couleur,width:13,height:13}}/>
  
  </TouchableOpacity>
  <TouchableOpacity //33
    style={{ position: 'absolute', top: 400, left: 227 }}
    onPress={() => handleButtonClick(33)}
  >
    <View style={{ backgroundColor: couleur,width:13,height:13}}/>
  
  </TouchableOpacity>

  <TouchableOpacity //34
    style={{ position: 'absolute', top: 386, left: 245 }}
    onPress={() => handleButtonClick(34)}
  >
    <View style={{ backgroundColor: couleur,width:13,height:13}}/>
  
  </TouchableOpacity>
  <TouchableOpacity //35
    style={{ position: 'absolute', top: 368, left: 252 }}
    onPress={() => handleButtonClick(35)}
  >
    <View style={{ backgroundColor: couleur,width:13,height:13}}/>
  
  </TouchableOpacity>
  <TouchableOpacity //36
    style={{ position: 'absolute', top: 338, left: 260 }}
    onPress={() => handleButtonClick(36)}
  >
    <View style={{ backgroundColor: couleur,width:20,height:20}}/>
  
  </TouchableOpacity>
  <TouchableOpacity //37
    style={{ position: 'absolute', top: 305, left: 272 }}
    onPress={() => handleButtonClick(37)}
  >
    <View style={{ backgroundColor: couleur,width:20,height:20}}/>
  
  </TouchableOpacity>
  <TouchableOpacity //38
    style={{ position: 'absolute', top: 275, left: 280 }}
    onPress={() => handleButtonClick(38)}
  >
    <View style={{ backgroundColor: couleur,width:20,height:20}}/>
  
  </TouchableOpacity>
</View>


</View>

)

}