import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { DETAIL_SCREEN, STACK_NAVIGATION_SERVICE } from '../../constants/Screens';
import { NewOfferData } from '../../data/NewOfferData';
import { RootStackParamList } from '../../router/Router';
import AllProductComponent from '../toptab/AllProductComponent';
import BestSellingDealComponent from '../toptab/BestSellingDealComponent';
import CosmeticsComponent from '../toptab/CosmeticsComponent';
import MallComponent from '../toptab/MallComponent';
import MenClothesComponent from '../toptab/MenClothesComponent';
import WomenClothesComponent from '../toptab/WomenClothesComponent';
import TextComponent from './TextComponent';

const TopTab = createMaterialTopTabNavigator();

function CategoriesShopScreenComponent(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleOnPressOnProductEvent = (item: number) => {
    navigation.dispatch(
      CommonActions.navigate(STACK_NAVIGATION_SERVICE, {
        screen: DETAIL_SCREEN,
        params: undefined,
      })
    );
  };
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.BLACK,
        },
        tabBarStyle: {
          backgroundColor: Colors.GREY_2,
          elevation: 0,
          borderColor: Colors.GREY,
          borderBottomWidth: 0.2,
          marginBottom: 5,
        },
        tabBarItemStyle: {
          width: 'auto',
          marginHorizontal: 2,
        },
        tabBarLabelStyle: {
          textTransform: 'capitalize',
        },
        // tabBarIndicator: () => null,
      }}>
      <TopTab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <TextComponent fontSize={18} text={'Tất cả'} color={focused ? Colors.BLACK : Colors.GREY} fontWeight={focused ? 'bold' : '600'} />
          )
        }}
        name={'Tất cả'}>
        {() => (
          <AllProductComponent
            type={1}
            data={NewOfferData}
            onPressOnProduct={handleOnPressOnProductEvent}
          />
        )}
      </TopTab.Screen>
      <TopTab.Screen name={'Deal Bán Chạy'}
        options={{
          tabBarLabel: ({ focused }) => (
            <TextComponent fontSize={18} text={'Deal Bán Chạy'} fontWeight='bold' fontFamily={'Font_3'} color={Colors.BLUE_PALE} />
          )
        }}

      >
        {() => (
          <BestSellingDealComponent
            onPressOnProduct={handleOnPressOnProductEvent}
          />
        )}
      </TopTab.Screen>
      <TopTab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <View style={{
              backgroundColor: Colors.BLACK,
              paddingHorizontal: 5,
              borderRadius: 5
            }}
            >
              <TextComponent fontSize={18} text='Mall' color={Colors.WHITE} fontWeight='bold' />
            </View>
          )
        }}
        name={'Mall'}>
        {() => <MallComponent onPressOnProduct={handleOnPressOnProductEvent} />}
      </TopTab.Screen>
      <TopTab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <TextComponent fontSize={18} text={'Quần áo nữ'} color={focused ? Colors.BLACK : Colors.GREY} fontWeight={focused ? 'bold' : '600'} />
          )
        }}
        name={'Quần áo nữ'}>
        {() => (
          <WomenClothesComponent
            onPressOnProduct={handleOnPressOnProductEvent}
          />
        )}
      </TopTab.Screen>
      <TopTab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <TextComponent fontSize={18} text={'Mỹ phẩm'} color={focused ? Colors.BLACK : Colors.GREY} fontWeight={focused ? 'bold' : '600'} />
          )
        }}
        name={'Mỹ phẩm'}>
        {() => (
          <CosmeticsComponent onPressOnProduct={handleOnPressOnProductEvent} />
        )}
      </TopTab.Screen>
      <TopTab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <TextComponent fontSize={18} text={'Quần áo nam'} color={focused ? Colors.BLACK : Colors.GREY} fontWeight={focused ? 'bold' : '600'} />
          )
        }}
        name={'Quần áo nam'}>
        {() => (
          <MenClothesComponent onPressOnProduct={handleOnPressOnProductEvent} />
        )}
      </TopTab.Screen>
    </TopTab.Navigator>
  );
}

export default CategoriesShopScreenComponent;
