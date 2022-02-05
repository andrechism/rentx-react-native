import { StatusBar } from 'expo-status-bar';

import AppLoading from 'expo-app-loading'

import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsloaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if (!fontsloaded) {
    return <AppLoading />
  }

  return (
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
  );
}