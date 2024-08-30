import React from 'react';
import {StyleSheet, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../constants/Colors';
import ButtonComponent from './ingredient/ButtonComponent';
import RowComponent from './ingredient/RowComponent';
import SessionComponent from './ingredient/SessionComponent';
import TextComponent from './ingredient/TextComponent';

const BottomComponentDetailScreen = () => {
  return (
    <View style={styles.wrapper}>
      <SessionComponent>
        <RowComponent justify="space-between" alignItems="center">
          <ButtonComponent
            isVertical={true}
            titleChildren={
              <TextComponent text="Cửa hàng" color={Colors.BLACK} />
            }
            onPress={() => {
              console.log();
            }}
            previousIcon={
              <IconEntypo name="shop" color={Colors.BLACK} size={20} />
            }
          />
          <ButtonComponent
            isVertical={true}
            titleChildren={
              <TextComponent text="Cửa hàng" color={Colors.BLACK} />
            }
            onPress={() => {
              console.log();
            }}
            previousIcon={
              <IconAntDesign name="message1" color={Colors.BLACK} size={20} />
            }
          />
          <ButtonComponent
            paddingVertical={3}
            paddingHorizontal={15}
            borderWidth={2}
            isVertical={true}
            borderRadius={10}
            borderColor={Colors.PINK}
            titleChildren={
              <TextComponent
                fontWeight="bold"
                width={80}
                text="Thêm vào giỏ hàng"
                color={Colors.PINK}
                fontSize={18}
              />
            }
            onPress={() => {
              console.log();
            }}
          />
          <ButtonComponent
            paddingVertical={15}
            paddingHorizontal={15}
            backgroundColor={Colors.PINK}
            isVertical={true}
            borderRadius={10}
            titleChildren={
              <TextComponent
                fontWeight="bold"
                fontSize={18}
                text="Mua ngay"
                color={Colors.WHITE}
              />
            }
            onPress={() => {
              console.log();
            }}
          />
        </RowComponent>
      </SessionComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.WHITE,
    width: '100%',
  },
});
export default BottomComponentDetailScreen;
