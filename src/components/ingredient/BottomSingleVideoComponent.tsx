import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../constants/Colors';
import ButtonComponent from './ButtonComponent';
import ContentSingleVideo from './ContentSingleVideo';
import RowComponent from './RowComponent';
import SessionComponent from './SessionComponent';
import SpaceComponent from './SpaceComponent';
import TextComponent from './TextComponent';

interface Props {
  uid: number;
  name: string;
  isOfficial: boolean;
  title: string;
  tags: [{id: number; name: string}];
  isActive: boolean;
}

const BottomSingleVideoComponent = (props: Props) => {
  console.log('===================BottomSingleVideoComponent=================');
  const {uid, title, isOfficial, name, tags, isActive} = props;
  return (
    <View style={styles.wrapper}>
      <SessionComponent>
        {/* Name */}
        <View style={styles.rowWrapper}>
          <View style={styles.wrapperRight}>
            <RowComponent
              alignItems="center"
              justify="flex-start"
              onPress={() => console.log(uid)}>
              <TextComponent text={name} fontWeight="bold" fontSize={18} />
              {isOfficial && (
                <>
                  <SpaceComponent width={5} />
                  <IconFontAwesome
                    name="check-circle"
                    size={18}
                    color={Colors.BLUE_1}
                  />
                </>
              )}
            </RowComponent>
            {/* content */}
            <ContentSingleVideo content={title} />
            {/* Tag */}
            <RowComponent justify="flex-start" isWrap={true}>
              {tags?.map(item => {
                return (
                  <ButtonComponent
                    key={item.id}
                    titleChildren={
                      <TextComponent
                        text={item.name + ' '}
                        color={Colors.WHITE}
                      />
                    }
                    onPress={() => console.log(item.id)}
                  />
                );
              })}
            </RowComponent>
          </View>
          <View style={styles.wrapperLeft}></View>
        </View>
        <SpaceComponent height={15} />
      </SessionComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
  },
  wrapperRight: {
    width: '85%',
  },
  wrapperLeft: {
    width: '15%',
  },
  rowWrapper: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 0,
    bottom: 5,
  },
  musicNode: {
    position: 'absolute',
    width: 20,
    height: 20,
    tintColor: 'white',
    right: 48,
    bottom: 25,
  },
});
export default memo(BottomSingleVideoComponent);
