import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as colors  from '../../../assets/stylings/styles'
import {useState} from 'react';

const Welcome = () => {
  
  const [user, setUser] = useState();
  const handleOnChangeText = text => setUser(text);

  return (
    
    <View style={styles.container}>
      <Text style={styles.Greetings}>hello</Text>
      <Text style={styles.Greetings_}>Enter your name to enter?</Text>
      <TextInput
       value={user} 
       onChangeText={handleOnChangeText} 
       style={styles.textInput} 
       />
    </View>
  );
};

const { width } = Dimensions.get('window') - 50
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000'
 
  },
  Greetings: {
    
    fontSize:40,
    fontWeight: '700', 
    width: '100%',   
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.default.HEADING,
    marginLeft: 300,
  },
  Greetings_: {
    fontSize:20,
    fontWeight: '500', 
    width: '100%',   
    alignItems: 'center',
    justifyContent:'center',
    color: colors.default.HEADING,
    marginLeft: 150,
    marginTop: 20,
  },

  textInput :{
    borderBottomWidth: 2,
    borderBottomColor: colors.default.PRIMARY,
    width,
    height: 40,
    paddingLeft: 15,
    color: colors.default.HEADING

  }


});
export default Welcome;
