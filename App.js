// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Login from './Login';
import Profile from './Profile';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Profile" component={Profile} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}
export default App;
