import React from 'react'
import SigninScreen from './SigninScreen'
import { StyleSheet, View } from 'react-native'
import RegisterScreen from './RegisterScreen'
import MapScreen from "./MapScreen";
import BrowserScreen from './BrowserScreen';
import { NavigationContainer }  from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StopsProvider } from '../context/StopsProvider';
import StopsListScreen from './StopsListScreen';

const Stack = createNativeStackNavigator()
const MainApp = () => {

  return (
    <StopsProvider>
      
    <View style={styles.root}>
      <NavigationContainer>
     
      <Stack.Navigator  initialRouteName="login">
      <Stack.Screen  options={{headerShown:false}} name="login" component={SigninScreen} />
      <Stack.Screen  options={{headerShown:false}} name="register" component={RegisterScreen} />
      <Stack.Screen options={{headerShown:false}} name="map" component={MapScreen} />
      <Stack.Screen options={{headerShown:false }} name="browser" component={BrowserScreen} />
      <Stack.Screen options={{headerShown:false }} name="stopsList" component={StopsListScreen} />
      </Stack.Navigator>


      </NavigationContainer>
    </View>
    </StopsProvider>
  )
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default MainApp