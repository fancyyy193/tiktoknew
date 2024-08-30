import {SCREEN_WIDTH} from '@gorhom/bottom-sheet';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Colors} from '../../constants/Colors';
import RowComponent from '../ingredient/RowComponent';
import SessionComponent from '../ingredient/SessionComponent';
import SpaceComponent from '../ingredient/SpaceComponent';
import SkeletonLineComponent from './Item/SkeletonLineComponent';
import SkeletonListProductComponent from './Item/SkeletonListProductComponent';
import SkeletonProductComponent from './Item/SkeletonProductComponent';
import SkeletonTicketComponent from './Item/SkeletonTicketComponent';

const SkeletonShopScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Navbar */}
        <SessionComponent padding={10}>
          <SkeletonLineComponent
            height={40}
            width={'100%'}
            borderRadius={10}
            backgroundColor={Colors.GREY_4}
          />
          <SpaceComponent height={20} />
          {/* Ticket voucher*/}
          <RowComponent justify={'space-around'} alignItems="center">
            <SkeletonTicketComponent />
            <SkeletonTicketComponent />
            <SkeletonTicketComponent />
            <SkeletonTicketComponent />
          </RowComponent>
          {/* Product */}
          <SpaceComponent height={30} />
          <View style={styles.wrapperProduct}>
            <SkeletonListProductComponent needTwoLine={false} />
          </View>
          <SpaceComponent height={10} />
          <View style={styles.wrapperCategories}>
            <SkeletonListProductComponent needTwoLine={true} />
          </View>
          {/* Lines */}
          <SpaceComponent height={20} />
          <RowComponent justify={'space-around'} alignItems="center">
            <SkeletonLineComponent
              backgroundColor={Colors.GREY_4}
              borderRadius={3}
              height={20}
              width={70}
            />
            <SkeletonLineComponent
              backgroundColor={Colors.GREY_4}
              borderRadius={3}
              height={20}
              width={70}
            />
            <SkeletonLineComponent
              backgroundColor={Colors.GREY_4}
              borderRadius={3}
              height={20}
              width={70}
            />
            <SkeletonLineComponent
              backgroundColor={Colors.GREY_4}
              borderRadius={3}
              height={20}
              width={70}
            />
          </RowComponent>
          {/* Show product */}
          <SpaceComponent height={20} />
          <RowComponent justify="space-between">
            <SkeletonProductComponent
              borderRadius={5}
              width={(SCREEN_WIDTH - 25) / 2}
              height={200}
              needTwoLine={false}
              backgroundColor={Colors.GREY_4}
            />
            <SkeletonProductComponent
              borderRadius={5}
              width={(SCREEN_WIDTH - 25) / 2}
              height={200}
              needTwoLine={false}
              backgroundColor={Colors.GREY_4}
            />
          </RowComponent>
          <SpaceComponent height={20} />
        </SessionComponent>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(244 244 244)',
  },
  wrapperCategories: {
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
  },
  wrapperProduct: {
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
  },
});

export default SkeletonShopScreen;
