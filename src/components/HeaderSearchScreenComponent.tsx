// import { View, Text, TextInput } from 'react-native'
// import React, { useState } from 'react'
// import RowComponent from './ingredient/RowComponent';
// import ButtonComponent from './ingredient/ButtonComponent';
// import TextComponent from './ingredient/TextComponent';
// import { Colors } from '../constants/Colors';
// import IconIonicons from 'react-native-vector-icons/Ionicons'
// import IconAntDesign from 'react-native-vector-icons/AntDesign'
// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../router/Router';

// const HeaderSearchScreenComponent = () => {
//     const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
//     const [keyword, setKeyword] = useState('');

//     return (
//         <RowComponent justify={'space-between'} alignItems='center'>
//             <ButtonComponent
//                 previousIcon={
//                     <IconIonicons size={30} color={Colors.BLACK} name='arrow-back-sharp' />
//                 }
//                 onPress={() => {
//                     navigation.goBack();
//                 }}
//             />
//             {/* Input */}
//             <View style={{
//                 flex: 1,
//                 marginHorizontal: 5,
//                 backgroundColor: 'rgb(241 241 242)',
//                 borderRadius: 10,
//                 height: 45,
//             }}>
//                 <View style={{
//                     flexDirection: 'row',
//                     alignItems: 'center'
//                 }}>
//                     <IconAntDesign size={25} color={'grey'} name='search1' style={{ paddingHorizontal: 5 }} />
//                     <TextInput
//                         value={keyword}
//                         onChangeText={(val) => setKeyword(val)}
//                         style={{ flex: 1 }} cursorColor={Colors.PINK} />
//                     {
//                         Boolean(keyword) && <ButtonComponent
//                             previousIcon={<IconAntDesign size={23} color={'grey'} name='closecircle' style={{ paddingHorizontal: 5 }} />}
//                             onPress={() => setKeyword('')
//                             } />
//                     }
//                 </View>
//             </View>
//             <ButtonComponent
//                 titleChildren={
//                     <TextComponent text='Tìm kiếm' fontSize={18} fontWeight='bold' color={Colors.PINK} />
//                 }
//                 onPress={() => { }} />
//         </RowComponent>
//     )
// }

// export default HeaderSearchScreenComponent

import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import RowComponent from './ingredient/RowComponent';
import ButtonComponent from './ingredient/ButtonComponent';
import TextComponent from './ingredient/TextComponent';
import {Colors} from '../constants/Colors';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../router/Router';
import InputComponent from './ingredient/InputComponent';
import SpaceComponent from './ingredient/SpaceComponent';
import {INPUT_OF_HOME_SCREEN} from '../constants/Variables';
import Container from './ingredient/Container';

const HeaderSearchScreenComponent = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [keyword, setKeyword] = useState('');

  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        paddingVertical: 10,
      }}>
      <RowComponent justify={'space-between'} alignItems="center">
        <ButtonComponent
          previousIcon={
            <IconIonicons
              size={30}
              color={Colors.BLACK}
              name="arrow-back-sharp"
            />
          }
          onPress={() => {
            navigation.goBack();
          }}
        />
        <InputComponent
          paddingLeft={0}
          paddingRight={0}
          onPress={() => {}}
          placeholder={'Hãy nhập từ khóa'}
          iconRight={
            <IconAntDesign
              size={21}
              color={Colors.BLACK}
              name="closecircle"
              style={{paddingHorizontal: 5}}
            />
          }
          type={INPUT_OF_HOME_SCREEN}
          buttonRight={
            <TextComponent
              text="Tìm kiếm"
              fontSize={17}
              fontWeight="bold"
              color={Colors.PINK}
            />
          }
        />
      </RowComponent>
    </View>
  );
};

export default HeaderSearchScreenComponent;
