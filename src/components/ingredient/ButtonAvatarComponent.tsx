import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import DefaultAvatar from '../common/DefaultAvatar';
import ButtonComponent from './ButtonComponent';
import {Colors} from '../../constants/Colors';

interface Props {
  uid: number;
  avatar: string;
  isFollowing: boolean;
  size?: number;
  sizeIcon?: number;
  addButton?: boolean;
  name: string;
  iconAddRight?: boolean;
}

const ButtonAvatarComponent = (props: Props) => {
  const {
    avatar,
    uid,
    isFollowing,
    size,
    addButton,
    name,
    iconAddRight,
    sizeIcon,
  } = props;
  const [isFollow, setIsFollow] = useState(isFollowing);

  const handleFollowEvent = () => {
    console.log('call api follow success');
    setIsFollow(!isFollow);
  };

  return (
    <ButtonComponent
      previousImage={
        <View>
          {avatar ? (
            <Image
              style={[
                styles.imageWrapper,
                {
                  width: size ?? 45,
                  height: size ?? 45,
                },
              ]}
              source={{uri: avatar}}
            />
          ) : (
            <DefaultAvatar size={45} name={name[0]} />
          )}
          {addButton && (
            <TouchableOpacity
              style={[
                styles.button,
                {
                  width: sizeIcon ?? 25,
                  height: sizeIcon ?? 25,
                  bottom: iconAddRight ? -1 : -5,
                  left: iconAddRight
                    ? sizeIcon! * 2
                    : (45 - (sizeIcon ?? 25)) / 2,
                },
              ]}
              onPress={() => handleFollowEvent()}>
              <Image
                style={styles.image}
                source={require('../../assets/images/plus-button.png')}
              />
              {iconAddRight && <View style={styles.borderCircle} />}
            </TouchableOpacity>
          )}
        </View>
      }
      onPress={() => console.log('profile')}
    />
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    borderRadius: 100,
  },
  button: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderCircle: {
    zIndex: -1,
    width: 35,
    height: 35,
    borderRadius: 35,
    backgroundColor: Colors.WHITE,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
export default ButtonAvatarComponent;
