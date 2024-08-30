import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../redux/Hooks';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconButton from '../ingredient/IconButton';
import {Colors} from '../../constants/Colors';

interface ToolbarWithBackPressProps {
  title: string;
}

export default function ToolbarWithBackPress({
  title,
}: ToolbarWithBackPressProps) {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.toolbarBody}>
      <IconButton
        icon={<Ionicons name="chevron-back" color={Colors.BLACK} size={25} />}
        onPress={() => handleGoBack()}
        inactiveBackgroundColor={''}
        activeBackgroundColor={''}
      />
      <Text style={styles.toolbarTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbarBody: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#fff',
    elevation: 5,
  },
  toolbarTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backBtnStyle: {
    position: 'absolute',
    left: 10,
    zIndex: 99,
  },
});
