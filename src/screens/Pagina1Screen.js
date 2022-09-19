import React from 'react'
import { Button, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { style } from '../theme/appTheme';

export const Pagina1Screen = (props) => {
    console.log(props)
    return (
        <View style={style.globalMargin}>
            <Text style={style.title}>Pagina 1 Screen</Text>
            <Button
                title='Ir a pagina 2'
                onPress={() => props.navigation.navigate('Pagina2Screen')} //atributo name
            />
            <Button
                title='Ir a Persona'
                onPress={() => props.navigation.navigate('Persona', {
                    id: 1,
                    nombre: "Daniel"
                })}
            />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...style.botonGrande,
                        backgroundColor:'#5856D6'
                    }}
                    onPress={() => props.navigation.navigate('Persona', {
                        id: 1,
                        nombre: "Daniel"
                    })}
                >
                    <Text style={style.botonGrandeText}>Daniel</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...style.botonGrande,
                        backgroundColor:'#FF9427'
                    }}
                    onPress={() => props.navigation.navigate('Persona', {
                        id: 2,
                        nombre: "JakeLine"
                    })}
                >
                    <Text style={style.botonGrandeText}>Jakeline</Text>

                </TouchableOpacity>
            </View>



        </View>
    )
}

