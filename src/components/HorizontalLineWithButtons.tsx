import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Animated} from 'react-native';

const HorizontalLineWithButtons = () => {
  const [indicatorPosition, setIndicatorPosition] = useState(
    new Animated.Value(0),
  );

  const handleButtonPress = (position: number) => {
    Animated.spring(indicatorPosition, {
      toValue: position,
      useNativeDriver: false,
    }).start();
  };

  const animated = indicatorPosition.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['0%', '33%', '66%'],
  });

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          width: '33%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => handleButtonPress(0)}>
        <Text>a</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '33%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => handleButtonPress(1)}>
        <Text>b</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '33%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => handleButtonPress(2)}>
        <Text>c</Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          height: 2,
          width: '33%',
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          left: animated,
        }}
      />
    </View>
  );
};

export default HorizontalLineWithButtons;
