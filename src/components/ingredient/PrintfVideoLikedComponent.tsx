import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {Videos} from '../../data/Videos';
import VideoHadLikeItem from './VideoHadLikeItem';

const PrintfVideoLikedComponent = () => {
  console.log('==================PrintfVideoLikedComponent==================');
  const handleOnClickVideoEvent = useCallback((id: number) => {
    console.log(id);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        keyExtractor={(item: any) => item.id}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={3}
        data={Videos}
        extraData={Videos}
        renderItem={({item}) => {
          return (
            <VideoHadLikeItem item={item} onPress={handleOnClickVideoEvent} />
          );
        }}
      />
    </View>
  );
};

export default PrintfVideoLikedComponent;
