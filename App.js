import React from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  useFonts,
  OpenSans_800ExtraBold,
  OpenSans_400Regular,
  OpenSans_700Bold,
  OpenSans_600SemiBold,
} from '@expo-google-fonts/open-sans';

// Screens.
import Landing from './src/screens/Landing';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const Stack = createStackNavigator();

const App = () => {
  // Fonts.
  const [fonts] = useFonts({
    OpenSans_800ExtraBold,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });
  if (!fonts) {
    return <AppLoading />;
  }

  // Configs.
  const Navigator = {
    initialRouteName: 'Landing',
    screenOptions: {
      headerShown: false,
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator {...Navigator}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
