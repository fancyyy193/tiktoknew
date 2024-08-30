import { View, Text } from 'react-native'
import React from 'react'
import RowComponent from './RowComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../constants/Colors';
import TextComponent from './TextComponent';
import SpaceComponent from './SpaceComponent';
import { getFormatVietNamCurrency } from '../../utils/FormatCurrency';
import { getFormatQuantity } from '../../utils/FormatQuantity';

interface Props {
  starQty: number;
  soldQty: number;
}

const SoldAndStarComponent = (props: Props) => {
  const { soldQty, starQty } = props;
  return (
    <RowComponent justify='flex-start' alignItems='center'>
      <AntDesign name='star' size={15} color={Colors.YELLOW} />
      <TextComponent text={starQty + ''} color={Colors.GREY} />
      <SpaceComponent width={5} />
      <SpaceComponent height={13} width={1} backgroundColor={Colors.GREY} />
      <SpaceComponent width={5} />
      <TextComponent text={getFormatQuantity(soldQty) + ' ' + 'đã bán'} color={Colors.GREY} />
    </RowComponent>
  )
}

export default SoldAndStarComponent