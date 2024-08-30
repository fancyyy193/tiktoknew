import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import SessionComponent from '../components/ingredient/SessionComponent';
import BannerComponent from '../components/BannerComponent';
import {SCREEN_WIDTH} from '../constants/Variables';
import {BannerTopData} from '../data/BannerTopData';
import VoucherComponent from '../components/ingredient/VoucherComponent';
import Container from '../components/ingredient/Container';
import {Colors} from '../constants/Colors';
import CategoriesNewOfferScreenComponent from '../components/ingredient/CategoriesNewOfferScreenComponent';
import {SCREEN_HEIGHT} from '@gorhom/bottom-sheet';
import AllProductComponent from '../components/toptab/AllProductComponent';
import {NewCustomerData} from '../data/NewCustomerData';
import {NewOfferData} from '../data/NewOfferData';
import {StyleSheet} from 'react-native';

const NewOfferScreen = () => {
  return (
    <ScrollView>
      <Container isCenter={false} color={Colors.PINK_PALE}>
        <SessionComponent>
          {/* Banner flash sale */}
          <VoucherComponent
            isShadow={true}
            isNeedButtonTakeTicket={false}
            backgroundColor={Colors.PINK}
          />
        </SessionComponent>
        <View style={styles.wrapperTopTab}>
          <CategoriesNewOfferScreenComponent />
        </View>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapperTopTab: {
    width: '100%',
    height: SCREEN_HEIGHT,
    backgroundColor: Colors.WHITE,
  },
});
export default NewOfferScreen;
