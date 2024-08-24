import React from 'react'
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

export default function CardComida({ imagen, texto }) {
  return (
    <TouchableOpacity style={ estilos.contenedor }>
        <Image
            style={ estilos.imagen_sugerencia }
            source={{ uri: imagen }}
        />
        <Text style={ estilos.texto }>|{ texto }|</Text>
    </TouchableOpacity>
  )
}

const estilos=StyleSheet.create({

    imagen_sugerencia: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },

    contenedor: {
        justifyContent: 'center'
    },

    texto: {
        textAlign: 'center',
        paddingTop: 10,
        color: 'white'
    }

})
