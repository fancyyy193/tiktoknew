import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconOcticons from 'react-native-vector-icons/Octicons';
import {Colors} from '../../constants/Colors';
import {SearchData} from '../../data/SearchData';
import ButtonComponent from './ButtonComponent';
import RowComponent from './RowComponent';
import SearchItemHistoryComponent from './SearchItemHistoryComponent';
import TextComponent from './TextComponent';

const PrintHistorySearch = () => {
  const data = SearchData;
  const [showMore, setShowMore] = useState(false);
  const [dataBellow3, setDataBellow3] =
    useState<{id: number; name: string}[]>();
  const [dataGreater3, setDataGreater3] =
    useState<{id: number; name: string}[]>();

  useEffect(() => {
    if (data) {
      const tempData = [...data];
      const dataSpliceBellow3 =
        tempData.length >= 3 ? tempData.splice(0, 3) : tempData;
      const dataSpliceGreater3 = tempData;
      setDataBellow3(dataSpliceBellow3);
      setDataGreater3(dataSpliceGreater3);
    }
  }, [data]);

  const clickItemHistoryEvent = useCallback((id: number, isDelete: boolean) => {
    console.log('====================================');
    console.log(id, isDelete);
    console.log('====================================');
  }, []);

  return (
    <View>
      {
        <FlatList
          refreshing={false}
          onRefresh={() => {
            console.log('call data');
          }}
          scrollEnabled={false}
          data={dataBellow3}
          extraData={dataBellow3}
          renderItem={({item}) => (
            <SearchItemHistoryComponent
              id={item.id}
              onPress={clickItemHistoryEvent}
              content={item.name}
              haveCloseButton={true}
              previousIcon={
                <IconAntDesign
                  name="clockcircle"
                  size={20}
                  color={Colors.GREY_3}
                />
              }
            />
          )}
        />
      }
      {/* Item greater than 3 */}
      {showMore && dataGreater3 && (
        <PrintfHistorySearchGreaterPosition3
          data={dataGreater3}
          onPress={clickItemHistoryEvent}
        />
      )}
      {Boolean(dataGreater3?.length) && !showMore && (
        <RowComponent justify={'center'}>
          <ButtonComponent
            SpaceComponentBeHind={5}
            titleChildren={
              <TextComponent
                fontWeight="bold"
                color={Colors.GREY}
                text="Xem thêm"
              />
            }
            onPress={() => setShowMore(!showMore)}
            beHindIcon={
              <IconAntDesign name="down" size={15} color={Colors.GREY} />
            }
          />
        </RowComponent>
      )}
      {/* Recommends  */}
      <TextComponent
        fontSize={18}
        color={Colors.BLACK}
        fontWeight="bold"
        text="Bạn có thể thích"
      />
      <FlatList
        scrollEnabled={false}
        data={dataBellow3}
        extraData={dataBellow3}
        renderItem={({item}) => (
          <SearchItemHistoryComponent
            id={item.id}
            onPress={clickItemHistoryEvent}
            content={item.name}
            previousIcon={
              <IconOcticons name="dot-fill" size={15} color={Colors.GREY_3} />
            }
          />
        )}
      />
    </View>
  );
};

interface Props {
  data: {id: number; name: string}[];
  onPress: (id: number, isDelete: boolean) => void;
}

const PrintfHistorySearchGreaterPosition3 = React.memo((props: Props) => {
  const {data, onPress} = props;
  return (
    <FlatList
      refreshing={false}
      onRefresh={() => {}}
      scrollEnabled={false}
      data={data}
      extraData={data}
      renderItem={({item}) => (
        <SearchItemHistoryComponent
          id={item.id}
          onPress={onPress}
          content={item.name}
          haveCloseButton={true}
          previousIcon={
            <IconAntDesign name="clockcircle" size={20} color={Colors.GREY_3} />
          }
        />
      )}
    />
  );
});

export default React.memo(PrintHistorySearch);
