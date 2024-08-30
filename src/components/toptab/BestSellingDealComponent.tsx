import {View, Text} from 'react-native';
import React from 'react';

interface Props {
  onPressOnProduct: (idProduct: number) => void;
}
const BestSellingDealComponent = (props: Props) => {
  const {onPressOnProduct} = props;
  return (
    <View>
      <Text>BestSellingDealComponent</Text>
    </View>
  );
};

export default BestSellingDealComponent;
