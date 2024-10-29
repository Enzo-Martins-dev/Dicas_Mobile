import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DicasFavoritasScreen from '../screens/FavoritesScreen';
import HistoricoDicasScreen from '../screens/HistoryScreen';

const Tab = createBottomTabNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favoritos" component={DicasFavoritasScreen} />
        <Tab.Screen name="Historico" component={HistoricoDicasScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MyStack; 

  /*const screens = {
    Home: {
        HomeScreen: HomeScreen
    },
    Dicas: {
        DicasFavoritasScreen: DicasFavoritasScreen
    },
    Historico: {
        HistoricoDicasScreen: HistoricoDicasScreen
    }
}*/