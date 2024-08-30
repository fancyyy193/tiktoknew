import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ButtonComponent from './ButtonComponent';
import TextComponent from './TextComponent';
import {useAppSelector} from '../../redux/Hooks';

interface Props {
  id: number;
  uid: number;
  shareQty: number;
}

const ButtonShareComponent = (props: Props) => {
  const {id, shareQty, uid} = props;
  const [_shareQty, _setShareQty] = useState(props.shareQty);

  const handleShareEvent = () => {
    console.log('1/ call api share 2/ success');
    _setShareQty(_shareQty + 1);
  };

  return (
    <View style={styles.wrapperIconRightColum}>
      <ButtonComponent
        previousImage={
          <Image
            style={{width: 35, height: 35}}
            source={require('../../assets/images/reply.png')}
          />
        }
        onPress={() => handleShareEvent()}
      />
      <TextComponent text={`${_shareQty}`} fontSize={13} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperIconRightColum: {
    alignItems: 'center',
  },
});

export default ButtonShareComponent;
