import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, ImageBackground, ActivityIndicator, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import CardComida from './CardComida';
import { color_aleatorio } from '../functions/colores'
import { useMenuStore } from '../store';

export default function OrdenarComida({ route }) {

    const { url_imagen, nombre_producto, precio_producto, id } = route.params

    // const sumarOso = useMenuStore( state => state.sumarOso )
    const actualizar_productos = useMenuStore( state => state.actualizar_productos )
    const lista_de_productos = useMenuStore( state => state.lista_de_productos )

    const [ contador, setCount ] = useState(1);

    function actualizarPedido() {

        var pedido = [
            ...lista_de_productos,
            {
                id: id,
                url_imagen,
                nombre_producto,
                cantidad: contador,
                precio: precio_producto
            }
        ]
        actualizar_productos( pedido )
    }

    const [ precio, setPrecio ] = useState(precio_producto);
    useEffect(() => {
        setPrecio(() => contador * precio_producto );
      }, [ contador ] );

    const backgroundColor = color_aleatorio()

    const sugerencias = [
        {
            imagen: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51yzAvwhp7L.jpg',
            texto: 'Pancakes'
        },
        {
            imagen: 'https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2022/04/wookie-cookies.jpeg?w=1280&ssl=1',
            texto: 'Wookie-cookies'
        },
        {
            imagen: 'https://i.blogs.es/25a681/macarons/450_1000.jpg',
            texto: 'Macarrones'
        },
        {
            imagen: 'https://i0.wp.com/geekstore.hu/wp-content/uploads/2017/12/x_pdg11239_a.jpg?fit=857%2C1000&ssl=1',
            texto: 'Sándwich tostado'
        },
        {
            imagen: 'https://i0.wp.com/shakeadito.com/wp-content/uploads/2021/05/POSTS-STAR-WARS_Artboard-02.png?w=1081&ssl=1',
            texto: 'Estrella de la muerte'
        },
        {
            imagen: 'https://i0.wp.com/shakeadito.com/wp-content/uploads/2021/05/POSTS-STAR-WARS_Artboard-05.png?w=1081&ssl=1',
            texto: 'Han Solo'
        },
        {
            imagen: 'https://images.otstatic.com/prod1/50359437/2/huge.jpg',
            texto: 'Jedi Burger'
        },
        {
            imagen: 'https://i.blogs.es/1ffbf8/caldo-de-huesos-pakus-futurobloguero-dap/450_1000.jpg',
            texto: 'Caldo de hueso'
        },
        {
            imagen: 'https://i.blogs.es/4df68f/bantha-milk-and-cookies/450_1000.jpg',
            texto: 'Leche de Bantha'
        },
        {
            imagen: 'https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2022/04/yoda-soda-exps-hca20-246049-05-28-e-5b.jpeg?w=700&ssl=1',
            texto: 'Yoda soda'
        }
    ]

    const [cargando, setCargando] = useState(true)

  return (
    <View style={ estilos.contenedor }>
    <ImageBackground
        style={{ width:'100%', height:'100%' }}
        source={ require('../assets/fondo2.jpg') }
        onLoadEnd={ () => setCargando( false ) }>

        {/* Cargando */}
        <View style={ estilos.cargando }>
          { cargando && <ActivityIndicator size="large" color="white" /> }
        </View>

        {/* Header
        <View style={ estilos.header }>
            <TouchableOpacity onPress={ back }>
                <AntDesign name="left" size={24} color="white" />
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 22 }}>Detalles</Text>
            <AntDesign name="left" size={24} color="#00000000" />
            Poner 8 digitos en vez de 6, los otros 2 equivalen a transparente
        </View> */}

        {/* Imagen principal */}
        <View style={{ ...estilos.imagen_principal, backgroundColor }}>
            <Image
                style={ estilos.imagen_grande }
                source={{ uri: url_imagen }}
            />
            <TouchableOpacity style={ estilos.corazon }>
                <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity>
        </View>

        {/* Descripción y precio */}
        <View style={ estilos.descripcion_precio }>
            <View style={ estilos.desc }>
                <Text style={ estilos.txt_desc }>{ nombre_producto }</Text>
                <Text 
                style={ estilos.txt_desc }>
                    ${ precio }
                </Text>
            </View>
            <Text style={{ color: 'white' }}>{ contador } pieza</Text>
        </View>   

        {/* Scroll de sugerencias */}
        <View style={ estilos.sugerencias }>
            <ScrollView horizontal>
                { sugerencias.map(( item, indice ) => (
                    <CardComida 
                    key={ indice }
                        texto={ item.texto }
                        imagen={ item.imagen }
                    />
                ))}
            </ScrollView>
        </View>

        {/* Botones finales */}
        <View style={ estilos.botones }>
            <View style={ estilos.agregar }>
                <TouchableOpacity 
                style={ estilos.menos }
                onPress={ () => setCount( contador - 1 ) }
                disabled={ contador === 1 }>
                    <AntDesign name="minus" size={25} color="red" />
                </TouchableOpacity>
                    <Text style={ estilos.cantidad }> 
                        {contador} 
                    </Text>
                <TouchableOpacity 
                style={ estilos.mas }
                onPress={ () => setCount( contador + 1 ) }>
                    <AntDesign name="plus" size={25} color="blue" />
                </TouchableOpacity>
            </View>

            <View style={ estilos.agregar_carrito }>
                <TouchableOpacity
                    onPress={ actualizarPedido }
                >
                    <Text style={ estilos.txt_carrito }>Agregar a carrito</Text>
                </TouchableOpacity>
            </View>
        </View>

    </ImageBackground>
    </View>
  )
}

const estilos=StyleSheet.create({

    contenedor: {
        flex: 1
    },

    header: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    imagen_principal: {
        flex: 5,
        alignItems: 'center',
        margin: 20,
        borderRadius: 30,
        backgroundColor: '#F4FF48'
    },

    descripcion_precio:{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'space-around'
    },

    sugerencias: {
        flex: 2
    },

    botones: {
        flex: 1
    },

    imagen_grande: {
        flex: 1,
        width: 410,
        borderRadius: 30
    },

    corazon: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10
    },

    desc: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    txt_desc: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },

    agregar: {
        flexDirection: 'row',
        padding: 8,
        borderWidth: 1,
        borderColor: '#C6C6C6',
        position: 'absolute',
        borderRadius: 18,
        alignItems: 'center',
        marginLeft: 15,
        top: 5
    },

    cantidad: {
        fontSize: 20,
        paddingHorizontal: 40,
        color: 'white'
    },

    menos: {
        backgroundColor: '#FFD1D1',
        borderRadius: 100
    },

    mas: {
        backgroundColor: '#D1D1FF',
        borderRadius: 100
    },

    agregar_carrito: {
        flexDirection: 'row',
        position: 'absolute',
        borderRadius: 38,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        backgroundColor: 'black',
        right: 15,
        top: 0,
        paddingVertical: 20,
        justifyContent: 'center'
    },

    txt_carrito: {
        fontSize: 16,
        paddingHorizontal: 60,
        fontWeight: 'bold',
        color: 'yellow'
    },

    cargando: {
        justifyContent: 'center'
    }

})