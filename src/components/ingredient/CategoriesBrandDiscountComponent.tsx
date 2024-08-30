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
import TextComponent from './TextComponent';
import BestChoiceComponent from './BestChoiceComponent';
import FMCGComponent from './FMCGComponent';
import ElectronicDeviceComponent from './ElectronicDeviceComponent';

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
                tabBarScrollEnabled: true,
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
                        <TextComponent text={'Lưạ chọn hàng đầu'} color={focused ? Colors.BLACK : Colors.GREY} />
                    ),
                }}
                name={'Tất cả'}>
                {() => <BestChoiceComponent />}
            </TopTab.Screen>
            <TopTab.Screen
                name={'Deal Bán Chạy'}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <TextComponent text={'FMCG'} color={focused ? Colors.BLACK : Colors.GREY} />
                    ),
                }}>
                {() => <FMCGComponent />}
            </TopTab.Screen>
            <TopTab.Screen
                options={{
                    tabBarLabel: ({ focused }) => (
                        <TextComponent text={'Thiết bị điện tử'} color={focused ? Colors.BLACK : Colors.GREY} />
                    ),
                }}
                name={'Mall'}>
                {() => <ElectronicDeviceComponent />}
            </TopTab.Screen>
        </TopTab.Navigator>
    );
}

export default CategoriesUserProfileScreenComponent;
