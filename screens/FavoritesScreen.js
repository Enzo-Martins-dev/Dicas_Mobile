import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet} from "react-native";
import { getFavoritos } from './HomeScreen' 
import { FlatList } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { lista_dicas_favoritadas } from './HomeScreen';

const Item = ({text}) => {
    return(
        <View>
            <Text>{text}</Text>
        </View>
    )
}

//let lista_dicas_favoritadas = getFavoritos()

//<Text> {lista_dicas_favoritadas[0]?.text} </Text>

function DicasFavoritasScreen( {navigation} ) {
    const [favoritos, setFavoritos] = useState([])

    useEffect (() => {
        setFavoritos(lista_dicas_favoritadas) 
    }, [lista_dicas_favoritadas]) 

    return (
        <View>
            <Text> Tela Dicas Favoritas </Text>
            <FlatList
                data={favoritos}
                renderItem={({item}) => <Item text={item.text}/>}    
                keyExtractor={item => item.id}
            />
        </View>
    )
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