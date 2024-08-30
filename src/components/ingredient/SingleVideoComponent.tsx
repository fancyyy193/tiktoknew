import React, {memo, useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../constants/Colors';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WINDOW_WIDTH,
} from '../../constants/Variables';
import {getHeightOfWrapperVideo} from '../../utils/HeightOfVideo';
import BottomSingleVideoComponent from './BottomSingleVideoComponent';
import RightSingleVideoComponent from './RightSingleVideoComponent';
import VideoComponent from './VideoComponent';

interface Props {
  item: any;
  index: number;
  currentIndex: number;
}

const SingleVideoComponent = (props: Props) => {
  console.log('================SingleVideo====================');
  const {index, item, currentIndex} = props;
  const heightOfWrapperVideo = getHeightOfWrapperVideo();
  const totalQtyComments = useCallback((a: any) => {
    return 1;
  }, []);

  return (
    <View style={[styles.wrapperVideoSession2, {height: heightOfWrapperVideo}]}>
      {/* Video */}
      <VideoComponent item={item} index={index} currentIndex={currentIndex} />
      {/* User and content */}
      <BottomSingleVideoComponent
        uid={item.user.uid}
        name={item.user.name}
        isOfficial={item.user.isOfficial}
        title={item.title}
        tags={item.tags}
        isActive={currentIndex === index}
      />
      {/* Options */}
      <RightSingleVideoComponent
        uid={item.user.uid}
        avatar={item.user.avatar}
        heartQty={item.likeQty}
        commentsQty={totalQtyComments(item.comments)}
        favoriteQty={item.favoriteQty}
        shareQty={item.shareQty}
        onClickButtonEvent={() => {
          console.log('right option click');
        }}
        isFavorite={item.isFavorite}
        isLiked={item.isLiked}
        userName={item.user.name}
        comments={item.comments}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperIconPause: {
    position: 'absolute',
    left: SCREEN_WIDTH / 2 - 50,
    top: SCREEN_HEIGHT / 2 - 100,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  wrapperVideoSession1: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  wrapperVideoSession2: {
    width: WINDOW_WIDTH,
    position: 'relative',
    backgroundColor: Colors.BLACK,
  },
});
export default memo(SingleVideoComponent);
