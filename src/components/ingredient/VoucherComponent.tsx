import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../constants/Colors';
import {BannerData} from '../../data/BannerData';
import SessionComponent from './SessionComponent';
import TextComponent from './TextComponent';
import {GlobalStyle} from '../../styles/GlobalStyle';
import ButtonComponent from './ButtonComponent';

interface Props {
  padding?: number;
  isShadow?: boolean;
  widthOfTicket?: number;
  isNeedButtonTakeTicket: boolean;
  isVoucherInDetailScreen?: boolean;
  backgroundColor?: string;
}

const VoucherComponent = (props: Props) => {
  const {
    isShadow,
    padding,
    widthOfTicket,
    isNeedButtonTakeTicket,
    isVoucherInDetailScreen,
    backgroundColor,
  } = props;
  return (
    <View
      style={[
        styles.wrapperBanner,
        isShadow && GlobalStyle.shadow,
        {
          paddingVertical: padding ?? 10,
          backgroundColor: backgroundColor ?? Colors.WHITE,
        },
      ]}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={BannerData}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              console.log(item.id);
            }}>
            <View style={[styles.bannerItem, {width: widthOfTicket ?? 200}]}>
              <SessionComponent padding={5}>
                <TextComponent
                  text={item.title}
                  color={isVoucherInDetailScreen ? Colors.GREY : Colors.PINK}
                  fontWeight={isVoucherInDetailScreen ? '600' : 'bold'}
                />
                {!isVoucherInDetailScreen && (
                  <TextComponent text={item.descriptions} color={Colors.GREY} />
                )}
              </SessionComponent>
              <View style={[styles.wrapperNewOfferTitle]}>
                <TextComponent
                  text="Đã nhận"
                  fontWeight={isVoucherInDetailScreen ? 'bold' : '600'}
                  color={isVoucherInDetailScreen ? Colors.BLACK : Colors.PINK}
                  fontSize={isVoucherInDetailScreen ? 18 : 12}
                />
              </View>
              <View
                style={[
                  styles.dot,
                  styles.dotLeft,
                  {backgroundColor: backgroundColor ?? Colors.WHITE},
                ]}
              />
              <View
                style={[
                  styles.dot,
                  styles.dotRight,
                  {backgroundColor: backgroundColor ?? Colors.WHITE},
                ]}
              />
              {isNeedButtonTakeTicket && (
                <View style={styles.wrapperButtonTakeVoucher}>
                  <ButtonComponent
                    paddingHorizontal={13}
                    paddingVertical={2}
                    titleChildren={<TextComponent fontSize={18} text="Nhận" />}
                    backgroundColor={Colors.PINK}
                    onPress={() => console.log('take voucher')}
                  />
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperBanner: {
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  bannerItem: {
    backgroundColor: 'rgb(254 242 250)',
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
    top: 30,
  },
  dotLeft: {
    left: -5,
  },
  dotRight: {
    right: -5,
  },
  wrapperNewOfferTitle: {
    position: 'absolute',
    top: 0,
    left: 2,
  },
  wrapperButtonTakeVoucher: {
    position: 'absolute',
    right: 10,
  },
});

export default VoucherComponent;
