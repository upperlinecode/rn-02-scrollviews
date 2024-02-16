import { View, FlatList, useWindowDimensions, StyleSheet } from 'react-native';
import PhotoCard from '../../components/PhotoCard';
import { catData } from '../../data';

const CatScreen = () => {
    const { width } = useWindowDimensions();

    const renderItem = ({ item }) => {
        return (
            <PhotoCard name={item.name} photo={item.photo} distance={`${item.distance} miles`} />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={catData}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                numColumns={Math.floor(width / 200)}
            />
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
