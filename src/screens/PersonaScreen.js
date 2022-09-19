import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { style } from '../theme/appTheme'

export const PersonaScreen = (props) => {

  const params = props.route.params
  const navigation = props.navigation
  
  useEffect(() => {
    navigation.setOptions({
        title: params.nombre
    })
  }, [])
  

  return (
    <View style = {style.globalMargin}>
        <Text style = {style.title}> Persona</Text>
        <Text>
           {JSON.stringify(params)} 
        </Text>
    </View>
  )
}
