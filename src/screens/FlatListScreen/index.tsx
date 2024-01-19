import { View, ListRenderItemInfo, StyleSheet } from 'react-native';
import TableRow from '../../components/TableRow';
import TableSeparator from '../../components/TableSeparator';
import catData, { CatData } from '../../data';

const FlatListScreen = () => {
  return (
    <View>
      {catData.map((data, index) => {
        return (
          <TableRow
            key={`${data.name}-${index}`}
            name={data.name}
            photo={data.photo}
            distance={`${data.distance} miles`}
          />
        );
      })}
    </View>
  )
};

export default FlatListScreen;