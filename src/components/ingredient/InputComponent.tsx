import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../constants/Colors';
import {
  INPUT_OF_COMMENT,
  INPUT_OF_HOME_SCREEN,
  INPUT_OF_SHOP_SCREEN,
} from '../../constants/Variables';
import {useAppDispatch, useAppSelector} from '../../redux/Hooks';
import {closeReplyComments} from '../../redux/Slice';
import RowComponent from './RowComponent';
import SpaceComponent from './SpaceComponent';
import {Text} from 'react-native';

interface Props {
  onPress: (val: any[]) => void;
  placeholder: string;
  iconRight?: ReactNode;
  buttonRight?: ReactNode;
  paddingLeft?: number;
  paddingRight?: number;
  type: number;
}

const InputComponent = (props: Props) => {
  console.log('================InputComponent====================');
  const dispatch = useAppDispatch();
  const {openReplyComment, openModalComment} = useAppSelector(
    state => state.TikTok2024Reducer,
  );
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    openReplyComment.uid && inputRef?.current?.focus();
  }, [openReplyComment.uniqueCode]);

  Keyboard.addListener('keyboardDidHide', () => {
    inputRef?.current?.blur();
  });

  const {
    onPress,
    placeholder,
    iconRight,
    paddingLeft,
    paddingRight,
    type,
    buttonRight,
  } = props;
  const [comments, setComments] = useState('');

  const handleSubmitEvent = useCallback(() => {
    console.log('====================================');
    console.log(comments);
    console.log('====================================');
    onPress([{comments}, {openReplyComment}]);
    dispatch(closeReplyComments());
    setComments('');
    Keyboard.dismiss();
  }, [comments]);

  switch (type) {
    case INPUT_OF_COMMENT:
      return (
        <>
          <TextInput
            ref={inputRef}
            value={comments}
            onChangeText={val => setComments(val)}
            placeholder={placeholder}
            style={[
              styles.input,
              {paddingLeft: paddingLeft ?? 15, paddingRight},
            ]}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => handleSubmitEvent()}>
            {iconRight}
          </TouchableOpacity>
        </>
      );

    case INPUT_OF_HOME_SCREEN:
      return (
        <RowComponent justify={'space-between'} alignItems="center">
          <View style={styles.wrapperInputHomeSearch}>
            <IconAntDesign
              size={25}
              color={Colors.BLACK}
              name="search1"
              style={{paddingHorizontal: 5}}
            />
            <TextInput
              ref={inputRef}
              value={comments}
              onChangeText={val => setComments(val)}
              placeholder={placeholder}
              cursorColor={Colors.PINK}
              style={[
                styles.inputHomeSearch,
                {
                  paddingLeft: paddingLeft ?? 15,
                  paddingRight,
                  fontSize: 18,
                },
              ]}
            />
            {comments && (
              <TouchableOpacity
                style={styles.icon}
                onPress={() => {
                  setComments('');
                }}>
                {iconRight}
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity onPress={() => handleSubmitEvent()}>
            {buttonRight}
          </TouchableOpacity>
          <SpaceComponent width={16} />
        </RowComponent>
      );

    case INPUT_OF_SHOP_SCREEN:
      return (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: Colors.PINK,
            height: 42,
          }}>
          <IconAntDesign
            size={25}
            color={Colors.BLACK}
            name="search1"
            style={{paddingHorizontal: 5}}
          />
          <TextInput
            ref={inputRef}
            value={comments}
            onChangeText={val => setComments(val)}
            placeholder={placeholder}
            cursorColor={Colors.PINK}
            style={[
              styles.inputHomeSearch,
              {
                paddingLeft: paddingLeft ?? 15,
                paddingRight,
                fontSize: 17,
              },
            ]}
          />
          <TouchableOpacity onPress={() => handleSubmitEvent()}>
            {buttonRight}
          </TouchableOpacity>
          <SpaceComponent width={5} />
        </View>
      );
    default:
      break;
  }
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: '87%',
  },
  inputHomeSearch: {
    flex: 1,
  },
  wrapperInputHomeSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.95,
    marginHorizontal: 5,
    backgroundColor: 'rgb(241 241 242)',
    borderRadius: 10,
    height: 45,
  },
  icon: {
    width: '13%',
  },
});
export default InputComponent;
