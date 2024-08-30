import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../constants/Colors';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import SpaceComponent from './SpaceComponent';

interface Props {
  fontSize?: number;
  color?: string;
  rateQty?: ReactNode;
  iconSize?: number;
}

const RateQtyProductComponent = (props: Props) => {
  const {color, fontSize, rateQty, iconSize} = props;
  return (
    <RowComponent justify={'flex-start'} alignItems="center">
      <IconEntypo name="star" size={iconSize ?? 15} color={Colors.YELLOW} />
      <TextComponent
        text={'4.8'}
        color={color ?? Colors.GREY}
        fontSize={fontSize ?? 12}
      />
      <SpaceComponent width={2} />
      {rateQty}
      <SpaceComponent width={5} />
      <View style={styles.line} />
      <SpaceComponent width={5} />
      <TextComponent
        text={'Đã bán'}
        color={Colors.GREY}
        fontSize={fontSize ?? 12}
      />
      <SpaceComponent width={2} />
      <TextComponent
        text={'123'}
        color={color ?? Colors.GREY}
        fontSize={fontSize ?? 12}
      />
    </RowComponent>
  );
};

const styles = StyleSheet.create({
  line: {
    marginHorizontal: 3,
    width: 1,
    height: '70%',
    backgroundColor: Colors.GREY,
  },
});
export default RateQtyProductComponent;
