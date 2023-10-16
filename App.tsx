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
  TextInput,
  Image,
  Dimensions
} from 'react-native';
import { Button, Chip, Surface, Switch } from 'react-native-paper';



const App = () =>  {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.sectionContainer}>
      <ScrollView>
      <StatusBar/>
      <Image style={{width: Dimensions.get('window').width, height: 250}} source={require('./assets/elnano.jpg')} ></Image>
      <Text>{'\n'}</Text>
      <Text style={styles.sectionTitle}>TextInput (email)</Text>
      <TextInput placeholder="Email" style={styles.input} keyboardType='email-address'></TextInput>
      <Text>{'\n'}</Text>
      <Text style={styles.sectionTitle}>Button (amb text i icona)</Text>
      <Button icon='alien' mode='text' labelStyle={{color:'white'}} style={styles.button}>Alien</Button>
      <Button icon='alien' mode='outlined' labelStyle={{color:'white'}} style={styles.button}>ALIEN</Button>
      <Button icon='alien' mode='contained' style={styles.button}>ALIEN</Button>
      <Button icon='alien' mode='elevated' style={styles.button}>ALIEN</Button>
      <Text>{'\n'}</Text>
      <Text style={styles.sectionTitle}>Switch necesites un descans?</Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color='red'></Switch>
      <Text>{'\n'}</Text>
      <Text style={styles.sectionTitle}>Botó dins d'un component Surface?</Text>
      <Surface><Button icon='alien'>ALIEN</Button></Surface>
      <Text>{'\n'}</Text>
      <Text style={styles.sectionTitle}>Provant Chips</Text>
      <View style={{flexDirection: 'row'}}>
      <Chip icon='wifi' mode='outlined' compact>Wifi</Chip>
      <Chip icon='wifi' mode='outlined' compact>Internet</Chip>
      </View>

      <Text>{'\n'}</Text>
      </ScrollView>
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
