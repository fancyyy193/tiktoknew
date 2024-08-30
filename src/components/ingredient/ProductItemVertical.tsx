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
import ButtonComponent from './ButtonComponent';

interface Props {
  item: any;
  onPressOnProduct: (idProduct: number) => void;
}

const ProductItemVertical = (props: Props) => {
  const {item, onPressOnProduct} = props;
  return (
    <View key={item.id} style={styles.container}>
      <TouchableOpacity onPress={() => onPressOnProduct(item.id)}>
        <RowComponent justify={'flex-start'}>
          <View style={styles.wrapperImage}>
            <Image style={styles.image} source={item.image} />
          </View>
          <SpaceComponent width={10} />
          <View style={styles.wrapperLeftHand}>
            {/* Top */}
            <View>
              <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, deleniti. Nesciunt iure deserunt nulla mollitia!
                Perferendis facere magnam assumenda cum cupiditate delectus
                excepturi, impedit quis tenetur dolorum dicta quidem sed!
              </Text>
              <SpaceComponent height={15} />
              <RateQtyProductComponent fontSize={14} iconSize={20} />
            </View>
            {/* Bottom */}
            <RowComponent justify={'space-between'} alignItems="flex-end">
              <View>
                <TextComponent
                  text={getFormatVietNamCurrency(204000) + 'đ'}
                  color={Colors.PINK}
                  fontWeight="bold"
                />
                <SpaceComponent width={5} />
                <RowComponent justify="flex-start" alignItems="center">
                  <TextComponent
                    textDecoration
                    text={getFormatVietNamCurrency(100000)}
                    color={Colors.GREY}
                    fontSize={12}
                  />
                  <SpaceComponent width={5} />
                  <TextComponent
                    text={'-50%'}
                    color={Colors.PINK}
                    fontSize={12}
                  />
                </RowComponent>
              </View>
              <View>
                <ButtonComponent
                  backgroundColor={Colors.PINK}
                  onPress={() => {}}
                  paddingHorizontal={25}
                  borderRadius={5}
                  paddingVertical={5}
                  titleChildren={<TextComponent text="Mua" />}
                />
              </View>
            </RowComponent>
          </View>
        </RowComponent>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginRight: 20,
    overflow: 'hidden',
    backgroundColor: Colors.WHITE,
  },
  text: {
    overflow: 'hidden',
    fontSize: 15,
    color: Colors.BLACK,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 6,
  },
  wrapperImage: {
    width: 150,
    height: 150,
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
  wrapperLeftHand: {
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default ProductItemVertical;
