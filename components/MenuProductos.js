import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView, ImageBackground, ActivityIndicator } from 'react-native'
import { collection, getFirestore, getDocs } from 'firebase/firestore/lite'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase-config'
import ProductoIndividual from './ProductoIndividual'

export default function MenuProductos({ route }) {

  //recibimos el id
  const { id } = route.params
  const [productos, setProductos] = useState([])
  const app = initializeApp( firebaseConfig )
  const db = getFirestore( app )

  useEffect(() => {

    let c = collection( db, 'categorias_menu', id, 'productos' )

    getDocs( c )
    .then( datos => {

      var arreglo_de_productos = []

      datos.forEach((doc) => {

        arreglo_de_productos.push({
          id: doc.id,
          ...doc.data()
        })
        arreglo_de_productos.push({
          id: doc.id,
          ...doc.data()
        })
        arreglo_de_productos.push({
          id: doc.id,
          ...doc.data()
        })
        arreglo_de_productos.push({
          id: doc.id,
          ...doc.data()
        })
        arreglo_de_productos.push({
          id: doc.id,
          ...doc.data()
        })
        arreglo_de_productos.push({
          id: doc.id,
          ...doc.data()
        })
        arreglo_de_productos.push({
          id: doc.id,
          ...doc.data()
        })
      }),
      console.log( arreglo_de_productos );
      setProductos( arreglo_de_productos )
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

        <ScrollView contentContainerStyle={ estilos.scroll }>
          { productos.map( ( item, index ) => (
            <ProductoIndividual
              key={ index }
              id={ item.id }
              url_imagen={ item.url_imagen }
              nombre_producto={ item.nombre }
              precio_producto={ item.precio }
            />
          ))}
        </ScrollView>

      </ImageBackground>
    </View>
  )
}

const estilos = StyleSheet.create({

  contenedor: {
    flex: 1
  },

  scroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    color: 'white'
  },

  cargando: {
    justifyContent: 'center'
  }
  
})