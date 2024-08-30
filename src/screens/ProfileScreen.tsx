import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonAvatarComponent from '../components/ingredient/ButtonAvatarComponent';
import ButtonComponent from '../components/ingredient/ButtonComponent';
import CategoriesUserProfileScreenComponent from '../components/ingredient/CategoriesUserProfileScreenComponent';
import Container from '../components/ingredient/Container';
import RowComponent from '../components/ingredient/RowComponent';
import SessionComponent from '../components/ingredient/SessionComponent';
import SpaceComponent from '../components/ingredient/SpaceComponent';
import TextComponent from '../components/ingredient/TextComponent';
import { Colors } from '../constants/Colors';
import { SCREEN_HEIGHT } from '../constants/Variables';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleOpenShop = () => {
    navigation.navigate('Shop');
  };

  return (
    <Container isCenter={false} color={Colors.WHITE}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SessionComponent>
          <Container
            notFullHeightScreen={true}
            isCenter={true}
            color={Colors.WHITE}>
            {/* Avatar */}
            <ButtonAvatarComponent
              sizeIcon={30}
              iconAddRight={true}
              avatar="https://firebasestorage.googleapis.com/v0/b/tiktok-efa67.appspot.com/o/vecteezy_user-icon-on-transparent-background_19879186.png?alt=media&token=9ca3144e-b7cc-441c-be98-57e193768bbf"
              isFollowing
              name="Hanh"
              uid={1}
              addButton
              size={100}
            />
            <SpaceComponent height={10} />
            <TextComponent text="Người Dùng TikTok" color={Colors.BLACK} />
            <SpaceComponent height={20} />
            <RowComponent justify="center">
              <View>
                <ButtonComponent
                  isVertical={true}
                  onPress={() => {}}
                  titleTop={
                    <TextComponent
                      fontWeight="bold"
                      text="0"
                      color={Colors.BLACK}
                    />
                  }
                  titleChildren={
                    <TextComponent text="Đang follow" color={Colors.BLACK} />
                  }
                />
              </View>

              <SpaceComponent width={40} />
              <ButtonComponent
                isVertical={true}
                onPress={() => {}}
                titleTop={
                  <TextComponent
                    fontWeight="bold"
                    text="0"
                    color={Colors.BLACK}
                  />
                }
                titleChildren={
                  <TextComponent text="Follower" color={Colors.BLACK} />
                }
              />
              <SpaceComponent width={40} />
              <ButtonComponent
                isVertical={true}
                onPress={() => {}}
                titleTop={
                  <TextComponent
                    fontWeight="bold"
                    text="0"
                    color={Colors.BLACK}
                  />
                }
                titleChildren={
                  <TextComponent text="Thích" color={Colors.BLACK} />
                }
              />
            </RowComponent>
            <SpaceComponent height={20} />
            <RowComponent justify="center" alignItems="center">
              <ButtonComponent
                onPress={() => {}}
                paddingVertical={12}
                paddingHorizontal={15}
                borderRadius={8}
                backgroundColor={Colors.GREY_5}
                titleChildren={
                  <TextComponent text="Sửa hồ sơ" color={Colors.BLACK} />
                }
              />
              <SpaceComponent width={5} />
              <ButtonComponent
                onPress={() => {}}
                paddingVertical={12}
                paddingHorizontal={15}
                borderRadius={8}
                backgroundColor={Colors.GREY_5}
                titleChildren={
                  <TextComponent text="Chia sẻ hồ sơ" color={Colors.BLACK} />
                }
              />
              <SpaceComponent width={5} />
              <ButtonComponent
                onPress={() => {}}
                paddingVertical={12}
                paddingHorizontal={15}
                borderRadius={8}
                backgroundColor={Colors.GREY_5}
                previousIcon={
                  <AntDesign name="adduser" size={20} color={Colors.BLACK} />
                }
              />
            </RowComponent>
            <SpaceComponent height={20} />
            <ButtonComponent
              onPress={() => {}}
              backgroundColor={Colors.GREY_5}
              paddingHorizontal={10}
              borderRadius={2}
              titleChildren={
                <TextComponent text="+ Thêm tiểu sử" color={Colors.BLACK} />
              }
            />
            <SpaceComponent height={10} />
            {/* order */}
            <RowComponent justify="center" alignItems="center">
              <ButtonComponent
                onPress={handleOpenShop}
                previousIcon={
                  <Ionicons name="cart-outline" size={25} color={Colors.PINK} />
                }
                SpaceComponentPrevious={5}
                paddingHorizontal={10}
                borderRadius={2}
                titleChildren={
                  <TextComponent text="Cửa hàng" color={Colors.BLACK} />
                }
              />
              <SpaceComponent
                width={0.5}
                height={12}
                backgroundColor={Colors.GREY}
              />
              <ButtonComponent
                onPress={() => {}}
                previousIcon={
                  <Ionicons name="cube-outline" size={25} color={Colors.PINK} />
                }
                SpaceComponentPrevious={5}
                paddingHorizontal={10}
                borderRadius={2}
                titleChildren={
                  <TextComponent text="Sản phẩm" color={Colors.BLACK} />
                }
              />
            </RowComponent>
          </Container>
          <SpaceComponent height={10} />
        </SessionComponent>
        <View style={styles.wrapperCategories}>
          <CategoriesUserProfileScreenComponent />
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapperCategories: {
    flex: 1,
    width: '100%',
    height: SCREEN_HEIGHT,
  },
  countNotification: {
    position: 'absolute',
    backgroundColor: Colors.PINK_PALE,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    right: 0,
    top: -15,
  },
});
export default ProfileScreen;
