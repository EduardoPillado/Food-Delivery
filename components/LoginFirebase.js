import React, { useState } from 'react'
import { Alert, ImageBackground, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native'
// Funciones de Firebase
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// Importación de la API KEY
import { firebaseConfig } from './firebase-config';

export default function LoginFirebase({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const app = initializeApp( firebaseConfig );
    const auth = getAuth( app );

    const cambiar_pantalla = () => {

        signInWithEmailAndPassword( auth, username, password )
        .then(() => {
            alert( 'Inicio de sesión con éxito' )
            navigation.navigate( 'Perfil', { username } );
        })
        .catch((error) => {
            const errorCode = error.code;

            if ( errorCode == 'auth/invalid-email' ) {
                Alert.alert( 'Datos incorrectos', 'Verifica tus credenciales.' )
            } else if ( errorCode == 'auth/wrong-password') {
                alert( 'Contraseña incorrecta' )
            }
        })

    }

    const back = () => {
        navigation.navigate( 'Inicio' )
    }

    return (
        <ImageBackground
        style={{ width:'100%', height:'100%' }}
        source={ require('../assets/fondo2.jpg') }>
    
            <View style={ estilos.contenedor }>
                <Text style={ estilos.bienvenida }>Bienvenido</Text>
    
                <TextInput
                    style={ estilos.inputUser }
                    onChangeText={ (text)=>setUsername(text) }
                    value={ username }
                    placeholder="Ingresa tu usuario"
                    placeholderTextColor='blue'
                />
                <TextInput
                    style={ estilos.inputPass }
                    onChangeText={ (text)=>setPassword(text) }
                    value={ password }
                    secureTextEntry
                    placeholder="Ingresa tu contraseña"
                    placeholderTextColor='#1FB600'
                />
    
                <TouchableOpacity
                    style={estilos.boton}
                    onPress={ cambiar_pantalla }
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