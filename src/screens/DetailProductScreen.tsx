import React, {useRef, useState} from 'react';
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import BannerComponent from '../components/BannerComponent';
import PrintfStart from '../components/PrintfStart';
import ButtonComponent from '../components/ingredient/ButtonComponent';
import ContentSingleVideo from '../components/ingredient/ContentSingleVideo';
import FeedBackComponent from '../components/ingredient/FeedBackComponent';
import PaymentMethodsComponent from '../components/ingredient/PaymentMethodsComponent';
import RateQtyProductComponent from '../components/ingredient/RateQtyProductComponent';
import RowComponent from '../components/ingredient/RowComponent';
import SessionComponent from '../components/ingredient/SessionComponent';
import SpaceComponent from '../components/ingredient/SpaceComponent';
import TextComponent from '../components/ingredient/TextComponent';
import VoucherComponent from '../components/ingredient/VoucherComponent';
import VoucherItemComponent from '../components/ingredient/VoucherItemComponent';
import {Colors} from '../constants/Colors';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WINDOW_HEIGHT,
} from '../constants/Variables';
import {SingleProductData} from '../data/SingleProductData';
import {GlobalStyle} from '../styles/GlobalStyle';
import {getFormatVietNamCurrency} from '../utils/FormatCurrency';
import ButtonBackToTop from '../components/ingredient/ButtonBackToTop';
import {handleScrollEvent} from '../utils/BackToTopListen';
import ShopItemInfoComponent from '../components/ingredient/ShopItemInfoComponent';
import ShopProductsComponent from '../components/ingredient/ShopProductsComponent';
import AllProductComponent from '../components/toptab/AllProductComponent';
import BottomComponentDetailScreen from '../components/BottomComponentDetailScreen';
import {NewOfferData} from '../data/NewOfferData';

