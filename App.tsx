import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScrollViewsScreen from './src/screens/ScrollViewsScreen';
import FlatListScreen from './src/screens/FlatListScreen';
import TitleBar from './src/components/TitleBar';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <TitleBar />
      <View style={styles.navigationContainer}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Scroll Views"
            component={ScrollViewsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="script" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Flat Lists"
            component={FlatListScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="table" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationContainer: {
    flex: 1,
  }
})
