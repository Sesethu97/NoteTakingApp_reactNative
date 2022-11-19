import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Welcome from './src/screens/Welcome/Welcome';
import Notes from './src/screens/Notes/Notes';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{ headerShown: false, }}
        >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Notes">
          {props => <Notes{...props} />}
        </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    // margin: 10,
    width: '100%',
  },
});

export default App;
