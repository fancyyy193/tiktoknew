import React, {ReactNode} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/Colors';

interface Props {
  name: string;
  image?: string;
  size?: number;
  icon?: ReactNode;
  color?: string;
}

const DefaultAvatar = (props: Props) => {
  const {name, image, size, icon, color} = props;

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  return (
    <>
      {image ? (
        <Image
          source={{uri: image}}
          style={[
            styles.wrapperAvatar,
            {
              width: size ?? 40,
              height: size ?? 40,
            },
          ]}
        />
      ) : (
        <View
          style={[
            styles.wrapperDefaultAvatar,
            {
              width: size ?? 40,
              height: size ?? 40,
              backgroundColor: color ?? generateColor(),
            },
          ]}>
          {icon ?? <Text style={styles.wrapperName}>{name}</Text>}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  wrapperAvatar: {
    borderRadius: 100,
    flex: 0,
  },
  wrapperDefaultAvatar: {
    borderRadius: 100,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: Colors.WHITE,
  },
  wrapperName: {
    color: '#fff',
    textTransform: 'uppercase',
  },
});
export default DefaultAvatar;
