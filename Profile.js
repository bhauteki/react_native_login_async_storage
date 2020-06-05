import React, { useState, useEffect }  from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, StyleSheet } from 'react-native';

const Profile = () => {

  const [email, setEmail] = useState();
  const [accessToken, setAccessToken] = useState();

  const getAccessToken = async () => {
    setEmail(await AsyncStorage.getItem('email'));
    setAccessToken(await AsyncStorage.getItem('accessToken'));
  };

  useEffect(() => {
    getAccessToken();
  });

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Profile info</Text>
      {accessToken ?
        <>
          <Text>{`Email: ${email}`}</Text>
          <Text>{`Access token: ${accessToken}`}</Text>
        </> :
        <Text>Not logged in.</Text>
      }
    </View>
  );

};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Profile;
