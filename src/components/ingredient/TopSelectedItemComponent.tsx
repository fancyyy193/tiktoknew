import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import SessionComponent from './SessionComponent'
import TextComponent from './TextComponent';
import SpaceComponent from './SpaceComponent';
import { getFormatVietNamCurrency } from '../../utils/FormatCurrency';
import RowComponent from './RowComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../../constants/Colors';
import { SCREEN_HEIGHT } from '../../constants/Variables';

interface Props {
    item: any;
    index: number;
}

const TopSelectedItemComponent = (props: Props) => {
    const { index, item } = props;
    return (
        <TouchableOpacity>
            <SessionComponent padding={0} paddingHorizontal={5}>
                <View
                    style={{
                        // Title padding 15 but image padding horizontal 5 so need 10
                        paddingLeft: index === 0 ? 10 : 0
                    }}
                >
                    <View>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.image}
                        />
                        {/* SaleOff percent */}
                        <View
                            style={styles.saleOffBannerWrapper}
                        >
                            <RowComponent justify={'center'} alignItems="center">
                                <MaterialCommunityIcons
                                    name="transfer-down"
                                    size={15}
                                    color={Colors.WHITE}
                                />
                                <TextComponent text={item.saleOffPercent + '%'} fontSize={14} />
                            </RowComponent>
                        </View>
                    </View>
                    <SpaceComponent height={5} />
                    {/* Price of product had sale */}
                    <TextComponent fontSize={18} text={getFormatVietNamCurrency(item.price) + ''} fontWeight='bold' color={Colors.BLACK} />
                    {/* price initial  */}
                    <TextComponent fontSize={13} textDecoration={true} text={getFormatVietNamCurrency(item.price) + 'đ'} color={Colors.GREY} />
                </View>
            </SessionComponent>
        </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        width: '100%',
        borderRadius: 5
    },
    image: {
        width: 120, height: Math.round((SCREEN_HEIGHT * 0.3) * 0.6)
    },
    saleOffBannerWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: Colors.PINK,
        borderTopRightRadius: 3,
        width: 100 / 2,
        justifyContent: 'center',
    }
})
export default TopSelectedItemComponent