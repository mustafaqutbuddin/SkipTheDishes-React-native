import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native'
import Input from '../components/Input'
import RestaurantList from '../components/RestaurantList'
import { RATIO } from '../styles'
import * as STRINGS from '../constants/Strings'
import useRestaurant from '../hooks/useRestaurant'



const HomeScreen = () => {
    //state variables
    const [postCode, setPostCode] = useState(undefined)
    const [loading, restaurants, handleOnSearch] = useRestaurant(postCode)

    return (

        <SafeAreaView style={styles.appContainer}>

            <Input
                containerStyle={styles.inputStyle}
                placeHolder={STRINGS.POSTAL_CODE_PLACEHOLDER}
                onChangeText={(text) => setPostCode(text)}
                onSubmit={handleOnSearch}
                value={postCode}
            />

            {loading
                ?
                <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}
                    size='large'
                    animating={loading}
                />
                :
                <RestaurantList data={restaurants} />
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        marginHorizontal: RATIO.WIDTH_PERCENTAGE(4)
    },

    inputStyle: {
        margin: RATIO.HEIGHT_PERCENTAGE(2),
    }
})

export default HomeScreen