import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../constants/Colors';
import {RootStackParamList} from '../router/Router';
import ButtonComponent from './ingredient/ButtonComponent';
import RowComponent from './ingredient/RowComponent';
import SessionComponent from './ingredient/SessionComponent';
import SpaceComponent from './ingredient/SpaceComponent';
import TextComponent from './ingredient/TextComponent';

const HeaderDetailScreenComponent = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <SessionComponent paddingHorizontal={10} padding={0}>
        <RowComponent justify={'space-evenly'} alignItems="center">
          <ButtonComponent
            paddingHorizontal={10}
            previousIcon={
              <IconIonicons
                size={30}
                color={Colors.BLACK}
                name="arrow-back-sharp"
              />
            }
            onPress={() => {
              navigation.goBack();
            }}
          />
          <TouchableWithoutFeedback
            onPress={() => {
              console.log('123');
            }}>
            <View style={styles.wrapperCenterInput}>
              <IconAntDesign name="search1" size={25} color={Colors.BLACK} />
              <SpaceComponent width={10} />
              <TextComponent text="Đồ trang trí phòng" color={Colors.GREY} />
            </View>
          </TouchableWithoutFeedback>
          <ButtonComponent
            paddingHorizontal={10}
            previousIcon={
              <IconMaterialCommunityIcons
                size={30}
                color={Colors.BLACK}
                name="share-outline"
              />
            }
            onPress={() => {}}
          />
          <ButtonComponent
            paddingHorizontal={10}
            previousIcon={
              <IconIonicons
                name="cart-outline"
                size={25}
                color={Colors.BLACK}
              />
            }
            onPress={() => {
              console.log('cart');
            }}
          />
          <ButtonComponent
            paddingHorizontal={10}
            previousIcon={
              <IconEntypo
                name="dots-three-horizontal"
                size={20}
                color={Colors.BLACK}
              />
            }
            onPress={() => {
              console.log('cart');
            }}
          />
        </RowComponent>
      </SessionComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    paddingVertical: 10,
  },
  wrapperCenterInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(241 241 241)',
    paddingVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
});
export default HeaderDetailScreenComponent;
