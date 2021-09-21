import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeTab from './Components/AppNavigation/HomeTab';
import SearchTab from './Components/AppNavigation/SearchTab';
import ShortsTab from './Components/AppNavigation/ShortsTab';
import ShopTab from './Components/AppNavigation/ShopTab';
import MyTab from './Components/AppNavigation/MyTab';

const Tab = createBottomTabNavigator();

const App=() => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeTab') {
              iconName = focused ? 'home' : 'home-outline';
            }
            else if (route.name === 'SearchTab') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            }
            else if (route.name === 'ShortsTab') {
              iconName = focused ? 'play-box-multiple' : 'play-box-multiple-outline';
              return <MaterialCommunityIcons name={iconName} size={size}  color={color}/>;
            }
            else if (route.name === 'ShopTab') {
              iconName = focused ? 'shopping' : 'shopping-outline';
              return <MaterialCommunityIcons name={iconName} size={size}  color={color}/>;
            }
            else if (route.name === 'MyTab') {
              iconName = focused ? 'face' : 'face-outline';
              return <MaterialCommunityIcons name={iconName} size={size}  color={color}/>;
            }

            return <Ionicons name={iconName} size={size}  color={color}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          showLabel: false
        }}
      >
          <Tab.Screen name="HomeTab" component={ HomeTab } options={{ headerShown: false}} />
          <Tab.Screen name="SearchTab" component={ SearchTab } options={{ headerShown: false }} />
          <Tab.Screen name="ShortsTab" component={ ShortsTab } options={{ headerShown: false }} />
          <Tab.Screen name="ShopTab" component={ ShopTab } options={{ headerShown: false }} />
          <Tab.Screen name="MyTab" component={ MyTab } options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
