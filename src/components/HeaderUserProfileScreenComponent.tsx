import React, {ReactNode} from 'react';
import {Colors} from '../constants/Colors';
import ButtonComponent from './ingredient/ButtonComponent';
import RowComponent from './ingredient/RowComponent';
import SessionComponent from './ingredient/SessionComponent';
import TextComponent from './ingredient/TextComponent';

interface Props {
  firstIcon: ReactNode;
  secondsIcon: ReactNode;
  thirdIcon: ReactNode;
  nameOfScreen: ReactNode;
}

const HeaderUserProfileScreenComponent = (props: Props) => {
  const {firstIcon, secondsIcon, thirdIcon, nameOfScreen} = props;
  return (
    <SessionComponent backgroundColor={Colors.WHITE}>
      <RowComponent justify="space-between" alignItems="center">
        <ButtonComponent onPress={() => {}} previousIcon={firstIcon} />
        <ButtonComponent
          beHindIcon={secondsIcon}
          onPress={() => {}}
          SpaceComponentBeHind={5}
          titleChildren={nameOfScreen}
        />
        <ButtonComponent onPress={() => {}} previousIcon={thirdIcon} />
      </RowComponent>
    </SessionComponent>
  );
};

export default HeaderUserProfileScreenComponent;
