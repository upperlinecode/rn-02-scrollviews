import { View, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DistanceText from '../DistanceText';

const PhotoCard = ({ name, photo, distance }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Messages');
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <Image source={photo} style={styles.image} />
        <DistanceText name={name} distance={distance} />
      </View>
    </Pressable>
  )
};

export default PhotoCard;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1
  },
  image: {
    height: 200,
    width: 200
  }
});
