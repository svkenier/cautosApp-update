import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState,useEffect,useCallback } from "react";
import MainApp from "./src/screens/MainApp";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import FontLoader from "./src/helpers/FontLoader";


export default function App() {
  
 


   SplashScreen.preventAutoHideAsync();


   const [fontsLoaded, fontError] = useFonts({
     'Roboto-Condensed': require('./assets/fonts/Roboto-Condensed.ttf'),
     'Roboto-BoldCondensed': require('./assets/fonts/Roboto-BoldCondensed.ttf'),
     'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
     'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
     'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),



   });

   const onLayoutRootView = useCallback(async () => {
     if (fontsLoaded || fontError) {
       await SplashScreen.hideAsync();
     }
   }, [fontsLoaded, fontError]);

   if (!fontsLoaded && !fontError) {
     return null;
   }


 
  return (
    
   
    <SafeAreaView style={styles.root} onLayout={onLayoutRootView}>
       <MainApp /> 
    </SafeAreaView>

      
   
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:
      "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  },
});
