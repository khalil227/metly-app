import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './src/screens/Home';
import CityScreen from './src/components/add-city';
import { Provider } from "react-redux";
import store from "./src/store/store";
import Weather from './src/screens/Weather';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';


const {Screen, Navigator} = createNativeStackNavigator();
let persistor = persistStore(store);

export default function App() {
  
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <NavigationContainer>
      <Navigator 
        initialRouteName='Home'
        screenOptions={{headerShown :false}}>
        <Screen name="Home" component={HomeScreen} options={{gestureEnabled: false}}/>
        <Screen name="Weather" component={Weather} />
      </Navigator>
    </NavigationContainer>

    </PersistGate>
    </Provider>
  );
}


