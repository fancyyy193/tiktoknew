import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../constants/Colors';

interface Props {
  children: ReactNode;
  color?: string;
  isCenter: boolean;
  notFullHeightScreen?: boolean;
  notFullWidthScreen?: boolean;
  marginRight?: number;
  marginLeft?: number;
}

const Container = (props: Props) => {
  const {
    marginLeft,
    children,
    color,
    isCenter,
    notFullHeightScreen,
    notFullWidthScreen,
    marginRight,
  } = props;
  return (
    <View
      style={[
        isCenter ? styles.iconContainerCenter : styles.iconContainer,
        {
          backgroundColor: color ?? Colors.BLACK,
          width: notFullWidthScreen ? 'auto' : '100%',
          height: notFullHeightScreen ? 'auto' : '100%',
          marginRight,
          marginLeft,
        },
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: '100%',
    height: '100%',
  },
});

export default Container;
