import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign, EvilIcons, Ionicons, Fontisto } from '@expo/vector-icons';

const Iconos = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <AntDesign name="team" size={50} color="blue" />
      <EvilIcons name="search" size={50} color="purple" />
      <Ionicons name="home-outline" size={50} color="green" />
      <Fontisto name="favorite" size={50} color="yellow" />

      {/* Boton */}
      <TouchableOpacity style={ estilos.boton } activeOpacity={0.6}>
        <AntDesign name="forward" size={50} color="red" />
        <Text style={ estilos.text_boton }>
          Ver ahora
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Iconos

const estilos = StyleSheet.create({

  boton: {
    width: 250,
    marginTop: 50,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange'
  },

  text_boton: {
    fontSize: 25,
    left: 10
  }

})