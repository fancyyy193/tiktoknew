import {View, Text} from 'react-native';
import React from 'react';
import RowComponent from './RowComponent';
import {Colors} from '../../constants/Colors';
import TextComponent from './TextComponent';
import SpaceComponent from './SpaceComponent';

interface Props {
  content: string;
}

const PaymentMethodsComponent = (props: Props) => {
  const {content} = props;
  return (
    <RowComponent justify={'flex-start'} alignItems="center" marginVertical={3}>
      <View
        style={{
          backgroundColor: Colors.GREY_4,
          paddingHorizontal: 15,
          paddingVertical: 9,
          borderRadius: 2,
        }}
      />
      <SpaceComponent width={10} />
      <TextComponent text={content} color={Colors.GREY} />
    </RowComponent>
  );
};

export default PaymentMethodsComponent;
