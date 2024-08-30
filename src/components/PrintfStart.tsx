import React from 'react';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../constants/Colors';
import RowComponent from './ingredient/RowComponent';

interface Props {
  rateQty: number;
}

const PrintfStart = (props: Props) => {
  const {rateQty} = props;
  return (
    <RowComponent alignItems="center" justify="flex-start">
      {Array.from({length: 5}, (_, index) => (
        <IconEntypo
          key={index}
          name="star"
          size={15}
          color={index + 1 <= rateQty ? Colors.YELLOW : Colors.GREY_PALE}
        />
      ))}
    </RowComponent>
  );
};

export default PrintfStart;
