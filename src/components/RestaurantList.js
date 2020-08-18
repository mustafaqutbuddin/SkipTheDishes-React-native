import React from 'react'
import { Text, StyleSheet, FlatList, View, Image } from 'react-native'
import { RATIO, COLOR } from '../styles'
import { Rating } from 'react-native-elements'
import { NO_DATA_PLACEHOLDER } from '../constants/Strings'


const RestaurantList = ({ data }) => {

    const emptyList = () => {
        return (
            <View style={styles.emptyList}>
                <Text>{NO_DATA_PLACEHOLDER}</Text>
            </View>
        )
    }

    const cuisineHeader = () => {
        return (
            <Text style={styles.cuisineHeader}>CuisineTypes: </Text>
        )
    }
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            ListEmptyComponent={emptyList}
            keyExtractor={(data, index) => index.toString()}
            contentContainerStyle={{ flexGrow: 1 }}
            renderItem={({ item }) => {
                return (
                    <View style={styles.itemContainer}>
                        <View style={{ flex: 0.65 }}>
                            <Image style={styles.image}
                                source={{ uri: item.LogoUrl }}
                                resizeMode='stretch'
                            />
                        </View>

                        <View style={{ flex: 0.35, justifyContent: 'center', marginHorizontal: RATIO.HEIGHT_PERCENTAGE(1) }}>
                            <Text style={styles.headerStyle}>{item.Name}</Text>

                            <View>
                                <FlatList style={{ marginVertical: RATIO.WIDTH_PERCENTAGE(2) }}
                                    scrollEnabled={false}
                                    horizontal
                                    ListHeaderComponent={cuisineHeader}
                                    data={item.CuisineTypes}
                                    keyExtractor={(data, index) => index.toString()}
                                    renderItem={({ item }) => {
                                        return (
                                            <Text style={styles.cuisines}>{item.Name}</Text>
                                        )
                                    }}
                                />
                            </View>
                            <View style={{ alignSelf: 'flex-end' }}>
                                <Rating imageSize={20}
                                    readonly
                                    startingValue={item.Rating.StarRating}
                                />
                            </View>
                        </View>
                    </View>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        marginHorizontal: RATIO.WIDTH_PERCENTAGE(2),
        height: RATIO.HEIGHT_PERCENTAGE(36),
        marginBottom: RATIO.HEIGHT_PERCENTAGE(2),
        backgroundColor: COLOR.WHITE,
        borderRadius: 10
    },

    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    headerStyle: {
        fontSize: RATIO.scaleFont(1.7),
        fontWeight: 'bold'
    },

    addressStyle: {
        fontSize: RATIO.scaleFont(1.5),
        fontWeight: 'normal'
    },

    emptyList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cuisineHeader: {
        fontSize: RATIO.scaleFont(1.5),
        fontWeight: 'bold'

    },

    cuisines: {
        paddingLeft: RATIO.WIDTH_PERCENTAGE(2),
        fontSize: RATIO.scaleFont(1.5),
    }
})

export default RestaurantList
