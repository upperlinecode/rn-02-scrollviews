import { ScrollView, View, StyleSheet } from 'react-native';
import PhotoCard from '../../components/PhotoCard';
import catData from '../../data';

const ScrollViewsScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
      {catData.map((data, index) => {
        return (
          <PhotoCard key={`${data.name}-${index}`} name={data.name} photo={data.photo} distance={`${data.distance} miles`} />
        )
      })}
      </View>
    </ScrollView>
  )
};

export default ScrollViewsScreen;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})
