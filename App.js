import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './screens/ejercicio1';
import Screen2 from './screens/ejercicio2';
import Screen3 from './screens/ejercicio3';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

const Stack = createStackNavigator();

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Pantalla principal</Text>
      <View style={styles.buttonContainer}>
        <Button title="Ir al ejercicio 1" onPress={() => navigation.navigate('Ejercicio 1')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ir al ejercicio 2" onPress={() => navigation.navigate('Ejercicio 2')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ir al ejercicio 3" onPress={() => navigation.navigate('Ejercicio 3')} />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={MainScreen} />
        <Stack.Screen name="Ejercicio 1" component={Screen1} />
        <Stack.Screen name="Ejercicio 2" component={Screen2} />
        <Stack.Screen name="Ejercicio 3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

