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
import {Provider as PaperAlberto} from 'react-native-paper';
import { text } from 'stream/consumers';

const Nom = (textAMostrar, estil) => {
  return (
    <Text style={{fontStyle : estil}}>{textAMostrar}</Text>
  );
}

const App = () =>  {
  
  return (
    <PaperAlberto>
      <StatusBar />
      {Nom("Alberto Aracil Millan", "italic")}
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
}
});

export default App;
