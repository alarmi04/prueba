/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Provider as PaperAlberto, TextInput} from 'react-native-paper';
import { text } from 'stream/consumers';



const Nom = (textAMostrar, estil) => {
  return (
    <Text style={{fontStyle : estil}}>{textAMostrar}</Text>
  );
}

  
const estil = 'florida';

const Dades = (element) => {
  return element.map(elemento => (
    <TextInput 
    placeholder={elemento}
    style={estil === 'florida' ? styles.florida : styles.upv}
    >
    </TextInput>
  ));
}


const App = () =>  {


  return (
    <PaperAlberto>
      <StatusBar />
      {Nom("Alberto Aracil Millan", "italic")}
      {Dades(['Email', 'Nom', 'Edad'])}
    </PaperAlberto>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 0,
    paddingHorizontal: 24,
    backgroundColor: 'black'
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: '600',
    color : 'black'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400'
  },
  highlight: {
    fontWeight: '700',
  },

input: {
  backgroundColor: 'white',
},
button: {
  borderRadius: 5
},
upv:{
  backgroundColor: 'purple',
  fontSize: 10,
  fontWeight: '600',
  padding: 4,
  paddingLeft: 12,
  textAlign: 'left',
  color: 'grey',
  },
  florida: {
  backgroundColor: 'red',
  fontSize: 12,
  fontWeight: '600',
  padding: 4,
  paddingRight: 12,
  textAlign: 'right',
  },
});

export default App;
