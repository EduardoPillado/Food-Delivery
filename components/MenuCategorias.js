import React, { useEffect, useState } from 'react'
import { View, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import CategoriaComponent from './CategoriaComponent'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { collection, getFirestore, getDocs } from "firebase/firestore/lite";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config'

export default function MenuCategorias({ navigation }) {

  const ir_a_carrito = () => {
    navigation.navigate( 'carrito' )
  }

  const [categorias, setCategorias] = useState([])
  const app = initializeApp( firebaseConfig )
  const db = getFirestore( app )

  useEffect(() => {

    let c = collection( db, 'categorias_menu' )

    getDocs( c )
    .then( datos => {

      var arreglo_de_categorias = []

      datos.forEach((doc) => {

        arreglo_de_categorias.push({
          id: doc.id,
          ...doc.data()
        })
      });
      console.log( arreglo_de_categorias );
      setCategorias( arreglo_de_categorias )
      setCargando( false )

    })

  }, [])

  const [cargando, setCargando] = useState(true)

  return (
    <View style={ estilos.contenedor }>
        <ImageBackground
        style={{ width:'100%', height:'100%' }}
        source={ require('../assets/fondo2.jpg') }
        >

          {/* Cargando */}
          <View style={ estilos.cargando }>
            { cargando && <ActivityIndicator size="large" color="white" /> }
          </View>
          
          <StatusBar/>

          {/* Scroll de categorias */}
          <View style={ estilos.view_categorias }>
            <ScrollView>
              { categorias.map( ( item, index ) => (
                <CategoriaComponent
                  key={ index }
                  id_categoria={ item.id }
                  titulo={ item.nombre_categoria }
                  url_imagen={ item.url_imagen ?? 'https://static.wikia.nocookie.net/esstarwars/images/e/e9/BlueYodaCookies.png/revision/latest?cb=20201207013045' }
                />
              ) ) }
            </ScrollView>
          </View>

          {/* Menu de abajo */}
          <View style={ estilos.view_menu_abajo }>
              
                <TouchableOpacity style={ estilos.btn_opciones }>
                  <MaterialIcons name='menu-book' size={24} color='black' />
                  <Text>Categorías</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ estilos.btn_opciones }>
                  <AntDesign name='search1' size={24} color='black' />
                  <Text>Buscador</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={ estilos.btn_opciones }
                  onPress={ ir_a_carrito }
                  >
                  <AntDesign name='user' size={24} color='black' />
                  <Text>Mi pedido</Text>
                </TouchableOpacity>

          </View>

        </ImageBackground>
    </View>
  )
}

const estilos = StyleSheet.create({

  contenedor: {
    flex: 1
  },

  view_categorias:{
    flex: 11
  },

  view_menu_abajo: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    justifyContent: 'space-around'
  },

  btn_opciones: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cargando: {
    justifyContent: 'center'
  }

})