const DetailProductScreen = () => {
  console.log('====================DetailScreen================');
  const data = SingleProductData;
  const ScrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const widthOfPerImage = SCREEN_WIDTH;
  const totalWidthOfArrayImages = widthOfPerImage * data.images.length;
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);

  return (
    <View>
      <ScrollView
        onScroll={event =>
          handleScrollEvent(event, showBackToTopButton, setShowBackToTopButton)
        }
        ref={ScrollViewRef}
        showsVerticalScrollIndicator={false}>
        {/* Product images  */}
        <BannerComponent
          autoScroll={false}
          showIndexNumber={true}
          widthOfBanner={SCREEN_WIDTH}
          height={WINDOW_HEIGHT * 0.5}
          data={SingleProductData.images}
        />
        {/* Price and policy */}
        <LinearGradient
          colors={['rgb(254 103 78)', 'rgb(255 26 135)']}
          angle={45}>
          <SessionComponent>
            <RowComponent justify={'space-between'} alignItems="center">
              <RowComponent justify="flex-start" alignItems="center">
                <IconIonicons name="ticket" size={20} color={Colors.WHITE} />
                <SpaceComponent width={5} />
                <TextComponent
                  fontSize={18}
                  text={`${getFormatVietNamCurrency(SingleProductData.price)} đ`}
                />
              </RowComponent>
              <TextComponent text={`Chiết khấu khách hàng đầu tiên`} />
            </RowComponent>
          </SessionComponent>
        </LinearGradient>
        {/* Name */}
        <SessionComponent paddingNotTop={true} backgroundColor={Colors.WHITE}>
          <SpaceComponent height={10} />
          <RowComponent justify="space-between">
            <View style={{width: '95%'}}>
              <ContentSingleVideo
                color={Colors.BLACK}
                numberOfLines={3}
                content={data.name}
                padding={0}
              />
            </View>
            <View style={{width: '5%', alignItems: 'flex-end'}}>
              <IconFontisto
                style={{
                  paddingTop: 5,
                }}
                name="favorite"
                size={25}
                color={Colors.BLACK}
              />
            </View>
          </RowComponent>
          <SpaceComponent height={20} />
          <RateQtyProductComponent
            rateQty={<TextComponent text="(33)" color={Colors.BLUE_1} />}
            fontSize={15}
            color={Colors.BLACK}
          />
          {/* Policy with customer */}
        </SessionComponent>

        {/* Options choose */}
        <View style={styles.wrapperOptionsAndSelect}>
          <SessionComponent backgroundColor={Colors.WHITE}>
            <RowComponent justify="space-between" alignItems="center">
              <TextComponent
                fontWeight="bold"
                text="Chọn các tùy chọn"
                fontSize={18}
                color={Colors.BLACK}
              />
              <ButtonComponent
                titleChildren={
                  <TextComponent
                    text="# 01"
                    color={Colors.BLACK}
                    fontSize={18}
                  />
                }
                beHindIcon={
                  <IconAntDesign name="right" size={15} color={Colors.GREY} />
                }
                onPress={() => {
                  console.log('see option');
                }}
              />
            </RowComponent>
          </SessionComponent>
        </View>

        {/* Voucher saleOff */}
        <View style={styles.wrapperVoucherAndSaleOff}>
          <VoucherItemComponent
            id={1}
            content={'Voucher khuyến mãi'}
            onPress={id => console.log(id)}
          />
          <VoucherComponent
            isVoucherInDetailScreen={true}
            padding={0}
            widthOfTicket={300}
            isNeedButtonTakeTicket={true}
          />
          {/* Line under banner voucher */}
          <View
            style={[
              GlobalStyle.SessionPaddingHorizontal,
              styles.lineUnderBanner,
            ]}
          />
          <VoucherItemComponent
            id={1}
            content={'mua 5 khuyến mãi 3'}
            onPress={id => console.log(id)}
          />
        </View>

        {/* Payment and ship */}
        <View style={{backgroundColor: Colors.WHITE}}>
          <SessionComponent>
            <TextComponent
              text="Hình thức thanh toán"
              color={Colors.BLACK}
              fontSize={18}
              fontWeight="bold"
            />
            {/* Payment methods item */}
            <PaymentMethodsComponent content="Thanh toán bằng tiền mặt (COD)" />
            <PaymentMethodsComponent content="Thanh toán bằng thẻ visa" />
            {/* Ship price */}
            <RowComponent justify="space-between" alignItems="center">
              <TextComponent
                text="Vận chuyển"
                fontSize={18}
                color={Colors.BLACK}
              />
              <TextComponent
                text="Từ 17.000đ"
                fontSize={18}
                color={Colors.BLACK}
              />
            </RowComponent>
            {/* Estimated delivery time */}
            <View style={styles.wrapperDeliveryInfo}>
              <RowComponent justify="space-around" alignItems="center">
                <View
                  style={{
                    paddingRight: 10,
                    paddingLeft: 20,
                  }}>
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                    }}
                    source={require('../assets/images/truckShip.png')}
                  />
                </View>
                {/* line arrow*/}
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      height: 1,
                      backgroundColor: Colors.GREY_PALE,
                      width: '95%',
                    }}
                  />
                  <IconAntDesign
                    name="caretright"
                    size={10}
                    color={Colors.GREY_PALE}
                  />
                </View>
                <View
                  style={{
                    paddingLeft: 10,
                    paddingRight: 20,
                  }}>
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                    }}
                    source={require('../assets/images/truckShip.png')}
                  />
                </View>
              </RowComponent>
              {/* Locations */}
              <RowComponent justify={'space-between'} alignItems="center">
                <TextComponent text="Từ nước ngoài" color={Colors.GREY} />
                <TextComponent text="Việt Nam" color={Colors.GREY} />
              </RowComponent>
            </View>
          </SessionComponent>
          {/* Line under banner voucher */}
          <View
            style={[
              GlobalStyle.SessionPaddingHorizontal,
              styles.lineUnderBanner,
            ]}
          />
          <VoucherItemComponent
            id={1}
            content={'Chính sách đổi trả'}
            onPress={id => console.log(id)}
          />
        </View>

        {/* Feedback */}
        <View style={{backgroundColor: Colors.WHITE, marginVertical: 10}}>
          <SessionComponent>
            {/* Rate total qty */}
            <RowComponent alignItems="center" justify="flex-start">
              <TextComponent text={`${data.rate}`} color={Colors.BLACK} />
              <TextComponent text={' / 5 '} color={Colors.GREY} />
              <PrintfStart rateQty={5} />
            </RowComponent>
            {/* Feedback */}
            <FeedBackComponent data={data.rateList} />
            {/* Line under */}
            <View
              style={[
                GlobalStyle.SessionPaddingHorizontal,
                styles.lineUnderBanner,
              ]}
            />
            {/* Total rate*/}
            <TextComponent
              fontWeight="bold"
              text="Đánh giá của khách hàng dàng cho cửa hàng (1.4k)"
              color={Colors.BLACK}
              fontSize={18}
            />
            <SpaceComponent height={5} />
            <View
              style={{
                borderRadius: 3,
                borderColor: Colors.GREY,
                borderWidth: 0.5,
                width: 70,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 5,
              }}>
              <RowComponent justify={'flex-start'} alignItems="center">
                <TextComponent text="5" color={Colors.BLACK} />
                <IconEntypo name="star" size={15} color={Colors.YELLOW} />
                <TextComponent text="(1.1k)" color={Colors.BLACK} />
              </RowComponent>
            </View>
          </SessionComponent>
        </View>

        {/* Shop */}
        <View style={{backgroundColor: Colors.WHITE, marginVertical: 10}}>
          <SessionComponent>
            <RowComponent justify={'space-between'} alignItems="center">
              <RowComponent justify={'flex-start'} alignItems="center">
                {/* Icon */}
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 60,
                    height: 60,
                    borderWidth: 0.3,
                    borderColor: Colors.BLACK,
                    backgroundColor: Colors.GREY_4,
                    borderRadius: 100,
                  }}>
                  <IconFontisto
                    name="shopping-store"
                    size={25}
                    color={Colors.GREY}
                  />
                </View>
                <SpaceComponent width={10} />
                {/* Name */}
                <View>
                  <TextComponent
                    fontWeight="bold"
                    text={data.shop.name}
                    color={Colors.BLACK}
                  />
                  <RowComponent justify={'flex-start'} alignItems="center">
                    <IconEntypo name="star" size={15} color={'green'} />
                    <TextComponent
                      text={data.shop.averageOfStar + ''}
                      color={Colors.BLACK}
                    />
                  </RowComponent>
                </View>
              </RowComponent>
              <ButtonComponent
                backgroundColor={Colors.GREY_4}
                paddingHorizontal={15}
                paddingVertical={8}
                borderRadius={5}
                titleChildren={
                  <TextComponent
                    fontWeight="bold"
                    text="Truy Cập"
                    color={Colors.BLACK}
                  />
                }
                onPress={() => {
                  console.log('truy cap shop');
                }}
              />
            </RowComponent>
            <SpaceComponent height={20} />
            {/* product of shop */}
            <RowComponent justify={'flex-start'} alignItems="center">
              <ShopItemInfoComponent
                qty={data.shop.productQty}
                title={'Products'}
              />
              <ShopItemInfoComponent
                qty={data.shop.soldQty}
                title={'Total sales'}
              />
            </RowComponent>
            <SpaceComponent height={15} />
            {/* Line under banner voucher */}
            <View
              style={[
                GlobalStyle.SessionPaddingHorizontal,
                styles.lineUnderBanner,
              ]}
            />
            <SpaceComponent height={15} />
            <VoucherItemComponent
              id={1}
              content={'Chính sách đổi trả'}
              onPress={id => console.log(id)}
              padding={0}
              color={Colors.GREY}
              fontSize={15}
            />
            <SpaceComponent height={10} />
            {/* Product by this store */}
            <ShopProductsComponent
              onPress={id => {
                console.log(id);
              }}
              data={data.shop.displayProducts}
            />
          </SessionComponent>
          <SpaceComponent height={15} />
        </View>

        {/* Introduce of product */}
        <View style={{backgroundColor: Colors.WHITE, marginVertical: 10}}>
          <SessionComponent>
            <TextComponent
              fontSize={18}
              text="Giới thiệu về sản phẩm này"
              color={Colors.BLACK}
              fontWeight="bold"
            />
            <SpaceComponent height={10} />
            <TextComponent
              fontSize={15}
              text={data.descriptions}
              color={Colors.BLACK}
            />
          </SessionComponent>
        </View>

        {/* Suggestion product */}
        <View style={{backgroundColor: Colors.WHITE, marginVertical: 10}}>
          <SessionComponent padding={10}>
            <TextComponent
              fontSize={18}
              text="Có thể bạn cũng thích"
              color={Colors.BLACK}
              fontWeight="bold"
            />
            <AllProductComponent
              onPressOnProduct={() => console.log('suggestion product')}
              data={NewOfferData}
              type={0}
            />
          </SessionComponent>
        </View>
      </ScrollView>
      {/* BackToTop button */}
      {showBackToTopButton && (
        <ButtonBackToTop height={100} scrollViewRef={ScrollViewRef} />
      )}
      <BottomComponentDetailScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  lineUnderBanner: {
    borderBottomWidth: 0.2,
    borderColor: Colors.GREY,
    paddingTop: 10,
  },
  wrapperVoucherAndSaleOff: {
    backgroundColor: Colors.WHITE,
    marginVertical: 10,
  },
  wrapperOptionsAndSelect: {
    marginTop: 10,
  },
  wrapperDeliveryInfo: {
    backgroundColor: 'rgb(248 248 248)',
    padding: 30,
  },
});
export default DetailProductScreen;
