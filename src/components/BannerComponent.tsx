import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../constants/Colors';
import TextComponent from './ingredient/TextComponent';

const DotsComponent = React.memo(
  ({length, currentDot}: {length: number; currentDot: number}) => {
    return (
      <View style={styles.wrapperDot}>
        {Array.from({length}).map((_, index: number) => (
          <View
            style={[
              styles.dot,
              {
                backgroundColor:
                  currentDot === index ? Colors.WHITE : Colors.GREY_2,
              },
            ]}
            key={index}></View>
        ))}
      </View>
    );
  },
);

const CurrentIndex = React.memo(
  ({length, currentDot}: {length: number; currentDot: number}) => {
    return (
      <View
        style={{
          position: 'absolute',
          backgroundColor: Colors.GREY_PALE,
          paddingHorizontal: 6,
          borderRadius: 3,
          bottom: 16,
          right: 16,
        }}>
        <TextComponent text={`${currentDot + 1}/${length}`} fontWeight="bold" />
      </View>
    );
  },
);

interface Props {
  height: number;
  widthOfBanner: number;
  data: any;
  showNode?: boolean;
  showIndexNumber?: boolean;
  autoScroll: boolean;
}

const BannerComponent = (props: Props) => {
  const {height, widthOfBanner, data, showNode, showIndexNumber, autoScroll} =
    props;
  const BannerRef = useRef<FlatList>(null);
  const [currentIndexDot, setCurrentIndexDot] = useState(0);
  // Session padding total is 20
  const isFocusing = useIsFocused();
  const totalWidthOfBanner = data.length * widthOfBanner;

  useEffect(() => {
    let counterDown = null;
    if (isFocusing && autoScroll) {
      counterDown = setInterval(() => {
        if (currentIndexDot !== data.length - 1) {
          BannerRef.current?.scrollToIndex({
            animated: true,
            index: currentIndexDot + 1,
          });
        } else {
          BannerRef.current?.scrollToIndex({animated: true, index: 0});
        }
      }, 3000);
    }

    return () => {
      counterDown && clearInterval(counterDown);
    };
  }, [currentIndexDot, isFocusing]);

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('click banner', item.id);
        }}>
        <View
          style={{
            width: widthOfBanner,
          }}>
          <Image style={[styles.bannerImages, {height}]} source={item.image} />
        </View>
      </TouchableOpacity>
    );
  };

  const handleScrollBanner = (val: any) => {
    const offsetX = val.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offsetX / widthOfBanner);
    setCurrentIndexDot(currentIndex);
  };

  return (
    <View>
      <FlatList
        onScroll={handleScrollBanner}
        ref={BannerRef}
        contentContainerStyle={{
          width: totalWidthOfBanner,
        }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({item}) => renderItem(item)}
      />
      {/* Dot */}
      {showNode && (
        <DotsComponent currentDot={currentIndexDot} length={data.length} />
      )}
      {/* Current index */}
      {showIndexNumber && (
        <CurrentIndex currentDot={currentIndexDot} length={data.length} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperDot: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center',
  },
  dot: {
    marginHorizontal: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  bannerImages: {
    width: '100%',
    objectFit: 'cover',
  },
});
export default BannerComponent;
