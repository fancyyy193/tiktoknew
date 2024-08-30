import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../constants/Colors';
import {RootStackParamList} from '../router/Router';
import ButtonComponent from './ingredient/ButtonComponent';
import Container from './ingredient/Container';
import SessionComponent from './ingredient/SessionComponent';
import TextComponent from './ingredient/TextComponent';

interface Props {
  title: string;
}

const DetailNotificationHeaderComponent = (props: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {title} = props;
  return (
    <View style={styles.container}>
      <SessionComponent>
        <Container
          isCenter={true}
          notFullHeightScreen={true}
          color={Colors.NO_COLOR}>
          <View style={styles.wrapperButtonLeft}>
            <ButtonComponent
              onPress={() => navigation.goBack()}
              previousIcon={
                <AntDesign name="arrowleft" color={Colors.BLACK} size={30} />
              }
            />
          </View>
          <TextComponent
            text={title}
            color={Colors.BLACK}
            fontSize={18}
            fontWeight="bold"
          />
        </Container>
      </SessionComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
  },
  wrapperButtonLeft: {
    position: 'absolute',
    left: 0,
  },
});
export default DetailNotificationHeaderComponent;
