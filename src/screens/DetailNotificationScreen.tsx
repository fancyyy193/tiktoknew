import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import Container from '../components/ingredient/Container';
import NewFollowComponent from '../components/ingredient/NewFollowComponent';
import SessionComponent from '../components/ingredient/SessionComponent';
import { Colors } from '../constants/Colors';

type DetailNotificationParams = {
  id: number;
  type: number;
  title?: string;
};

const DetailNotificationScreen = () => {
  const route =
    useRoute<RouteProp<{ params: DetailNotificationParams }, 'params'>>();
  const { id, type, title } = route.params;
  let userInterface: React.JSX.Element | null = null;

  switch (type) {
    case 2:
      userInterface = (
        <SessionComponent>
          <NewFollowComponent />
        </SessionComponent>
      );
      break;
    default:
      break;
  }

  return (
    <Container isCenter={false} color={Colors.WHITE}>
      {userInterface}
    </Container>
  );
};

export default DetailNotificationScreen;
