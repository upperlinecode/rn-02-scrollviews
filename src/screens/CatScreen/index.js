import { View, StyleSheet } from 'react-native';
import PhotoCard from '../../components/PhotoCard';
import { catData } from '../../data';

const CatScreen = () => {
    return (
        <View style={styles.container}>
            {catData.map((item, index) => {
                return (
                    <PhotoCard
                        key={`${item.name}-${index}`}
                        name={item.name}
                        photo={item.photo}
                        distance={`${item.distance} miles`}
                    />
                )
            })}
        </View>
    );
};

export default CatScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#34495e',
        alignItems: 'center'
    },
});
