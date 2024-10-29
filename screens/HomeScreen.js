import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet} from "react-native";


function HomeScreen( {navigation} ) {
    return (
      <View style={styles.container}>
        <Text> Tela 1</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  function FavoritarDica() {

  }

  export default HomeScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });