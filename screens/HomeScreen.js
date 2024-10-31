import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { FavoritosContext } from '../context/ContextFavoritos';
import { HistoricoContext } from '../context/ContextHistorico';
import { Calendar }  from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Lista_dicas = require('../data/dados.json') 
/**Obtendo os dados em dados.json, estão sendo armazenados em Lista_dicas */

function getDica(Lista_dicas) { 
  const Dica = Lista_dicas[Math.floor(Math.random() * Lista_dicas.length)]
  return Dica
}

let lista_dicas_favoritadas = []
let lista_historico_dicas = []

function HomeScreen( {navigation} ) {
    const [dica, setDica] = useState('')
    const { favoritos, setFavoritos } = useContext(FavoritosContext);
    const [selectedDate, setSelectedDate] = useState('');

    const handleDayPress = (day) => {
      setSelectedDate(day.dateString);
    };

    useEffect( () => {
      const carregarDica = async () => {
        try {
          const salvarDica = await AsyncStorage.getItem(selectedDate.toString())  

          if (salvarDica) {
            const elementoPresente = BuscaLinear(salvarDica, lista_dicas_favoritadas)[0] 
            dicaExistente = JSON.parse(salvarDica)
            elementoPresente ? Alert.alert('Elemento já está na lista') : setDica(dicaExistente)
          } else if (!salvarDica) {
            const novaDica = getDica(Lista_dicas)
            setDica(novaDica)
            await AsyncStorage.setItem(selectedDate.toString(), JSON.stringify(novaDica))
          }

        } catch (error) {
          Alert.alert('Erro: ', error.message)
        }
      }
      carregarDica()
    }, [selectedDate])
    /**Toda vez que tiver uma mudança na data selecionada no calendário (selectedDate), a função carregarDica() vai ser executada.
     * Essa função vai salvar uma dica junto à data selecionada (SalvarDataDica + setDica(Json.parse)), relacionando esses dois valores.
     * Se não tiver dica, vai ser selecionada uma dica da lista original e ser atribuida ao dia.
     */

    const nomeApp = () => {
      return (
      <Text style={styles.pers_nome_app}> Ecodicas </Text>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.texto_principal}> Bem Vindo ao {nomeApp()}</Text>
        <Text> A Dica do dia {selectedDate} é: </Text>
        <Text style={styles.dica}> {dica.text} </Text>
        <StatusBar style="auto" />

        <Button
          title='Favoritar Dica'
          onPress={() => FavoritarDica(dica)}
        />
        <Button
        title='Desfavoritar Dica'
        onPress={() => DesfavoritarDica(dica)}
        />

        <Calendar
          onDayPress={handleDayPress}
          markedDates={{ [selectedDate]: { selected: true } }}
        />  
      </View>
    );

    function FavoritarDica(dica) { 
      const [elementoPresente, i] = BuscaLinear(dica, lista_dicas_favoritadas);
      try {
        if (elementoPresente) {
          Alert.alert('Dica já está nos favoritos')
      
        } else if (!elementoPresente) {
          lista_dicas_favoritadas.push(dica)
          setFavoritos([...lista_dicas_favoritadas]) /**Atualiza o valor de favoritos de acordo com a inserção de elementos na lista, usando uma
          cópia dela. A lógica da remoção na função abaixo é a mesma. Eu dividi em duas funções pra manter o princípio de uma função fazer apenas
          uma coisa.*/
          Alert.alert("Dica adicionada aos favoritos")
        }
      } catch(erro) {
        Alert.alert('Erro: ', erro.message)
      }
    }
    
    
    function DesfavoritarDica(dica) { 
      const [elementoPresente, i] = BuscaLinear(dica, lista_dicas_favoritadas);
      try {
        if (elementoPresente) {
          lista_dicas_favoritadas.splice(i, 1)
          setFavoritos([...lista_dicas_favoritadas]) 
          Alert.alert('Dica Removida dos Favoritos')
      
        } else if (!elementoPresente) {
          Alert.alert("Dica não está nos Favoritos")
        }
      } catch(erro) {
        Alert.alert('Erro: ', erro.message)
      }
      
    }
  }


function BuscaLinear(elemento, lista) { 
  /* Complexidade O(n) é a menor possível para encontrar elementos em uma lista não ordenada. 
  A busca linear possui essa complexidade, sendo eficiente para encontrar o elemento na lista.
  */
  let i = 0
  let elementoPresente = false

  for (i; i < lista.length; i++) {
    if (elemento != lista[i]) {
      continue
    } else if (elemento == lista[i]) {
      elementoPresente = true
      break;
    }
  }  
  
  return [elementoPresente, i]
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto_principal: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'top',
      justifyContent: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
    dica: {
    backgroundColor: '#D9CAB3', 
    padding: 15,
    margin: 15,
    marginVertical: 10,
    borderRadius: 12,            
    fontSize: 18,                
    fontWeight: 'bold',          
    color: '#4B3E4D',            
    fontFamily: 'sans-serif',
  },
    pers_nome_app: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'green',
      fontSize: 24
    },
    botoes: {
      
    }
  });


  //export {getFavoritos};
  export {lista_dicas_favoritadas}
  export default HomeScreen;
  