import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../constants/Colors';
import {StyleSheet} from 'react-native';
import {GlobalStyle} from '../../styles/GlobalStyle';

interface Props {
  scrollViewRef: React.RefObject<ScrollView>;
  height?: number;
}
const ButtonBackToTop = (props: Props) => {
  console.log('===================ButtonBackToTop=================');
  const {scrollViewRef, height} = props;
  const bottomTabHeight = () => {
    try {
      return useBottomTabBarHeight();
    } catch (error) {
      return 0;
    }
  };

  return (
    <TouchableOpacity
      onPress={() => scrollViewRef?.current?.scrollTo({y: 0, animated: true})}
      style={[
        styles.container,
        GlobalStyle.shadow,
        {bottom: height ? height : bottomTabHeight() + 10, elevation: 10},
      ]}>
      <IconEntypo name="align-top" size={30} color={Colors.BLACK} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ButtonBackToTop;
