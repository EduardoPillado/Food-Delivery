import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { color_aleatorio } from '../functions/colores'

export default function ProductoIndividual({ nombre_producto, url_imagen, precio_producto, id }) {

    const navigation = useNavigation()
    const backgroundColor = color_aleatorio()

    function cambiar_pantalla() {
        navigation.navigate( 'OrdenarComida', { url_imagen, nombre_producto, precio_producto, id } )
    }

  return (
    <TouchableOpacity style={ estilos.contenedor } onPress={ cambiar_pantalla }>
        <View style={{
                ...estilos.view_imagen,
                backgroundColor
            }}>
            <Image
                style={ estilos.imagen }
                source={{ uri: url_imagen }}
            />
        </View>
        <View style={ estilos.view_txt }>
            <Text style={ estilos.txt }>
                { nombre_producto }
            </Text>
            <Text style={ estilos.txt_precio }>
                { precio_producto }
            </Text>
        </View>
    </TouchableOpacity>
  )
}

const estilos = StyleSheet.create({

    contenedor: {
        marginBottom: 20,
        maxWidth: 170,
        paddingTop: 20
    },

    view_imagen: {
        width: 170,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },

    imagen: {
        width: 90,
        height: 90,
        borderRadius: 30
    },

    txt_precio: {
        fontWeight: 'bold',
        color: 'gold'
    },

    view_txt: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    txt: {
        color: 'white'
    }

})