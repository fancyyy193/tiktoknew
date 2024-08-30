import LottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';

const VideoLoadingComponent = () => {
  return (
    <View>
      <LottieView
        source={require('../../assets/gifs/loadingTiktok.lottie')}
        autoPlay
        loop
      />
    </View>
  );
};

export default VideoLoadingComponent;
