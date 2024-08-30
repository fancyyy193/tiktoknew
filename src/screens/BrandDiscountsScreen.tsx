import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { Image } from 'react-native'
import SessionComponent from '../components/ingredient/SessionComponent'
import VoucherComponent from '../components/ingredient/VoucherComponent'
import TextComponent from '../components/ingredient/TextComponent'
import { SCREEN_HEIGHT } from '@gorhom/bottom-sheet'
import TopSelectComponent from '../components/ingredient/TopSelectComponent'
import CategoriesBrandDiscountComponent from '../components/ingredient/CategoriesBrandDiscountComponent'

const BrandDiscountsScreen = () => {
    return (
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/* Avatar  */}
                <ImageBackground
                    source={require('./../assets/images/TikTokShopBanner.jpg')}
                    style={{ width: '100%', height: SCREEN_HEIGHT * 0.4, zIndex: -99 }}
                />
                <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
                    {/* Banner top select */}
                    <SessionComponent>
                        <TopSelectComponent />
                    </SessionComponent>
                </View>
                {/* Categories */}
                <View style={styles.wrapperCategories}>
                    <CategoriesBrandDiscountComponent />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperCategories: {
        width: '100%',
        height: SCREEN_HEIGHT
    }
})
export default BrandDiscountsScreen
