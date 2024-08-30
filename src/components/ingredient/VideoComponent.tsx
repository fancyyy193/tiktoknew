import React, {memo, useCallback, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Video from 'react-native-video';
import {Colors} from '../../constants/Colors';
import {SCREEN_WIDTH, WINDOW_WIDTH} from '../../constants/Variables';
import {useAppDispatch} from '../../redux/Hooks';
import {getHeightOfWrapperVideo} from '../../utils/HeightOfVideo';
import BottomSingleVideoDiscComponent from './BottomSingleVideoDiscComponent';
import ButtonComponent from './ButtonComponent';
import {Slider} from '@miblanchard/react-native-slider';

interface Props {
  item: any;
  index: number;
  currentIndex: number;
}

const VideoComponent = (props: Props) => {
  const dispatch = useAppDispatch();
  const {index, item, currentIndex} = props;
  const [mute, setMute] = useState(false);
  const videoRef = useRef<Video>(null);
  const [resizeMode, setResizeMode] = useState<
    'cover' | 'contain' | 'stretch' | 'none'
  >('cover');
  const [pause, setPause] = useState(false);
  const heightOfWrapperVideo = getHeightOfWrapperVideo();
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFocusThumbLineTrack, setIsFocusThumbLineTrack] = useState(false);

  const onBuffer = (event: any) => {
    console.log('buffering', event);
  };

  const onError = (event: any) => {
    console.log('error', event);
  };

  const handleStopVideoEvent = () => {
    if (index === currentIndex) {
      setPause(!pause);
    }
  };

  const handleOnUploadVideo = useCallback((data: any) => {
    setDuration(data.duration);
    const {naturalSize} = data;
    if (naturalSize) {
      const {width, height} = naturalSize;
      const videoAspectRatio = width / height;
      const screenAspectRatio = SCREEN_WIDTH / heightOfWrapperVideo;
      if (Math.floor(screenAspectRatio) >= Math.floor(videoAspectRatio)) {
        setResizeMode('cover');
      } else {
        setResizeMode('contain');
      }
    }
  }, []);

  const handleProgress = (data: any) => {
    const currentValue = data.currentTime;
    !isFocusThumbLineTrack && setCurrentTime(currentValue);
  };

  const handleSlidingStart = () => {
    setIsFocusThumbLineTrack(true);
  };

  const handleSlidingComplete = () => {
    setIsFocusThumbLineTrack(false);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => handleStopVideoEvent()}
        style={styles.wrapperVideo}>
        <Video
          onProgress={handleProgress}
          onLoad={handleOnUploadVideo}
          ref={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode={resizeMode}
          paused={currentIndex !== index || pause}
          source={{ uri: item.video }} // Sử dụng URL video từ props
          muted={mute}
          style={styles.video}
          playInBackground={false}
        />
      </TouchableOpacity>
      {/* Icon pause */}
      {pause && (
        <ButtonComponent
          onPress={() => handleStopVideoEvent()}
          previousIcon={
            <IconEntypo
              style={[
                styles.buttonPause,
                {top: (heightOfWrapperVideo - 100) / 2},
              ]}
              name="controller-play"
              size={100}
              color={Colors.WHITE}
            />
          }
        />
      )}

      <View
        style={[
          styles.wrapperProgressBar,
          {bottom: isFocusThumbLineTrack ? -13.5 : -17.5},
        ]}>
        <View
          style={{
            marginHorizontal: 16,
            marginTop: 5,
          }}>
          <Slider
            animateTransitions={true}
            maximumValue={duration}
            value={currentTime}
            onValueChange={data => {
              videoRef.current?.seek(Math.ceil(data[0]));
              pause && setCurrentTime(Math.ceil(data[0]));
            }}
            thumbStyle={{
              width: isFocusThumbLineTrack ? 13 : 4,
              height: isFocusThumbLineTrack ? 13 : 4,
              backgroundColor: Colors.GREY_2,
            }}
            maximumTrackStyle={{
              backgroundColor: Colors.GREY,
            }}
            minimumTrackStyle={{
              backgroundColor: Colors.GREY_2,
            }}
            containerStyle={{
              width: '100%',
            }}
            thumbTouchSize={{width: 1, height: 1}}
            trackClickable={true}
            trackStyle={{
              height: isFocusThumbLineTrack ? 10 : 2,
              borderRadius: 100,
            }}
            onSlidingStart={handleSlidingStart}
            onSlidingComplete={handleSlidingComplete}
          />
        </View>
      </View>
      {/* Disc */}
      <View style={styles.wrapperDisc}>
        <BottomSingleVideoDiscComponent
          isPause={pause}
          isActive={index === currentIndex}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapperIconPause: {
    position: 'absolute',
  },
  wrapperVideo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
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
  buttonPause: {
    position: 'absolute',
    left: (SCREEN_WIDTH - 100) / 2,
  },
  wrapperDisc: {
    position: 'absolute',
    bottom: 15,
    zIndex: 999,
    right: 0,
    margin: 16,
  },
  wrapperProgressBar: {
    position: 'absolute',
    backgroundColor: 'rgb(22 22 22)',
    left: 0,
    right: 0,
  },
});

export default memo(VideoComponent);
