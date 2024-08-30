import React from 'react';
import Container from '../components/ingredient/Container';
import PrintfNotificationsComponent from '../components/ingredient/PrintfNotificationsComponent';
import SessionComponent from '../components/ingredient/SessionComponent';
import StreamVideoComponent from '../components/ingredient/StreamVideoComponent';
import { Colors } from '../constants/Colors';

const NotificationsScreen = () => {
  console.log('===================NotificationsScreen=================');
  return (
    <Container isCenter={false} color={Colors.WHITE}>
      {/* liveStreams */}
      <StreamVideoComponent />
      {/* Notifications */}
      <SessionComponent>
        <PrintfNotificationsComponent />
      </SessionComponent>
    </Container>
  );
};

export default NotificationsScreen;
