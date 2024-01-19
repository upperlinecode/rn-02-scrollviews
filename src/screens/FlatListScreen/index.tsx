import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import TableRow from '../../components/TableRow';
import TableSeparator from '../../components/TableSeparator';
import catData, { CatData } from '../../data';

const FlatListScreen = () => {
  const renderItem = (data: ListRenderItemInfo<CatData>) => {
    return <TableRow
      name={data.item.name}
      photo={data.item.photo}
      distance={`${data.item.distance} miles`}
    />;
  }

  return (
    <FlatList
      data={catData}
      renderItem={renderItem}
      keyExtractor={(data, index) => `${data.name}-${index}`}
      ItemSeparatorComponent={TableSeparator}
    />
  )
};

export default FlatListScreen;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})