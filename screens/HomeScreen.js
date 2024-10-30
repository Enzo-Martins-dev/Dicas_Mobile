import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { FlatList } from 'react-native-gesture-handler';

const Lista_dicas = require('../data/dados.json')

let lista_dicas_favoritadas = []

function getDica(Lista_dicas) {
  const Dica = Lista_dicas[Math.floor(Math.random() * Lista_dicas.length)]
  return Dica
}

function getFavoritos() {
  return [...lista_dicas_favoritadas]
}

function BuscaLinear(elemento, lista) { 
  /* Complexidade O(n) é a menor possível para encontrar elementos em uma lista não ordenada.
  */
  let i = 0
  let elemento_presente = false

  for (i; i < lista.length; i++) {
    if (elemento != lista[i]) {
      continue
    } else if (elemento == lista[i]) {
      elemento_presente = true
      break;
    }
  }  
  
  return [elemento_presente, i]
}

function FavoritarDica(dica) { 
  const [elemento_presente, i] = BuscaLinear(dica, lista_dicas_favoritadas);

  if (elemento_presente) {
    Alert.alert('Dica já está nos favoritos')

  } else if (!elemento_presente) {
    lista_dicas_favoritadas.push(dica)
    Alert.alert("Dica adicionada aos favoritos")
  }
}

function DesfavoritarDica(dica) { 
  const [elemento_presente, i] = BuscaLinear(dica, lista_dicas_favoritadas);

  if (elemento_presente) {
    lista_dicas_favoritadas.splice(i, 1) 
    Alert.alert('Dica Removida dos Favoritos')

  } else if (!elemento_presente) {
    Alert.alert("Dica não está nos Favoritos")
  }
}


function HomeScreen( {navigation} ) {
    const [dica, setDica] = useState('')
    const [data, setData] = useState(new Date())

    useEffect( () => {
      setDica(getDica(Lista_dicas))
    }, [data]
    )

    return (
      <View style={styles.container}>
        <Text> Bem-Vindo! A Dica do dia é: </Text>
        <Text> {dica.text} </Text>
        <StatusBar style="auto" />

        <Button
          title='Favoritar Dica'
          onPress={() => FavoritarDica(dica)}
        />
        <Button
        title='Desfavoritar Dica'
        onPress={() => DesfavoritarDica(dica)}
        />
      </View>
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


  export {getFavoritos};
  export {lista_dicas_favoritadas}
  export default HomeScreen;
  