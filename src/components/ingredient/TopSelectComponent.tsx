import { SCREEN_HEIGHT } from '@gorhom/bottom-sheet'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Colors } from '../../constants/Colors'
import { TopSelectedData } from '../../data/CommonData'
import SessionComponent from './SessionComponent'
import SpaceComponent from './SpaceComponent'
import TextComponent from './TextComponent'
import TopSelectedItemComponent from './TopSelectedItemComponent'

const TopSelectComponent = () => {

    return (
        <View style={styles.container}>
            {/* Title */}
            <SpaceComponent height={16} />
            <SessionComponent padding={0} paddingHorizontal={15}>
                <TextComponent text='Top Selected' color={Colors.BLACK} fontSize={18} fontWeight='bold' />
            </SessionComponent>
            <SpaceComponent height={16} />
            {/* Categories */}
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={TopSelectedData}
                extraData={TopSelectedData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <TopSelectedItemComponent index={index} item={item} />
                )}
            />
            <SpaceComponent height={16} />
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        width: '100%',
        borderRadius: 5
    }
})
export default TopSelectComponent