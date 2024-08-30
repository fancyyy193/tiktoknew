import React from 'react';
import {ScrollView} from 'react-native';
import Container from '../components/ingredient/Container';
import PrintHistorySearch from '../components/ingredient/PrintHistorySearch';
import SessionComponent from '../components/ingredient/SessionComponent';
import SpaceComponent from '../components/ingredient/SpaceComponent';
import {Colors} from '../constants/Colors';

const SearchScreen = () => {
  return (
    <Container isCenter={false} color={Colors.WHITE}>
      <SessionComponent>
        {/* History of search action */}
        <SpaceComponent height={12} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <PrintHistorySearch />
        </ScrollView>
      </SessionComponent>
    </Container>
  );
};

export default SearchScreen;
