import React, { useEffect, useState } from 'react';
import { Button, ActivityIndicator, FlatList, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import App from './App';
import Person from './Person';


//API FOR GETTING PROFILES
  fetch('https://fakerapi.it/api/v1/users?_quantity=10', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue'
    })
  });

const getDataFromApi = () => {
  return fetch('https://fakerapi.it/api/v1/users?_quantity=10')
    .then((response) => response.json())
    .then((json) => {
      return json.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default Profile = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

const getData = async () => {
     try {
      const response = await fetch('https://fakerapi.it/api/v1/users?_quantity=10');
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

const navigation = useNavigation();

 return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Button
                     title={item.firstname}
                     //Button Title
                     onPress={() =>
                       navigation.navigate('Person', { firstname: item.firstname,
                                                       lastname: item.lastname,
                                                       email: item.email,
                                                       website: item.website,
                                                       image: item.image})}
                   /> //end Button

          )}
        />
      )}

    </View>
  );
};

