import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {StatusBar} from 'react-native';
import {WINDOW_HEIGHT} from '../constants/Variables';

export const getHeightOfWrapperVideo = (): number => {
  const bottomTabHeight = useBottomTabBarHeight();
  const tabBarHeight = StatusBar.currentHeight ?? 0;
  return WINDOW_HEIGHT - bottomTabHeight - tabBarHeight;
};
