import {View, Text} from 'react-native';
import React from 'react';

interface Props {
  onPressOnProduct: (idProduct: number) => void;
}
const WomenClothesComponent = (props: Props) => {
  const {onPressOnProduct} = props;
  return (
    <View>
      <Text>WomenClothesComponent</Text>
    </View>
  );
};

export default WomenClothesComponent;
