import { View, Text, StyleSheet } from 'react-native';

const DistanceText = ({ name, distance }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ name } / </Text>
      <Text style={styles.text}>
        { distance }
      </Text>
    </View>
  );
};

export default DistanceText;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#2c3e50',
    position: 'absolute',
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
    color: '#ecf0f1',
  }
})
