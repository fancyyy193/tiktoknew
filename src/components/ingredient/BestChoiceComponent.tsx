import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { BestChoiceData } from '../../data/CommonData'
import BestChoiceItemComponent from './BestChoiceItemComponent';
import Container from './Container';
import { Colors } from '../../constants/Colors';

const BestChoiceComponent = () => {
  const data = BestChoiceData;
  return (
    <Container isCenter={false} color={Colors.WHITE}>
      <FlatList
        scrollEnabled={false}
        data={data}
        extraData={data}
        renderItem={({ item }) => (
          <BestChoiceItemComponent item={item} />
        )}
      />
    </Container>
  )
}

export default BestChoiceComponent