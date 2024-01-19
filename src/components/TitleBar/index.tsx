import { View, Text, StyleSheet } from 'react-native';

const RefreshDistances = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cat Finder</Text>
    </View>
  );
};

export default RefreshDistances;

const styles = StyleSheet.create({
  container: {
    height: 100,
    padding: 10,
    backgroundColor: '#34495e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#2c3e50',
  }
})
