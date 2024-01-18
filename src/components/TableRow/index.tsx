import { View, Image, Text, StyleSheet, ImageRequireSource } from 'react-native';

interface Props {
  name: string;
  photo: ImageRequireSource;
  distance: string;
}

const TableRow = ({ name, photo, distance }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{distance}</Text>
    </View>
  )
}

export default TableRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 20
  },
  image: {
    height: 200,
    width: 300,
  },
  text: {
    fontSize: 20,
    color: '#000',
  }
});
