import {View, Text} from 'react-native';
import React from 'react';
import SessionComponent from './SessionComponent';
import {Colors} from '../../constants/Colors';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import ButtonComponent from './ButtonComponent';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  id: number;
  content: string;
  onPress: (id: number) => void;
  fontSize?: number;
  color?: string;
  padding?: number;
}

const VoucherItemComponent = (props: Props) => {
  const {content, onPress, id, fontSize, color, padding} = props;
  return (
    <SessionComponent backgroundColor={Colors.WHITE} padding={padding}>
      <RowComponent justify="space-between" alignItems="center">
        <TextComponent
          fontWeight="bold"
          text={content}
          fontSize={fontSize ?? 18}
          color={color ?? Colors.BLACK}
        />
        <ButtonComponent
          beHindIcon={
            <IconAntDesign name="right" size={15} color={Colors.GREY} />
          }
          onPress={() => onPress(id)}
        />
      </RowComponent>
    </SessionComponent>
  );
};

export default VoucherItemComponent;
