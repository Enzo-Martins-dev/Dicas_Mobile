import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DicasFavoritasScreen from '../screens/FavoritesScreen';
import HistoricoDicasScreen from '../screens/HistoryScreen';

const Tab = createBottomTabNavigator();

function MyStack() {
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

/*
  Aqui foi criado a Stack (Pilha), que é usada para comandar as alterações de telas através da inserção/remoção destas na pilha.
  Os elementos foram criado como parte de uma tab (Tab.Screen dentro de um Tab.Navigator), logo são representados como elementos dentro de uma
  tab, na parte de baixo da tela, já que Tab é um 'BottomTabNavigator'.
*/

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