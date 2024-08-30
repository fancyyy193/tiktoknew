import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useAppDispatch} from '../../redux/Hooks';
import {openModalComments} from '../../redux/Slice';
import ButtonComponent from './ButtonComponent';
import TextComponent from './TextComponent';

interface Props {
  id: number;
  uid: number;
  comments: any;
  commentsQty: number;
}
const ButtonCommentComponent = (props: Props) => {
  const {commentsQty, id, uid, comments} = props;
  const dispatch = useAppDispatch();
  const [_commentQty, _setCommentQty] = useState<number>(commentsQty);
  return (
    <View style={styles.wrapperIconRightColum}>
      <ButtonComponent
        previousImage={
          <Image
            style={{width: 35, height: 35}}
            source={require('../../assets/images/message-circle.png')}
          />
        }
        onPress={() => {
          dispatch(openModalComments(comments));
        }}
      />
      <TextComponent text={`${_commentQty}`} fontSize={13} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperIconRightColum: {
    alignItems: 'center',
  },
});

export default ButtonCommentComponent;
