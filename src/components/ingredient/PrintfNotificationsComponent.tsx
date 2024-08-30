import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import {NotificationsData} from '../../data/NotificationsData';
import RowComponent from './RowComponent';
import DefaultAvatar from '../common/DefaultAvatar';
import TextComponent from './TextComponent';
import {Colors} from '../../constants/Colors';
import SpaceComponent from './SpaceComponent';
import ButtonComponent from './ButtonComponent';
import Entypo from 'react-native-vector-icons/Entypo';
import NotificationItems from './NotificationItems';

const PrintfNotificationsComponent = () => {
  console.log(
    '===================PrintfNotificationsComponent=================',
  );
  return (
    <View>
      <FlatList
        data={NotificationsData}
        extraData={NotificationsData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <NotificationItems item={item} />}
      />
    </View>
  );
};

export default PrintfNotificationsComponent;
