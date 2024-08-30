import { CommonActions, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import BannerComponent from '../components/BannerComponent';
import ButtonBackToTop from '../components/ingredient/ButtonBackToTop';
import CategoriesComponent from '../components/ingredient/CategoriesShopScreenComponent';
import NewOfferComponent from '../components/ingredient/NewOfferComponent';
import RowComponent from '../components/ingredient/RowComponent';
import SessionComponent from '../components/ingredient/SessionComponent';
import SpaceComponent from '../components/ingredient/SpaceComponent';
import VoucherComponent from '../components/ingredient/VoucherComponent';
import { Colors } from '../constants/Colors';
import { BRAND_DISCOUNTS, NEW_OFFER_SCREEN, STACK_NAVIGATION_SERVICE } from '../constants/Screens';
import {
  FLASH_SALE,
  NEW_OFFER,
  SALE_OFF,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../constants/Variables';
import { BannerTopData } from '../data/BannerTopData';
import { NewOfferData, NewOfferDataSale } from '../data/NewOfferData';
import { RootStackParamList } from '../router/Router';
import { handleScrollEvent } from '../utils/BackToTopListen';
import { Screen } from 'react-native-screens';

const ShopScreen = () => {
  console.log('=================ShopScreen===================');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const ScrollViewRef = useRef<ScrollView>(null);
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);

  const handleClickBannerEvent = (id: number) => {
    switch (id) {
      case NEW_OFFER:
        navigation.navigate(STACK_NAVIGATION_SERVICE, {
          screen: NEW_OFFER_SCREEN,
          params: undefined,
        } as any);
        break;
      case FLASH_SALE:
        console.log('FLASH_SALE');
        break;
      case SALE_OFF:
        console.log('SALE_OFF');
        break;
      default:
        break;
    }
  };

  return (
    <View>
      <SessionComponent padding={10}>
        <ScrollView
          onScroll={event =>
            handleScrollEvent(
              event,
              showBackToTopButton,
              setShowBackToTopButton,
            )
          }
          ref={ScrollViewRef}
          showsVerticalScrollIndicator={false}>
          {/* Banner */}
          <BannerComponent
            autoScroll={true}
            showNode={true}
            widthOfBanner={SCREEN_WIDTH - 20}
            height={110}
            data={BannerTopData}
          />
          {/* Body */}
          {/* New voucher */}
          <VoucherComponent isShadow={true} isNeedButtonTakeTicket={false} />
          {/* New offer */}
          <NewOfferComponent
            onPress={handleClickBannerEvent}
            isBigBanner={true}
            title="Ưu Đãi Bạn Mới"
            productList={NewOfferData}
          />
          {/* Host sale */}
          <SpaceComponent height={10} />
          <RowComponent justify={'space-between'} alignItems="center">
            <NewOfferComponent
              onPress={id => {
                navigation.dispatch(
                  CommonActions.navigate({
                    
                    name: STACK_NAVIGATION_SERVICE,
                    params: {
                      screen: BRAND_DISCOUNTS,
                    },
                  })
                );
              }}
              isBigBanner={false}
              title="Hàng Hiệu Giá Hời"
              productList={NewOfferDataSale}
            />
            <SpaceComponent width={10} />
            <NewOfferComponent
              onPress={id => {
                console.log(id);
              }}
              isBigBanner={false}
              title="Flash Sale"
              productList={NewOfferDataSale}
            />
          </RowComponent>
          <SpaceComponent height={10} />
          <View style={styles.wrapperCategories}>
            <CategoriesComponent />
          </View>
        </ScrollView>
      </SessionComponent>
      {showBackToTopButton && <ButtonBackToTop scrollViewRef={ScrollViewRef} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperBanner: {
    backgroundColor: Colors.WHITE,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
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
  bannerItem: {
    backgroundColor: 'rgb(254 242 250)',
    width: 200,
    height: 70,
    justifyContent: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: 10,
  },
  dot: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    top: 30,
  },
  dotLeft: {
    left: -5,
  },
  dotRight: {
    right: -5,
  },
  wrapperNewOffer: {
    backgroundColor: Colors.WHITE,
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
  wrapperCategories: {
    flex: 1,
    width: '100%',
    height: SCREEN_HEIGHT,
  },
});

export default ShopScreen;
