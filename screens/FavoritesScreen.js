import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet} from "react-native";
import { getFavoritos } from './HomeScreen' 
import { FlatList } from 'react-native-gesture-handler';
import { useEffect, useState, useContext } from 'react';
import { FavoritosContext } from '../context/ContextFavoritos';


const Item = ({text}) => {
    return(
        <View style={styles.dica}>
            <Text>{text}</Text>
        </View>
    )
}


function DicasFavoritasScreen({ navigation }) {
    const { favoritos } = useContext(FavoritosContext);
  
    return (
      <View style={styles.container}>
        <Text style={styles.texto_principal}> Aqui ficam guardadas as suas dicas favoritas, em ordem de inserção </Text>
        <FlatList
          data={favoritos}
          renderItem={({ item }) => <Item text={item.text}/>}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }

export default DicasFavoritasScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dica: {
    backgroundColor: '#D9CAB3', 
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,            
    fontSize: 18,                
    fontWeight: 'bold',          
    color: '#4B3E4D',            
    fontFamily: 'sans-serif',
    },
    texto_principal: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'top',
    justifyContent: 'start',
    fontSize: 20,
  },
  });