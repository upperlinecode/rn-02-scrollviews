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
    backgroundColor: '#34495e',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  text: {
    fontSize: 20,
    color: '#fff',
  }
})
