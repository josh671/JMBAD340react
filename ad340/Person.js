
import React, { useState, useEffect } from 'react';
import { Image, ActivityIndicator, StyleSheet, FlatList, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Profile from './Profile';
import App from './App';


function Person( {navigation, route} ) {
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
  },
  user: {
    padding: 10,
    fontSize: 18,
    height: 44,
    textAlign: 'left',
  },
  userImage: {
    marginTop: 10,
    width: '100%',
    height: '50%',
  },
});
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Persons Screen</Text>
      <Text> {route.params.firstname}</Text>
      <Text> {route.params.lastname}</Text>
      <Text> {route.params.email}</Text>
      <Text> {route.params.website}</Text>

      <Image
              style={styles.userImage}
              source={{
                uri: `${route.params.image}${Math.random()}`,
              }}
            />


    </View>
  );
}


export default Person;