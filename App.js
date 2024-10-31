import 'react-native-gesture-handler';
import React, {useState, useContext} from 'react';
import { SafeAreaView, StyleSheet, FlatList, View, Text} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MyStack from './routes/HomeStack'
import { FavoritosContext } from './context/ContextFavoritos';
import { HistoricoContext } from './context/ContextHistorico';

function App() {
  const [favoritos, setFavoritos] = useState([])
  const [historico, setHistorico] = useState([])

  return (
    <GestureHandlerRootView>

      <FavoritosContext.Provider value={{favoritos, setFavoritos}}> 
        <HistoricoContext.Provider value={{historico, setHistorico}}>

          <MyStack/>

        </HistoricoContext.Provider>
      </FavoritosContext.Provider>

    </GestureHandlerRootView>
  ); /*favoritos e historico vão poder ser acessados e modificados por todas as telas e demais estruturas dentro dos Providers (no caso, 
     MyStack, que possui todas as telas). */
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
