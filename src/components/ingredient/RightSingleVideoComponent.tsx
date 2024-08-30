import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SCREEN_HEIGHT} from '../../constants/Variables';
import ButtonAvatarComponent from './ButtonAvatarComponent';
import ButtonCommentComponent from './ButtonCommentComponent';
import ButtonFavoriteComponent from './ButtonFavoriteComponent';
import ButtonLikeComponent from './ButtonLikeComponent';
import ButtonShareComponent from './ButtonShareComponent';
import SpaceComponent from './SpaceComponent';

interface Props {
  uid: number;
  userName: string;
  avatar: string;
  heartQty: number;
  commentsQty: number;
  favoriteQty: number;
  shareQty: number;
  isFavorite: boolean;
  isLiked: boolean;
  comments: any;
  onClickButtonEvent: (idButton: number) => void;
}

const RightSingleVideoComponent = (props: Props) => {
  const {
    comments,
    isFavorite,
    isLiked,
    avatar,
    commentsQty,
    favoriteQty,
    heartQty,
    shareQty,
    uid,
    onClickButtonEvent,
    userName,
  } = props;
  const bottomTabHeight = useBottomTabBarHeight();

  return (
    <View
      style={[
        styles.wrapper,
        {height: (SCREEN_HEIGHT - bottomTabHeight - 105) / 2},
      ]}>
      <ButtonAvatarComponent
        uid={0}
        avatar={avatar}
        isFollowing={false}
        addButton={true}
        name={userName}
      />
      <SpaceComponent height={4} />
      <ButtonLikeComponent
        row={true}
        isLiked={isLiked}
        likeQty={heartQty}
        id={0}
        uid={0}
      />
      <ButtonCommentComponent
        id={0}
        uid={0}
        comments={comments}
        commentsQty={commentsQty}
      />
      <ButtonFavoriteComponent
        isFavorite={isFavorite}
        favoriteQty={favoriteQty}
        id={0}
        uid={0}
      />
      <ButtonShareComponent shareQty={shareQty} id={0} uid={0} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    right: 0,
    bottom: 87,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  wrapperIconRightColum: {
    alignItems: 'center',
  },
});

export default RightSingleVideoComponent;
