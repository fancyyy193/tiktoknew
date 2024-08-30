import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import RowComponent from './RowComponent';
import {Colors} from '../../constants/Colors';
import SessionComponent from './SessionComponent';
import ButtonAvatarComponent from './ButtonAvatarComponent';
import InputComponent from './InputComponent';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {useAppSelector} from '../../redux/Hooks';
import {INPUT_OF_COMMENT} from '../../constants/Variables';

interface Props {
  onSpringAnimation: (action: 'up' | 'down') => void;
}
const InputCommentModalComponent = (props: Props) => {
  console.log('===============InputCommentModalComponent=====================');

  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      (e: any) => {
        setKeyboardHeight(e.endCoordinates.height);
        props.onSpringAnimation('up');
      },
    );
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardHeight(0);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [keyboardHeight]);

  return (
    <View style={[styles.wrapper, {bottom: keyboardHeight}]}>
      <KeyboardAvoidingView>
        <SessionComponent>
          <RowComponent justify={undefined}>
            <View style={{width: '13%'}}>
              <ButtonAvatarComponent
                uid={0}
                size={38}
                avatar={''}
                isFollowing={false}
                addButton={false}
                name={'h'}
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputComponent
                type={INPUT_OF_COMMENT}
                iconRight={
                  <IconIonicons
                    name="arrow-up-circle"
                    size={35}
                    color={Colors.PINK}
                  />
                }
                onPress={val => {
                  console.log(JSON.stringify(val));
                }}
                placeholder={'Thêm bình luận'}
              />
            </View>
          </RowComponent>
        </SessionComponent>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    backgroundColor: 'rgb(250 250 250)',
    height: 75,
    width: '100%',
    borderTopWidth: 0.2,
  },
  inputWrapper: {
    width: '87%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.GREY_2,
    borderRadius: 100,
  },
});
export default InputCommentModalComponent;
