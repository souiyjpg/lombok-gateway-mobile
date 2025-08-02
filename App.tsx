import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PackageDetailsScreen from './screens/PackageDetailsScreen';
import DestinationsScreen from './screens/DestinationsScreen';
import ContactScreen from './screens/ContactScreen';
import GalleryScreen from './screens/GalleryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: true}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Lombok Gateway' }} />
        <Stack.Screen name="PackageDetails" component={PackageDetailsScreen} options={{ title: 'Package Details' }} />
        <Stack.Screen name="Destinations" component={DestinationsScreen} options={{ title: 'Destinations' }} />
        <Stack.Screen name="Gallery" component={GalleryScreen} options={{ title: 'Gallery' }} />
        <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'Contact' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
