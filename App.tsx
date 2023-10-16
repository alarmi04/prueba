/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,

} from 'react-native';




const App = () =>  {
  return (
    <View>
      <StatusBar />
      <Text style={styles.sectionTitle}>Benvingut alumne de 2 DAM</Text>
    </View>
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
    color : 'white'
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
