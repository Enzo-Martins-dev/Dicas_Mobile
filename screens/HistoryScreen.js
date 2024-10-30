import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet} from "react-native";

/*const Item = ({text}) => (
  <View>
    <Text> {text} </Text>
  </View>
);*/

function HistoricoDicasScreen( {navigation} ) {
    return (
        <View>
            <Text> Tela Histórico Dicas </Text>
        </View>
    )
}

export default HistoricoDicasScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });