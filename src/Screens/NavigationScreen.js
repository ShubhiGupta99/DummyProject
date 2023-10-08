import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigationRef} from '../Utils/NavigationService';

import {PermissionsAndroid, TouchableOpacity} from 'react-native';
import SignInScreen from './SignInScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';

const NavigationScreen = () => {
  const Stack = createNativeStackNavigator();


    return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false,
          animationDuration: 150,
          animation: 'fade',
      }}>
        <Stack.Screen name={"SignInScreen"} component={SignInScreen}/>
        <Stack.Screen name={"SecondScreen"} component={SecondScreen}/>
        <Stack.Screen name={"ThirdScreen"} component={ThirdScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;
