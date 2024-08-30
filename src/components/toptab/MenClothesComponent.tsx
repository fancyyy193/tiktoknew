import {View, Text} from 'react-native';
import React from 'react';

interface Props {
  onPressOnProduct: (idProduct: number) => void;
}
const MenClothesComponent = (props: Props) => {
  const {onPressOnProduct} = props;
  return (
    <View>
      <Text>MenClothesComponent</Text>
    </View>
  );
};

export default MenClothesComponent;
