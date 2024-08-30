import React, {ReactNode} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../constants/Colors';
import ButtonComponent from './ButtonComponent';
import RowComponent from './RowComponent';
import SpaceComponent from './SpaceComponent';
import TextComponent from './TextComponent';

interface Props {
  id: number;
  onPress: (id: number, isDelete: boolean) => void;
  content: string;
  previousIcon?: ReactNode;
  haveCloseButton?: ReactNode;
}

const SearchItemHistoryComponent = (props: Props) => {
  const {previousIcon, haveCloseButton, content, id, onPress} = props;
  return (
    <View style={styles.item}>
      <Pressable
        onPress={() => {
          console.log('search');
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? Colors.GREY_2 : Colors.WHITE,
            paddingVertical: 5,
          },
        ]}>
        {({pressed}) => (
          <RowComponent justify={'space-between'} alignItems="center">
            <RowComponent justify="center" alignItems="center">
              {previousIcon}
              <SpaceComponent width={10} />
              <TextComponent
                fontWeight="bold"
                color={Colors.BLACK}
                text={content}
              />
            </RowComponent>
            {haveCloseButton && (
              <ButtonComponent
                previousIcon={
                  <IconAntDesign name="close" size={20} color={Colors.GREY_3} />
                }
                onPress={() => onPress(id, true)}
              />
            )}
          </RowComponent>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 5,
  },
});

export default SearchItemHistoryComponent;
