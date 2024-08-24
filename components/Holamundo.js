//ctrl + space para ver botones, etiquetas, componentes, etc.

import { StyleSheet, Text, View } from 'react-native'

export default function App() {


  return (
        <View style={ estilos.contenedor }>
          <Text style={ estilos.titulo }>Hola caballero</Text>
          <Text style={ estilos.texto }>Espero este teniendo un buen día</Text>
        </View>
  )
}

const estilos = StyleSheet.create({
    contenedor: {
      backgroundColor: 'black',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    titulo: {
      fontSize: 40,
      color: 'white'
    },
    texto: {
      fontSize: 20,
      color: 'skyblue'
    }
})
