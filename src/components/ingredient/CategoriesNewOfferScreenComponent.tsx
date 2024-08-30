import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { DETAIL_SCREEN, STACK_NAVIGATION_SERVICE } from '../../constants/Screens';
import { NewOfferData } from '../../data/NewOfferData';
import { RootStackParamList } from '../../router/Router';
import AllProductComponent from '../toptab/AllProductComponent';
import BestSellingDealComponent from '../toptab/BestSellingDealComponent';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';

const TopTab = createMaterialTopTabNavigator();

function CategoriesNewOfferScreenComponent(): JSX.Element {
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
        tabBarIndicatorStyle: {
          backgroundColor: Colors.BLACK,
        },
        tabBarStyle: {
          backgroundColor: Colors.WHITE,
          elevation: 0,
          borderColor: Colors.GREY,
          borderBottomWidth: 0.2,
          marginBottom: 5,
        },
        tabBarLabelStyle: {
          textTransform: 'capitalize',
        },
      }}>
      <TopTab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <TextComponent
              text="Ưu đãi độc quyền"
              color={focused ? Colors.BLACK : Colors.GREY}
              fontWeight="bold"
              fontSize={18}
            />
          ),
        }}
        name={'Ưu đãi độc quyền'}>
        {() => (
          <AllProductComponent
            type={2}
            data={NewOfferData}
            onPressOnProduct={handleOnPressOnProductEvent}
          />
        )}
      </TopTab.Screen>

      <TopTab.Screen
        options={{
          tabBarLabel: ({ icon, size, focused }: any) => (
            <RowComponent justify="space-between" alignItems="center">
              <View style={{ transform: [{ rotate: '45deg' }] }}>
                <IconIonicons name="ticket" color={'orangered'} size={30} />
              </View>
              <TextComponent
                text="Giảm 50%+"
                color={focused ? Colors.BLACK : Colors.GREY}
                fontWeight="bold"
                fontSize={18}
              />
            </RowComponent>
          ),
        }}
        name={'Giảm 50%'}>
        {() => (
          <BestSellingDealComponent
            onPressOnProduct={handleOnPressOnProductEvent}
          />
        )}
      </TopTab.Screen>
    </TopTab.Navigator>
  );
}

export default CategoriesNewOfferScreenComponent;
