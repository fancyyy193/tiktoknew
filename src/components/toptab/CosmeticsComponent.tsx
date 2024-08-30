import {View, Text} from 'react-native';
import React from 'react';
interface Props {
  onPressOnProduct: (idProduct: number) => void;
}
const CosmeticsComponent = (props: Props) => {
  const {onPressOnProduct} = props;
  return (
    <View>
      <Text>CosmeticsComponent</Text>
    </View>
  );
};

export default CosmeticsComponent;
