import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../constants/Colors';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import {getFormatVietNamCurrency} from '../../utils/FormatCurrency';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router/Router';
import {
  NEW_OFFER_SCREEN,
  STACK_NAVIGATION_SERVICE,
} from '../../constants/Screens';

interface Props {
  title: string;
  productList: any;
  isBigBanner: boolean;
  onPress: (id: number) => void;
}

const NewOfferComponent = (props: Props) => {
  const {productList, title, isBigBanner, onPress} = props;
  return (
    <View style={[styles.wrapperNewOffer]}>
      <TextComponent
        text={title}
        color={Colors.BLACK}
        fontWeight="bold"
        fontSize={18}
      />
      <RowComponent
        justify={'space-between'}
        alignItems="center"
        onPress={() => onPress(1)}>
        {/* List product */}
        {productList.map((item: any, index: number) => {
          return (
            <View key={item.id}>
              <View
                style={[
                  styles.containerWrapperItem,
                  {
                    width: isBigBanner ? 85 : 80,
                    height: isBigBanner ? 85 : 80,
                  },
                ]}>
                <Image source={item.image} style={styles.image} />
                {/* Sale off */}
                <View style={styles.wrapperSaleOffItem}>
                  <RowComponent justify={'space-around'} alignItems="center">
                    <IconMaterialCommunityIcons
                      name="transfer-down"
                      size={15}
                      color={Colors.WHITE}
                    />
                    <TextComponent text={item.saleOff + '%'} fontSize={14} />
                  </RowComponent>
                </View>
              </View>
              {/* Price and price has saleOff percent */}
              <View style={styles.wrapperPrice}>
                <TextComponent
                  text={
                    getFormatVietNamCurrency(
                      item.price - (item.price / 100) * item.saleOff,
                    ) + 'đ'
                  }
                  color={Colors.BLACK}
                />
                <TextComponent
                  text={getFormatVietNamCurrency(item.price) + 'đ'}
                  color={Colors.GREY}
                  fontSize={12}
                  textDecoration={true}
                />
              </View>
            </View>
          );
        })}
      </RowComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWrapperItem: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 3,
    marginTop: 10,
  },
  wrapperNewOffer: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 0.5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  wrapperSaleOffItem: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: Colors.PINK,
    paddingHorizontal: 2,
    borderTopRightRadius: 5,
  },
  wrapperPrice: {
    marginLeft: 5,
  },
});
export default NewOfferComponent;
