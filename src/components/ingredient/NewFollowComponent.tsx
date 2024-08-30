import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import DefaultAvatar from '../common/DefaultAvatar';
import ButtonComponent from './ButtonComponent';
import RowComponent from './RowComponent';
import SpaceComponent from './SpaceComponent';
import TextComponent from './TextComponent';
import { NewFollowerData } from '../../data/NewFollowerData';

const NewFollowComponent = () => {
    console.log('================NewFollowComponent====================');
    const data = NewFollowerData;
    const [dataGreaterThan3, setDataGreaterThan3] = useState<any>();
    const [dataSmallerThan3, setDataSmallerThan3] = useState<any>();
    const [seeMore, setSeeMore] = useState(false);
    useEffect(() => {
        if (data && data.length !== 0) {
            const dataTemp = [...data];
            const dataForSmallerThan3 =
                dataTemp.length >= 3 ? dataTemp.splice(0, 3) : dataTemp;
            const dataForGreaterThan3 = dataTemp;
            setDataSmallerThan3(dataForSmallerThan3);
            setDataGreaterThan3(dataForGreaterThan3);
        }
    }, [data]);

    return (
        <View>
            <PrintfNewFollow data={dataSmallerThan3} />
            {seeMore && Boolean(dataGreaterThan3) && (
                <PrintfNewFollow data={dataGreaterThan3} />
            )}
            {!seeMore && (
                <RowComponent justify="center" alignItems="center">
                    <ButtonComponent
                        onPress={() => setSeeMore(!seeMore)}
                        titleChildren={
                            <TextComponent text="Xem thêm" color={Colors.BLACK} />
                        }
                    />
                </RowComponent>
            )}
        </View>
    );
};

const PrintfNewFollow = React.memo((props: { data: any }) => {
    const { data } = props;
    return (
        <FlatList
            data={data}
            extraData={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <NewFollowItemComponent item={item} />}
        />
    );
});

const NewFollowItemComponent = (props: { item: any }) => {
    const [isFollowing, setIsFollowing] = useState(false);
    const { item } = props;
    return (
        <View style={{ marginVertical: 10, backgroundColor: Colors.WHITE }}>
            <RowComponent justify="space-between" alignItems="center">
                <RowComponent justify="space-between">
                    {/* Avatar */}
                    <DefaultAvatar
                        name={item.user.name[0]}
                        size={50}
                        image={item.user.avatar}
                    />
                    <SpaceComponent width={10} />
                    {/* info */}
                    <View>
                        <TextComponent
                            fontWeight="bold"
                            text={item.user.name}
                            color={Colors.BLACK}
                            fontSize={14}
                        />
                        <TextComponent
                            text={'đã bắt đầu follow bạn'}
                            color={Colors.BLACK}
                            fontSize={14}
                        />
                        <TextComponent
                            text={item.createdTime}
                            color={Colors.BLACK}
                            fontSize={14}
                        />
                    </View>
                </RowComponent>
                {/* Button */}
                <ButtonComponent
                    backgroundColor={Colors.PINK_2}
                    paddingHorizontal={10}
                    paddingVertical={5}
                    borderRadius={5}
                    onPress={() => {
                        setIsFollowing(!isFollowing);
                    }}
                    titleChildren={
                        <TextComponent text={isFollowing ? 'Hủy follow' : 'Follow lại'} />
                    }
                />
            </RowComponent>
        </View>
    );
};

export default NewFollowComponent;
