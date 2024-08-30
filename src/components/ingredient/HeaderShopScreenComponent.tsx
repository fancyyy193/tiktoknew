import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../constants/Colors';
import ButtonComponent from './ButtonComponent';
import RowComponent from './RowComponent';
import SpaceComponent from './SpaceComponent';
import TextComponent from './TextComponent';
import SessionComponent from './SessionComponent';

const HeaderShopScreenComponent = () => {
  return (
    <SessionComponent padding={10}>
      <RowComponent justify={'space-between'} alignItems="center">
        <TouchableOpacity onPress={() => {}} style={styles.wrapperButton}>
          <IconAntDesign
            size={25}
            color={Colors.BLACK}
            name="search1"
            style={{paddingHorizontal: 5}}
          />
          <TextComponent text="Gậy chụp ảnh" color={Colors.GREY} />
          <View style={styles.wrapper} />
          <ButtonComponent
            padding={4}
            borderRadius={5}
            backgroundColor={Colors.PINK}
            titleChildren={
              <TextComponent
                text="Tìm kiếm"
                fontWeight="bold"
                fontSize={17}
                color={Colors.WHITE}
              />
            }
            onPress={() => {}}
          />
          <SpaceComponent width={5} />
        </TouchableOpacity>
        <SpaceComponent width={20} />
        <View>
          <ButtonComponent
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
          <View style={styles.notifications}>
            <TextComponent text={'2'} />
          </View>
        </View>
        <SpaceComponent width={20} />
        <ButtonComponent
          previousIcon={
            <IconFeather name="menu" size={25} color={Colors.BLACK} />
          }
          onPress={() => {
            console.log('menu');
          }}
        />
      </RowComponent>
    </SessionComponent>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  wrapperButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.PINK,
    height: 42,
  },
  notifications: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: Colors.PINK,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    right: -15,
    top: -10,
  },
});

export default HeaderShopScreenComponent;
