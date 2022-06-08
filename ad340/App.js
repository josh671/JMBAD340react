import * as React from 'react';
import { ActivityIndicator, StyleSheet, FlatList, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import Person from './Person';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   alignItems: 'center',
   backgroundColor: '#246EE9',
  },
   item: {
      padding: 10,
      fontSize: 18,
      color: 'black',
    },
    list:{
        marginTop:30,
      },
    paragraph:{
      padding: 20,
    }

  });

//COMPONENTS FOR SCREENS
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.paragraph}>If you're familiar with web development, Metro is a lot like webpack—for React Native apps. Unlike Kotlin or Java, JavaScript isn't compiled—and neither is React Native. Bundling isn't the same as compiling, but it can help improve startup performance and translate some platform-specific JavaScript into more widely supported JavaScript.</Text>
       <FlatList
               data={[
                 {key: 'Christams movie'},
                 {key: 'Romance Movie'},
                 {key: 'Comedy Movie'},
                 {key: 'Christmas Romance Movie'},
                 {key: 'Christmas Romance Comedy Movie'},
                 {key: 'Airplane Movie'},
                 {key: 'Another Movie'},
               ]}
               renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
             />
       <Button
          title="Go to Profiles"
          onPress={() =>
            navigation.navigate('Profiles')
          }
          />
    </View>
  );
}



const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="JoshApp" component={HomeScreen} />
        <Stack.Screen name="Profiles" component={Profile} />
        <Stack.Screen name="Person" component={Person} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;