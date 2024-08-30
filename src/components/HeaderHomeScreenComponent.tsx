import React, {memo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../constants/Colors';
import {FontFamilies} from '../constants/FontFamilies';
import {
  followingScreenId,
  forYouScreenId,
  friendScreenId,
  liveScreenId,
  searchScreenId,
} from '../constants/Variables';
import ButtonComponent from './ingredient/ButtonComponent';
import RowComponent from './ingredient/RowComponent';
import SessionComponent from './ingredient/SessionComponent';
import TextComponent from './ingredient/TextComponent';

const HeaderHomeScreenComponent = (props: {
  onChooseOptionEvent: (idChoose: number) => void;
}) => {
  console.log('==================HeaderHomeScreenComponent==================');
  const [activeId, setActiveId] = useState(4);
  const {onChooseOptionEvent} = props;

  const handleChooseOptionAction = (id: number) => {
    setActiveId(id);
    onChooseOptionEvent(id);
  };

  return (
    <View style={styles.wrapper}>
      <SessionComponent>
        <RowComponent justify="space-around" alignItems="center">
          <ButtonComponent
            onPress={() => {
              handleChooseOptionAction(liveScreenId);
            }}
            previousIcon={
              <IconMaterialIcons
                name="live-tv"
                size={28}
                color={Colors.WHITE}
              />
            }
          />
          <ButtonComponent
            textDecoration={true}
            isActive={activeId === friendScreenId}
            onPress={() => handleChooseOptionAction(friendScreenId)}
            titleChildren={
              <TextComponent
                color={
                  activeId !== friendScreenId ? Colors.GREY_PALE : Colors.WHITE
                }
                text="Bạn bè"
                fontWeight="bold"
                fontFamily={FontFamilies.font_3}
              />
            }
          />
          <ButtonComponent
            textDecoration={true}
            isActive={activeId === followingScreenId}
            onPress={() => handleChooseOptionAction(followingScreenId)}
            titleChildren={
              <TextComponent
                color={
                  activeId !== followingScreenId
                    ? Colors.GREY_PALE
                    : Colors.WHITE
                }
                text="Đang follow"
                fontWeight="bold"
                fontFamily="sanserif"
              />
            }
          />
          <ButtonComponent
            isActive={activeId === forYouScreenId}
            textDecoration={true}
            onPress={() => handleChooseOptionAction(forYouScreenId)}
            titleChildren={
              <TextComponent
                color={
                  activeId !== forYouScreenId ? Colors.GREY_PALE : Colors.WHITE
                }
                text="Dành cho bạn"
                fontWeight="bold"
                fontFamily="sanserif"
              />
            }
          />
          <ButtonComponent
            onPress={() => handleChooseOptionAction(searchScreenId)}
            previousIcon={
              <IconAntDesign name="search1" size={28} color={Colors.WHITE} />
            }
          />
        </RowComponent>
      </SessionComponent>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 999,
  },
});
export default memo(HeaderHomeScreenComponent);
