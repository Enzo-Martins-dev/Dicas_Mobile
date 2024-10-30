import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, FlatList, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Navigator from './routes/HomeStack'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MyStack from './routes/HomeStack'


const App = () => {

  return (
      <GestureHandlerRootView>
        <MyStack/>
      </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
