import { View, StyleSheet } from 'react-native';
import PhotoCard from '../../components/PhotoCard';
import catData from '../../data';

const ScrollViewsScreen = () => {
  return (
    <View style={styles.container}>
      {catData.map((data, index) => {
        return (
          <PhotoCard key={`${data.name}-${index}`} name={data.name} photo={data.photo} distance={`${data.distance} miles`} />
        )
      })}
    </View>
  )
};

export default ScrollViewsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34495e',
  }
});
