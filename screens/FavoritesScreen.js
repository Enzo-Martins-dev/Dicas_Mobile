import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet} from "react-native";
import { getFavoritos } from './HomeScreen' 
import { FlatList } from 'react-native-gesture-handler';
import { useEffect, useState, useContext } from 'react';
import { lista_dicas_favoritadas } from './HomeScreen';
import { FavoritosContext } from '../context/ContextFavoritos';


const Item = ({text}) => {
    return(
        <View>
            <Text>{text}</Text>
        </View>
    )
}


function DicasFavoritasScreen({ navigation }) {
    const { favoritos } = useContext(FavoritosContext);
  
    return (
      <View>
        <Text> Tela Dicas Favoritas </Text>
        <FlatList
          data={favoritos}
          renderItem={({ item }) => <Item text={item.text} />}
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
  });