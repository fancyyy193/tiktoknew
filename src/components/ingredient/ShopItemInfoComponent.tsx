import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import {Colors} from '../../constants/Colors';
import {getFormatQuantity} from '../../utils/FormatQuantity';

interface Props {
  qty: number;
  title: string;
}

const ShopItemInfoComponent = (props: Props) => {
  const {qty, title} = props;
  return (
    <View style={styles.wrapper}>
      <TextComponent
        text={getFormatQuantity(qty) + ''}
        color={Colors.BLACK}
        fontWeight="bold"
      />
      <TextComponent text={title} color={Colors.GREY} fontSize={12} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingRight: 10,
    paddingLeft: 5,
    borderRightWidth: 0.3,
    borderColor: Colors.GREY,
  },
});

export default ShopItemInfoComponent;
