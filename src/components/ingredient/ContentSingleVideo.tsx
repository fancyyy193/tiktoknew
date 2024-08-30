import ReadMore from '@fawazahmed/react-native-read-more';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import {Colors} from '../../constants/Colors';

interface Props {
  content: string;
  color?: string;
  numberOfLines?: number;
  padding?: number;
}
const ContentSingleVideo = (props: Props) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={[styles.root, {paddingVertical: props.padding ?? 5}]}>
        <ReadMore
          seeMoreStyle={[
            styles.seeMoreAndLessStyle,
            {color: props.color ?? Colors.WHITE},
          ]}
          seeLessStyle={[
            styles.seeMoreAndLessStyle,
            {color: props.color ?? Colors.WHITE},
          ]}
          numberOfLines={props.numberOfLines ?? 1}
          style={[styles.textStyle, {color: props.color ?? Colors.WHITE}]}>
          {props.content}
        </ReadMore>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  root: {
    flex: 1,
  },
  textStyle: {
    fontSize: 14,
  },
  seeMoreAndLessStyle: {
    fontWeight: 'bold',
  },
});

export default ContentSingleVideo;
