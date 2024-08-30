import React, {memo, useCallback, useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import {getMusicNodeAnimation} from '../../utils/MusicNodeAnimation';

interface Props {
  isActive: boolean;
  isPause: boolean;
}

const BottomSingleVideoDiscComponent = (props: Props) => {
  console.log(
    '===================BottomSingleVideoDiscComponent=================',
  );
  const {isActive, isPause} = props;
  // Animation
  const discAnimatedValue = useRef(new Animated.Value(0)).current;
  const musicNodeAnimationValue1 = useRef(new Animated.Value(0)).current;
  const musicNodeAnimationValue2 = useRef(new Animated.Value(0)).current;

  // Disc
  const discAnimation = {
    transform: [
      {
        rotate: discAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  // MusicNode 1
  const musicNodeAnimation1 = getMusicNodeAnimation(
    musicNodeAnimationValue1,
    false,
  );
  // MusicNode 2
  const musicNodeAnimation2 = getMusicNodeAnimation(
    musicNodeAnimationValue2,
    true,
  );

  const discAnimationLoopRef: any = useRef();
  const musicAnimationLoopRef: any = useRef();

  const triggerAnimation = useCallback(() => {
    discAnimationLoopRef.current = Animated.loop(
      Animated.timing(discAnimatedValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    );
    discAnimationLoopRef.current.start();

    musicAnimationLoopRef.current = Animated.loop(
      Animated.sequence([
        Animated.timing(musicNodeAnimationValue2, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(musicNodeAnimationValue1, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
    );
    musicAnimationLoopRef.current.start();
  }, []);

  const stopAnimation = (type: 'p' | 's') => {
    if (type === 'p') {
      discAnimationLoopRef.current?.stop();
      musicAnimationLoopRef.current?.stop();
    } else {
      discAnimationLoopRef.current?.stop();
      musicAnimationLoopRef.current?.stop();
      discAnimatedValue.setValue(0);
      musicNodeAnimationValue1.setValue(0);
      musicNodeAnimationValue2.setValue(0);
    }
  };

  useEffect(() => {
    if (isActive && !isPause) {
      triggerAnimation();
    } else {
      isPause ? stopAnimation('p') : stopAnimation('s');
    }
  }, [isActive, isPause]);

  return (
    <React.Fragment>
      {/* Node music x2 */}
      <Animated.Image
        style={[styles.musicNode, musicNodeAnimation1]}
        source={require('../../assets/images/floating-music-note.png')}
      />
      <Animated.Image
        style={[styles.musicNode, musicNodeAnimation2]}
        source={require('../../assets/images/floating-music-note.png')}
      />
      {/* Disc */}
      <View style={styles.wrapperLeft}>
        <Animated.Image
          style={[styles.image, discAnimation]}
          source={require('../../assets/images/disc.png')}
        />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  musicNode: {
    position: 'absolute',
    width: 20,
    height: 20,
    tintColor: 'white',
    right: 48,
    bottom: 25,
  },
  wrapperLeft: {
    width: '15%',
  },
  image: {
    width: 42,
    height: 42,
    right: 0,
  },
});

export default memo(BottomSingleVideoDiscComponent);
