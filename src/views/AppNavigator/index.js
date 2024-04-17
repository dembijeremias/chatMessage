import React, {useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import STEP01 from '../Steps/Step01';
import STEP02 from '../Steps/Step02';
import STEP03 from '../Steps/Step03';
import {routeNames} from '../../utils/constans';
const {STEP_01, STEP_02, STEP_03} = routeNames;

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const StepStack = () => {
  return (
    <Stack.Navigator initialRouteName={STEP_01}>
      <Stack.Screen
        name={STEP_01}
        component={STEP01}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={STEP_02}
        component={STEP02}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={STEP_03}
        component={STEP03}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const [step, setStep] = useState(true);

  function contentMain() {
    if (step) {
      return <StepStack />;
    }
    return <HomeScreen />;
  }

  return (
    <NavigationContainer>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {contentMain()}
    </NavigationContainer>
  );
}

export default AppNavigator;
