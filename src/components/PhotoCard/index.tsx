import { View, Image, StyleSheet, ImageRequireSource } from 'react-native';
import DistanceText from '../DistanceText';

interface Props {
  name: string;
  photo: ImageRequireSource;
  distance: string;
}

const PhotoCard = ({ name, photo, distance }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.image} />
      <DistanceText name={name} distance={distance} />
    </View>
  )
};

export default PhotoCard;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 200,
    width: 200
  },
  image: {
    height: 200,
    width: 200
  }
});
