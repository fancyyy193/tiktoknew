import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ProductItem from '../ingredient/ProductItem';
import ProductItemVertical from '../ingredient/ProductItemVertical';
import {Colors} from '../../constants/Colors';

interface Props {
  data: any;
  type: number;
  onPressOnProduct: (idProduct: number) => void;
}

const AllProductComponent = (props: Props) => {
  const {onPressOnProduct, data, type} = props;

  switch (type) {
    case 1:
      return (
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            keyExtractor={(item: any) => item.id}
            columnWrapperStyle={styles.container}
            numColumns={2}
            data={data}
            extraData={data}
            // ItemSeparatorComponent={}
            renderItem={({item}) => {
              return (
                <ProductItem item={item} onPressOnProduct={onPressOnProduct} />
              );
            }}
          />
        </View>
      );
    case 2:
      return (
        <View style={styles.wrapperVerticalItems}>
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            keyExtractor={(item: any) => item.id}
            data={data}
            extraData={data}
            // ItemSeparatorComponent={}
            renderItem={({item}) => {
              return (
                <ProductItemVertical
                  item={item}
                  onPressOnProduct={onPressOnProduct}
                />
              );
            }}
          />
        </View>
      );
    default:
      break;
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  wrapperVerticalItems: {
    backgroundColor: Colors.WHITE,
  },
});
export default AllProductComponent;
