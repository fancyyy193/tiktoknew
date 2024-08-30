import React, {memo, useRef} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import Video from 'react-native-video';
import {Colors} from '../../constants/Colors';
import {SCREEN_WIDTH} from '../../constants/Variables';

interface Props {
  item: any;
  onPress: (id: number) => void;
}

const VideoHadLikeItem = (props: Props) => {
  console.log('===============VideoHadLikeItem=====================');
  const {item, onPress} = props;
  const videoRef = useRef<Video>(null);

  const onLoad = () => {
    videoRef?.current?.seek(1);
  };

  return (
    <TouchableWithoutFeedback onPress={() => onPress(item.id)}>
      <View
        key={item.id}
        style={[styles.wrapperVideo, {width: SCREEN_WIDTH / 3 - 1}]}>
        <Video
          onLoad={onLoad}
          ref={videoRef}
          resizeMode={'cover'}
          muted={true}
          paused={true}
          source={{ uri: item.video }} // Sử dụng URL video từ props
          style={styles.video}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%',
  },
  wrapperVideo: {
    height: 200,
    backgroundColor: Colors.BLACK,
    marginBottom: 1,
  },
});
export default memo(VideoHadLikeItem);
