import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import RowComponent from './RowComponent'
import SessionComponent from './SessionComponent'
import TextComponent from './TextComponent'
import { Colors } from '../../constants/Colors'
import SpaceComponent from './SpaceComponent'
import SoldAndStarComponent from './SoldAndStarComponent'
import { SCREEN_WIDTH } from '../../constants/Variables'
import { getFormatVietNamCurrency } from '../../utils/FormatCurrency'

interface Props {
    item: any
}

const BestChoiceItemComponent = (props: Props) => {
    const { item } = props;
    return (
        <TouchableOpacity onPress={() => { }}>
            <SessionComponent>
                <View>
                    <RowComponent justify='flex-start'>
                        {/* Left */}
                        <Image
                            style={styles.image}
                            source={{ uri: item.image }}
                        />
                        <SpaceComponent width={10} />
                        {/* Right */}
                        <View style={styles.wrapperRight}>
                            {/* Name */}
                            <Text
                                style={styles.name}
                                numberOfLines={2}
                                ellipsizeMode="tail"
                            >
                                {
                                    item.name
                                }
                            </Text>
                            {/* FreeShip */}
                            <View style={styles.freeShip}>
                                <RowComponent justify='flex-start' alignItems='center'>
                                    <Image
                                        style={{ width: 20, height: 20 }}
                                        source={require('../../assets/images/truck.png')}
                                    />
                                    <SpaceComponent width={10} />
                                    <TextComponent width={'auto'} text='Free shipping' color={Colors.BLUE_PALE} />
                                </RowComponent>
                            </View>
                            <SoldAndStarComponent soldQty={item.soldQty} starQty={item.starQty} />
                            <RowComponent justify='flex-start' alignItems='center'>
                                <TextComponent text={`${getFormatVietNamCurrency(item.price)}đ`} color={Colors.BLACK} fontSize={18} fontWeight='bold' />
                                <SpaceComponent width={5} />
                                <TextComponent textDecoration={true} text={`${getFormatVietNamCurrency(item.price)}đ`} color={Colors.GREY} />
                            </RowComponent>
                        </View>
                    </RowComponent>
                </View>
            </SessionComponent>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 130,
        height: 130,
        borderRadius: 10
    },
    wrapperRight: {
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 18,
        color: Colors.BLACK,
        maxWidth: SCREEN_WIDTH * 0.7
    },
    freeShip: {
        backgroundColor: 'rgb(237 252 250)',
        paddingVertical: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        width: 140
    }
})
export default BestChoiceItemComponent