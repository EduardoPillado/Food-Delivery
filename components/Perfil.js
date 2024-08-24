import React from 'react'
import { Text, StyleSheet, Image, ImageBackground } from 'react-native';

export default function Perfil({ route }) {

  const { username } = route.params;

  

  return (
    <ImageBackground
    style={{ width:'100%', height:'100%' }}
    source={ require('../assets/fondo2.jpg') }>

        <Text style={ estilos.txt }>
          Bienvenido tu eres { username }, que la fuerza te acompañe
        </Text>

        <Image
        style={ estilos.imagen }
        source={require('../assets/Yoda.jpg')}
        ></Image>

    </ImageBackground>
  )
}

const estilos=StyleSheet.create({

    txt: {
      fontSize: 25,
      position: 'absolute',
      alignSelf: 'center',
      top: 30,
      textAlign: 'center',
      color: 'white'
    },

    imagen: {
      width: 400,
      height: 600,
      alignSelf: 'center',
      top: 150
    }

})