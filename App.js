import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CatScreen from './src/screens/CatScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import TitleBar from './src/components/TitleBar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <TitleBar />
      <View style={styles.navigationContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Cats"
            component={CatScreen}
          />
          <Stack.Screen
            name="Messages"
            component={MessagesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 940,
    width: 600
  },
  navigationContainer: {
    height: 940,
    width: 600
  }
})
