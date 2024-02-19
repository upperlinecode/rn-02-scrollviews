import { View, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CatScreen from './src/screens/CatScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import TitleBar from './src/components/TitleBar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationContainer: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  }
})
