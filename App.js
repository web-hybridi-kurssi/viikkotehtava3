import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import MainAppbar from './components/MainAppbar';

const Stack = createStackNavigator()

export default function App() {
  return (
    <PaperProvider>
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        header: (props) => <MainAppbar {...props} />,
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Second" component={SecondScreen}/>
      </Stack.Navigator>
   </NavigationContainer>
   </PaperProvider>
  );
}

