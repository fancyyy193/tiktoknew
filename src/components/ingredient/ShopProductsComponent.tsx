import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import {getFormatVietNamCurrency} from '../../utils/FormatCurrency';
import {Colors} from '../../constants/Colors';
import SpaceComponent from './SpaceComponent';

interface Props {
  data: any;
  onPress: (id: number) => void;
}
const ShopProductsComponent = (props: Props) => {
  const {data, onPress} = props;

  const renderItem = (item: any) => {
    return (
      <TouchableWithoutFeedback onPress={() => onPress(item.id)}>
        <View style={{marginRight: 10}}>
          <Image
            source={item.image}
            style={{width: 150, height: 150, borderRadius: 5}}
          />
          <SpaceComponent height={5} />
          <TextComponent
            fontWeight="bold"
            color={Colors.BLACK}
            text={
              getFormatVietNamCurrency(
                item.price - (item.price / 100) * item.saleOffPercent,
              ) + 'đ'
            }
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={{
          justifyContent: 'space-between',
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        extraData={data}
        keyExtractor={item => item.id}
        renderItem={({item}: any) => renderItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShopProductsComponent;
