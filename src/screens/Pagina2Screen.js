import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import { style } from '../theme/appTheme';

export const Pagina2Screen = () => {
    const navigator = useNavigation() //hook de react alternativo a props
    
    useEffect(() => {
        navigator.setOptions({
            title : 'Mi Pagina 2',
            headerBackTitle : 'atras' //no se muestra en android :(
        })
    }, [])
    
  return (
    <View style={style.globalMargin}>
        <Text style={style.title}>Pagina 2 Screen</Text>
        <Button
            title='Ir pagina 3'
            onPress={() => navigator.navigate('Pagina3Screen')}
        />
    </View>
  )
}
