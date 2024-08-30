import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../constants/Colors';
import ButtonComponent from './ButtonComponent';
import RowComponent from './RowComponent';
import SpaceComponent from './SpaceComponent';
import TextComponent from './TextComponent';

interface Props {
  id: number;
  uid: number;
  row?: boolean;
  isLiked: boolean;
  likeQty: number;
  fontSize?: number;
  color?: string;
  space?: number;
}

// Hàm định dạng số lượng để hiển thị dưới dạng ngắn gọn
const formatNumber = (number: number) => {
  if (number >= 1_000_000) {
    return `${(number / 1_000_000).toFixed(1)}M`;
  } else if (number >= 1_000) {
    return `${(number / 1_000).toFixed(1)}K`;
  } else {
    return number.toString();
  }
};

const ButtonLikeComponent = (props: Props) => {
  const {isLiked, likeQty, fontSize, row, color, space} = props;
  const [_liked, _setLiked] = useState(isLiked);
  const [_likeQty, _setLikeQty] = useState(likeQty);

  const handleLikeEvent = () => {
    console.log('1/ call api like 2/ success');
    if (_liked) {
      _setLiked(false);
      _setLikeQty(_likeQty - 1);
    } else {
      _setLiked(true);
      _setLikeQty(_likeQty + 1);
    }
  };

  const formattedLikeQty = formatNumber(_likeQty);

  return (
    <>
      {row ? (
        <View style={styles.wrapperIconRightColum}>
          <ButtonComponent
            previousImage={
              <IconAntDesign
                name="heart"
                size={fontSize ?? 32}
                color={_liked ? Colors.PINK : Colors.WHITE}
              />
            }
            onPress={() => handleLikeEvent()}
          />
          <TextComponent text={formattedLikeQty} fontSize={13} />
        </View>
      ) : (
        <RowComponent>
          <ButtonComponent
            previousImage={
              <IconAntDesign
                name={_liked ? "heart" : "hearto"}
                size={fontSize ?? 32}
                color={_liked ? Colors.PINK : Colors.BLACK}
              />
            }
            onPress={() => handleLikeEvent()}
          />
          <SpaceComponent width={space} />
          <TextComponent text={formattedLikeQty} fontSize={13} color={color} />
        </RowComponent>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  wrapperIconRightColum: {
    alignItems: 'center',
  },
});

export default ButtonLikeComponent;
