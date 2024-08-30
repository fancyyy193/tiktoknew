import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {ReactNode, memo, useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../../constants/Colors';
import {
  DETAIL_NOTIFICATION_SCREEN,
  STACK_NAVIGATION_SERVICE,
} from '../../constants/Screens';
import {RootStackParamList} from '../../router/Router';
import DefaultAvatar from '../common/DefaultAvatar';
import RowComponent from './RowComponent';
import SpaceComponent from './SpaceComponent';
import TextComponent from './TextComponent';

interface Props {
  item: any;
}

interface NotificationsType {
  id: number;
  type: number;
  icon: ReactNode;
  content: string;
  title: string;
  color: string;
  user: {
    id: number;
    name: string;
    avatar: string;
  };
}

type DetailNotificationParams = {
  id: number;
  type: number;
  title?: string;
};

const NotificationItems = (props: Props) => {
  console.log('=================NotificationItems===================');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {item} = props;
  const [notification, setNotification] = useState<NotificationsType>({
    id: 0,
    type: 0,
    icon: '',
    content: '',
    title: '',
    color: '',
    user: {
      id: 0,
      name: '',
      avatar: '',
    },
  });

  useEffect(() => {
    let icon = null;
    let color = '';
    switch (item.type) {
      case 1:
        icon = (
          <FontAwesome5 name="user-friends" size={30} color={Colors.WHITE} />
        );
        color = 'rgb(9 171 240)';
        break;
      case 2:
        icon = <FontAwesome5 name="bell" size={30} color={Colors.WHITE} />;
        color = 'rgb(251 60 119)';
        break;
      case 3:
        icon = <Entypo name="shopping-bag" size={30} color={Colors.WHITE} />;
        color = 'rgb(255 157 38)';
        break;
      case 4:
        icon = <Entypo name="box" size={30} color={Colors.WHITE} />;
        color = 'rgb(10 15 53)';
        break;
      default:
        break;
    }
    setNotification(prevNotification => ({
      ...prevNotification,
      id: item.id,
      type: item.type,
      icon: icon,
      title: item.title,
      color: color,
      content: item.content,
      user: item.user,
    }));
  }, [item]);

  const handleClickItemEvent = (_id: number, _title: string) => {
    navigation.navigate(STACK_NAVIGATION_SERVICE, {
      screen: DETAIL_NOTIFICATION_SCREEN,
      params: {
        id: _id,
        type: notification.type,
        title: _title,
      },
    } as any);
  };

  return (
    <TouchableOpacity
      onPress={() => handleClickItemEvent(notification.id, notification.title)}>
      <RowComponent justify="space-between" alignItems="center">
        {/* Left */}
        <RowComponent justify="flex-start" alignItems="center">
          <DefaultAvatar
            size={60}
            name={notification.user.name[0]}
            color={notification.color}
            icon={notification.icon}
          />
          <SpaceComponent width={10} />
          <View>
            <TextComponent text={notification.title} color={Colors.BLACK} />
            <TextComponent text={notification.content} color={Colors.GREY} />
          </View>
        </RowComponent>
        {/* Right */}
        <Entypo name="chevron-small-right" size={25} color={Colors.BLACK} />
      </RowComponent>
      <SpaceComponent height={10} />
    </TouchableOpacity>
  );
};

export default memo(NotificationItems);
