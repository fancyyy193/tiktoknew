import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import SessionComponent from './SessionComponent';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import {Colors} from '../../constants/Colors';
import SpaceComponent from './SpaceComponent';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {SCREEN_WIDTH} from '../../constants/Variables';
import RateQtyProductComponent from './RateQtyProductComponent';
import {getFormatVietNamCurrency} from '../../utils/FormatCurrency';

interface Props {
  item: any;
  onPressOnProduct: (idProduct: number) => void;
}
const ProductItem = (props: Props) => {
  const {item, onPressOnProduct} = props;
  return (
    <TouchableOpacity onPress={() => onPressOnProduct(item.id)}>
      <View key={item.id} style={styles.container}>
        <View style={styles.wrapperImage}>
          <Image style={styles.image} source={item.image} />
        </View>
        <SessionComponent padding={5}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.text, {maxWidth: (SCREEN_WIDTH - 20) / 2 - 10}]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            deleniti. Nesciunt iure deserunt nulla mollitia! Perferendis facere
            magnam assumenda cum cupiditate delectus excepturi, impedit quis
            tenetur dolorum dicta quidem sed!
          </Text>
          <RowComponent justify={'flex-start'} alignItems="center">
            <TextComponent
              text={getFormatVietNamCurrency(204000) + 'đ'}
              color={Colors.PINK}
              fontWeight="bold"
            />
            <SpaceComponent width={5} />
            <TextComponent text={'-50%'} color={Colors.PINK} fontSize={12} />
          </RowComponent>
          <RowComponent justify={'flex-start'} alignItems="center">
            <Image
              style={styles.imageTruck}
              source={require('../../assets/images/truck.png')}
            />
            <SpaceComponent width={5} />
            <View style={styles.cod}>
              <TextComponent text="COD" fontSize={10} color={Colors.PINK} />
            </View>
          </RowComponent>
          <RateQtyProductComponent />
        </SessionComponent>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: Colors.WHITE,
  },
  text: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  wrapperImage: {
    width: (SCREEN_WIDTH - 10) / 2 - 10,
    height: 200,
  },
  imageTruck: {
    width: 20,
    height: 20,
  },
  cod: {
    borderWidth: 0.5,
    borderColor: Colors.GREY,
    borderRadius: 2,
    paddingHorizontal: 2,
  },
});

export default ProductItem;
