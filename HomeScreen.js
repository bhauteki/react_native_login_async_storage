import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = ({ navigation }) => {

  const [accessToken, setAccessToken] = useState();

  const getAccessToken = async () => {
    setAccessToken(await AsyncStorage.getItem('accessToken'));
  };

  useEffect(() => {
    getAccessToken();
  });

  const logout = async () => {
    await AsyncStorage.removeItem('accessToken');
    getAccessToken();
  };


  return (
    <View style={styles.view}>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
        style={styles.profileButton}
      />
      { !accessToken ? (
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
      ) : (
        <Button
          title="Logout"
          onPress={logout}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileButton: {
    marginBottom: 20,
  },
});

export default HomeScreen;
