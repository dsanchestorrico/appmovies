import React from 'react'
import { Button, Text, View } from 'react-native';
import { style } from '../theme/appTheme';

export const Pagina3Screen = (props) => {
  return (
    <View>
        <Text style={style.title}>Pagina 3 Screen</Text>
        <Button
            title='Regresar'
            onPress={() => props.navigation.pop() }    
        />
        <Button
            title='Ir a la pagina 1'
            onPress={() => props.navigation.popToTop() }    
        />
    </View>
  )
}
