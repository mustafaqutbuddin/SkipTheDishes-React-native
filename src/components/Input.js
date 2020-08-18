import React from 'react'
import { View, StyleSheet, TextInput, Platform } from 'react-native'
import { RATIO, COLOR } from '../styles'

const Input = ({ placeHolder, onChangeText, value, secureTextEntry, multiline, containerStyle, inputStyle, editable, onContentSizeChange, onFocus, keyboardType, onSubmit }) => {
    return (
        <View style={{ ...styles.inputContainer, ...containerStyle }}>
            <TextInput style={{ ...styles.input, ...inputStyle }}
                placeholder={placeHolder}
                autoCorrect={false}
                autoCapitalize='none'
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={false || secureTextEntry}
                multiline={false || multiline}
                editable={editable != null ? false : true}
                onContentSizeChange={onContentSizeChange}
                onFocus={onFocus}
                keyboardType={keyboardType}
                placeholderTextColor={'rgba(255,255,255, 0.6)'}
                onSubmitEditing={onSubmit}
            />
        </View>

    )
}

const styles = StyleSheet.create({

    inputContainer: {
        backgroundColor: COLOR.TANGERINE,
        width: RATIO.BUTTON_TEXTFIELD_WIDTH,
        height: RATIO.BUTTON_TEXTFIELD_HEIGHT,
        borderRadius: RATIO.BORDER_RADIUS,
        justifyContent: 'center',
    },

    input: {
        paddingHorizontal: RATIO.WIDTH_PERCENTAGE(4),
        width: '100%',
        height: '100%',
        fontSize: RATIO.scaleFont(1.8),
        color: COLOR.WHITE,
        padding: 0,
    },
})


export default Input