import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import WelcomeScreen from './app/assets/screens/authentication/WelcomeScreen';

const loadFonts = () => {
  return Font.loadAsync({
    'oswald-thin': require('./app/assets/fonts/Oswald-Light.ttf'),
    'oswald': require('./app/assets/fonts/Oswald-Regular.ttf')
  });
};

export default function App() { 
  const [fontLoaded, setFontLoaded] = useState(false);

  //AppLoading till fonts are loaded

  if (!fontLoaded) {
    return (
      < AppLoading
        startAsync = {loadFonts}
        onFinish = {() => setFontLoaded(true)}
        onError = {(err) => console.error(err)}
      />
    );
  };

  return (
    <WelcomeScreen/>
  );
}
