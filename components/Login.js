import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function Login({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const datos = () => {
        if ( username !== '' && password !='' )
        {
            navigation.navigate( 'Perfil', { username } )
        }

        if (username.trim() === '' || password.trim() === '')
        {
            alert('Por favor ingrese sus datos padawan')
            return;
        }
    }

    const back = () => {
        navigation.navigate( 'Apps' )
    }

  return (
    <ImageBackground
    style={{ width:'100%', height:'100%' }}
    source={ require('../assets/fondo2.jpg') }>

        <View style={ estilos.contenedor }>
            <Text style={ estilos.bienvenida }>Bienvenido</Text>

            <TextInput
                style={ estilos.inputUser }
                onChangeText={ setUsername }
                value={ username }
                placeholder="Ingresa tu usuario"
                placeholderTextColor='blue'
            />
            <TextInput
                style={ estilos.inputPass }
                onChangeText={ setPassword }
                value={ password }
                secureTextEntry
                placeholder="Ingresa tu contraseña"
                placeholderTextColor='#1FB600'
            />

            <TouchableOpacity
                style={estilos.boton}
                onPress={ datos }
                >
                    <Text style={estilos.txt_boton}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={estilos.boton}
                onPress={ back }
                >
                    <Text style={estilos.txt_boton}>Regresar</Text>
            </TouchableOpacity>
        </View>

    </ImageBackground>
  )
}

const estilos=StyleSheet.create({

    contenedor: {
        top: 220
    },

    bienvenida: {
        fontSize: 35,
        alignSelf: 'center',
        color: 'white'
    },

    boton: {
        backgroundColor: 'black',
        padding: 16,
        marginTop: 20,
        borderRadius: 20,
        alignSelf: 'center'
    },

    txt_boton: {
        color: 'yellow',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    inputUser: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        borderColor: 'blue',
        backgroundColor: 'black',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        marginVertical: 20
    },

    inputPass: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        borderColor: '#1FB600',
        backgroundColor: 'black',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        marginVertical: 20
    }

})