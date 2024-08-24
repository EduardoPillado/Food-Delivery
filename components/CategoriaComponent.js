import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function CategoriaComponent({ titulo, url_imagen, id_categoria }) {

  const navigation = useNavigation();

  var colores = [
    '#8289FF',
    '#82C8FF',
    '#8AFF82',
    '#FF8282',
    '#BB82FF',
    '#FFFFFF'
  ]

  var elegido = colores[ Math.floor( Math.random() * colores.length ) ]

  function cambiar_pantalla( id ){
    navigation.navigate( 'menu_productos', { id } )
  }

  return (
    <View>
          <TouchableOpacity
            activeOpacity={ .6 }
            style={{
              ...estilos.contenedor,
              backgroundColor:elegido
            }}
            onPress={ () => cambiar_pantalla( id_categoria ) }>
              <Text style={ estilos.txt_titulo }>{ titulo }</Text>

              <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: url_imagen }}
              /> 
          </TouchableOpacity>

          <View style={ estilos.borde } />
    </View>
  )
}

const estilos = StyleSheet.create({

  contenedor: {
    height: 100,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15
  },

  borde: {
    borderTopWidth: 1,
    width: 50,
    alignSelf: 'center',
    borderColor: 'gray'
  },

  txt_titulo: {
    fontSize: 20
  }

})