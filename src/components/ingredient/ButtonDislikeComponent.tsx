import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../constants/Colors';

const ButtonDislikeComponent = (props: {isDisliked: boolean}) => {
  const [isDisliked, setIsDisLiked] = useState(props.isDisliked);
  return (
    <TouchableOpacity onPress={() => setIsDisLiked(!isDisliked)}>
      {isDisliked ? (
        <IconAntDesign size={20} name="dislike1" color={Colors.BLACK} />
      ) : (
        <IconAntDesign size={20} name="dislike2" color={Colors.BLACK} />
      )}
    </TouchableOpacity>
  );
};

export default ButtonDislikeComponent;
