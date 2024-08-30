import {
  View,
  Text,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {ReactNode} from 'react';
import {GlobalStyle} from '../../styles/GlobalStyle';
import {Colors} from '../../constants/Colors';

interface Props {
  justify:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  children?: ReactNode;
  onPress?: () => void;
  alignItems?: string;
  marginVertical?: number;
  marginLeft?: number;
  isWrap?: boolean;
}

const RowComponent = (props: Props) => {
  const {
    children,
    justify,
    onPress,
    alignItems,
    marginVertical,
    marginLeft,
    isWrap,
  } = props;

  const localStyle = [
    GlobalStyle.row,
    {
      justifyContent: justify ?? 'center',
      alignItems,
      marginVertical,
      marginLeft,
    },
  ];

  return (
    <>
      {onPress ? (
        <TouchableOpacity
          onPress={onPress}
          style={localStyle as StyleProp<ViewStyle>}>
          {children}
        </TouchableOpacity>
      ) : (
        <View
          style={[localStyle as StyleProp<ViewStyle>, isWrap && styles.wrap]}>
          {children}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexWrap: 'wrap',
  },
});
export default RowComponent;
