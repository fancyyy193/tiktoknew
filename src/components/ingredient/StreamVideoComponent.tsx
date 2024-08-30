import React from 'react';
import {FlatList, View} from 'react-native';
import {LiveStreamData} from '../../data/LiveStreamData';
import StreamVideoItem from './StreamVideoItem';

const StreamVideoComponent = () => {
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={LiveStreamData}
        horizontal={true}
        extraData={LiveStreamData}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({item, index}) =>
          index === 0 ? (
            <>
              <StreamVideoItem item={item} isFirstItem={true} />
              <StreamVideoItem item={item} isFirstItem={false} />
            </>
          ) : (
            <StreamVideoItem item={item} isFirstItem={false} />
          )
        }
      />
    </View>
  );
};

export default StreamVideoComponent;
