import 'react-native-gesture-handler';
import React, {useState, useContext} from 'react';
//import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, FlatList, View, Text} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Navigator from './routes/HomeStack'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MyStack from './routes/HomeStack'
import { FavoritosContext } from './context/ContextFavoritos';

function App() {
  const [favoritos, setFavoritos] = useState([]);

  return (
    <GestureHandlerRootView>
      <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
        <MyStack/> 
      </FavoritosContext.Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
