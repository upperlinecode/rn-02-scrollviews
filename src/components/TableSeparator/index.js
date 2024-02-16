import { View, StyleSheet } from 'react-native';

const TableSeparator = () => {
  return (
    <View style={styles.separator}></View>
  )
}

export default TableSeparator;

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#34495e',
    height: 0.5
  }
})
