import {View, Text} from 'react-native';
import React from 'react';

interface Props {
  onPressOnProduct: (idProduct: number) => void;
}
const MallComponent = (props: Props) => {
  const {onPressOnProduct} = props;
  return (
    <View>
      <Text>MallComponent</Text>
    </View>
  );
};

export default MallComponent;
