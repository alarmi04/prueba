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

const Nom = () => {
  return (
    <Text style={styles.sectionTitle}>Alberto Aracil Millan</Text>
  );
}

const App = () =>  {
  
  return (
    <PaperAlberto>
      <StatusBar />
      {Nom()}
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
    fontWeight: '400',
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
