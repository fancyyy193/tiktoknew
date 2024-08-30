import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Colors } from '../../constants/Colors';
import { DETAIL_SCREEN, STACK_NAVIGATION_SERVICE } from '../../constants/Screens';
import { NewOfferData } from '../../data/NewOfferData';
import { RootStackParamList } from '../../router/Router';
import AllProductComponent from '../toptab/AllProductComponent';
import BestSellingDealComponent from '../toptab/BestSellingDealComponent';
import MallComponent from '../toptab/MallComponent';
import WomenClothesComponent from '../toptab/WomenClothesComponent';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import RowComponent from './RowComponent';
import { View } from 'react-native';
import PrintfVideoLikedComponent from './PrintfVideoLikedComponent';

const TopTab = createMaterialTopTabNavigator();

function CategoriesUserProfileScreenComponent(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleOnPressOnProductEvent = (item: number) => {
    navigation.dispatch(
      CommonActions.navigate(STACK_NAVIGATION_SERVICE, {
        screen: DETAIL_SCREEN,
        params: undefined,
      })
    )
  };
  
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: Colors.BLACK,
        },
        tabBarStyle: {
          backgroundColor: Colors.WHITE,
          elevation: 0,
          borderColor: Colors.GREY,
          borderBottomWidth: 0.2,
        },
        tabBarItemStyle: {
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
            <RowComponent justify="center" alignItems="center">
              <Feather
                name="menu"
                color={focused ? Colors.BLACK : Colors.GREY}
                size={25}
                style={{
                  transform: [{ rotate: '90deg' }],
                }}
              />
              <AntDesign
                name="caretdown"
                size={10}
                color={focused ? Colors.BLACK : Colors.GREY}
              />
            </RowComponent>
          ),
        }}
        name={'Tất cả'}>
        {() => <View></View>}
      </TopTab.Screen>
      <TopTab.Screen
        name={'Deal Bán Chạy'}
        options={{
          tabBarLabel: ({ focused }) => (
            <EvilIcons
              name="lock"
              size={40}
              color={focused ? Colors.BLACK : Colors.GREY}
            />
          ),
        }}>
        {() => <View></View>}
      </TopTab.Screen>
      <TopTab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <Fontisto
              name="favorite"
              size={24}
              color={focused ? Colors.BLACK : Colors.GREY}
            />
          ),
        }}
        name={'Mall'}>
        {() => <View></View>}
      </TopTab.Screen>
      <TopTab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <AntDesign
              name="hearto"
              size={25}
              color={focused ? Colors.BLACK : Colors.GREY}
            />
          ),
        }}
        name={'Quần áo nữ'}>
        {() => <PrintfVideoLikedComponent />}
      </TopTab.Screen>
    </TopTab.Navigator>
  );
}

export default CategoriesUserProfileScreenComponent;
