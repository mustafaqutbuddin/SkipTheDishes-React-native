import React from 'react'
import { StatusBar, View } from 'react-native'
import MainNavigator from './src/navigation/MainNavigator'
import DropdownAlert from 'react-native-dropdownalert'
import { COLOR, RATIO } from './src/styles'
import { AlertHelper } from './src/utils/AlertHelper'




const App = () => {
  return (
    <MainNavigator />
  )
}

export default () => {
  return (
    <>
      <App />
      <DropdownAlert
        defaultContainer={{ padding: 8, paddingTop: StatusBar.currentHeight, flexDirection: 'row' }}
        ref={ref => AlertHelper.setDropDown(ref)}
        onClose={() => AlertHelper.invokeOnClose()}
        titleStyle={{ fontWeight: 'bold', color: COLOR.WHITE, fontSize: RATIO.scaleFont(2) }}
        messageStyle={{ fontWeight: 'bold', color: COLOR.WHITE, fontSize: RATIO.scaleFont(1.8) }}
      />
    </>

  )
}