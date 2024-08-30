import {View, Text} from 'react-native';
import React from 'react';
import RowComponent from './RowComponent';
import DefaultAvatar from '../common/DefaultAvatar';
import TextComponent from './TextComponent';
import SpaceComponent from './SpaceComponent';
import ButtonComponent from './ButtonComponent';
import ButtonLikeComponent from './ButtonLikeComponent';
import ButtonDislikeComponent from './ButtonDislikeComponent';
import {Colors} from '../../constants/Colors';
import {useAppDispatch} from '../../redux/Hooks';
import {openReplyComments} from '../../redux/Slice';
import ContentSingleVideo from './ContentSingleVideo';

interface Props {
  item: any;
  type: 1 | 2;
  onPress?: () => void;
  seeMore?: boolean;
  totalOfScreen?: number;
}
const CommentsItemComponent = (props: Props) => {
  console.log('==================CommentsItemComponent==================');
  const dispatch = useAppDispatch();
  const {item, onPress, seeMore, type, totalOfScreen} = props;
  return (
    <RowComponent
      marginVertical={5}
      justify="flex-start"
      marginLeft={type === 1 ? 0 : 32}>
      <View style={{width: '13%'}}>
        <DefaultAvatar size={type === 1 ? 45 : 38} name="h" />
      </View>
      <View style={{width: '87%'}}>
        <TextComponent text={item.user.name} color={Colors.GREY} />
        <ContentSingleVideo
          color={Colors.BLACK}
          content={item.comments ?? item.feedback}
        />
        <View style={{flex: 1}}>
          <RowComponent justify="flex-start" alignItems="center">
            <TextComponent
              fontSize={14}
              text="10-12-2003"
              color={Colors.BLACK}
            />
            <SpaceComponent width={20} />
            <ButtonComponent
              onPress={() =>
                dispatch(
                  openReplyComments({
                    uid: item.user.uid,
                    name: item.user.name,
                  }),
                )
              }
              titleChildren={
                <TextComponent
                  fontSize={14}
                  text="Trả lời"
                  color={Colors.BLACK}
                />
              }
            />
            <SpaceComponent width={20} />
            <ButtonComponent
              onPress={() => console.log('Xóa')}
              titleChildren={
                <TextComponent fontSize={14} text="Xóa" color={Colors.BLACK} />
              }
            />
            <SpaceComponent width={20} />
            <ButtonLikeComponent
              row={false}
              id={0}
              uid={0}
              isLiked={true}
              fontSize={20}
              likeQty={123}
              color={Colors.GREY}
              space={5}
            />
            <SpaceComponent width={20} />
            <ButtonDislikeComponent isDisliked={true} />
          </RowComponent>
          {onPress && (
            <RowComponent
              onPress={onPress}
              alignItems="center"
              justify="flex-start">
              <View
                style={{width: 30, height: 1, backgroundColor: Colors.BLACK}}
              />
              <SpaceComponent width={5} />
              <TextComponent
                color={Colors.BLACK}
                text={!seeMore ? `Xem ${totalOfScreen} câu trả lời` : 'Ẩn bớt'}
              />
            </RowComponent>
          )}
        </View>
      </View>
    </RowComponent>
  );
};

export default CommentsItemComponent;
