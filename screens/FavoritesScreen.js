import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet} from "react-native";

function DicasFavoritasScreen( {navigation} ) {
    return (
        <View>
            <Text> Tela Dicas Favoritas </Text>
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