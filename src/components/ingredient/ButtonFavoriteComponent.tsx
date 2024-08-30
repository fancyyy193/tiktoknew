import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import ButtonComponent from './ButtonComponent';
import TextComponent from './TextComponent';
import {Colors} from '../../constants/Colors';

interface Props {
  id: number;
  uid: number;
  isFavorite: boolean;
  favoriteQty: number;
}
const ButtonFavoriteComponent = (props: Props) => {
  const {favoriteQty, id, isFavorite, uid} = props;
  const [_isFavorite, _setFavorite] = useState(isFavorite);
  const [_favoriteQty, _setFavoriteQty] = useState(favoriteQty);

  const handleFavoriteEvent = () => {
    console.log('1/ call api favorite 2/ success');
    if (_isFavorite) {
      _setFavorite(false);
      _setFavoriteQty(_favoriteQty - 1);
    } else {
      _setFavorite(true);
      _setFavoriteQty(_favoriteQty + 1);
    }
  };

  return (
    <View style={styles.wrapperIconRightColum}>
      <ButtonComponent
        previousIcon={
          <IconFontisto
            name="favorite"
            size={30}
            color={_isFavorite ? 'yellow' : Colors.WHITE}
          />
        }
        onPress={() => handleFavoriteEvent()}
      />
      <TextComponent text={`${_favoriteQty}`} fontSize={13} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperIconRightColum: {
    alignItems: 'center',
  },
});

export default ButtonFavoriteComponent;
