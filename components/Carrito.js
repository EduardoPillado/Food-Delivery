import React, { useState } from 'react'
import { Text, ImageBackground, Image, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native'
import { useMenuStore } from '../store'
import { AntDesign } from '@expo/vector-icons';

export default function Carrito({ navigation }) {

    const osos = useMenuStore( state => state.osos )
    const lista_de_productos = useMenuStore( state => state.lista_de_productos )
    const actualizar_productos = useMenuStore( state => state.actualizar_productos )
    const [lista, setLista] = useState( lista_de_productos )

    function sumar( id ) {

        var lista_nueva = lista
        var indice = lista_nueva.findIndex( item => item.id === id )
        lista_nueva[ indice ].cantidad = lista_nueva[ indice ].cantidad + 1

        let a = [
            ...lista_nueva
        ]

        actualizar_productos( a )
        setLista( a )

    }

    function restar( id ) {

        var lista_nueva = lista
        var indice = lista_nueva.findIndex( item => item.id === id )
        lista_nueva[ indice ].cantidad = lista_nueva[ indice ].cantidad - 1

        if (lista_nueva[ indice ].cantidad === 0) {
            lista_nueva.splice( indice, 1 )
        }

        var a = [
            ...lista_nueva
        ]

        actualizar_productos( a )
        setLista( a )

    }

    function ListaVacia() {
        if ( lista.length === 0 ) {
            return <Text style={ estilos.texto }>Carrito vacío</Text>
        }
    }

    function Continuar_OnOff() {
        if ( lista.length !== 0 ) {
            return <TouchableOpacity
                activeOpacity={ .6 }
                style={ estilos.btn }
                onPress={ ir_a_mesas }
            >
                <Text style={ estilos.btn_text }>Continuar</Text>
                <AntDesign name="arrowright" size={34} color="yellow" />
            </TouchableOpacity>
        } else if ( lista.length === 0 ) {
            return <Text>&nbsp</Text>
        }
    }

    function ir_a_mesas() {
        navigation.navigate('mesa')
    }

    return (
        <ImageBackground
            style={{ width:'100%', height:'100%' }}
            source={ require('../assets/fondo2.jpg') }
        >

            <ListaVacia/>

            <ScrollView>
                { lista.map(( item, index ) => (
                    <View key={ index } style={ estilos.contenedor_lista }>

                        <Image source={{ uri: item.url_imagen }} style={ estilos.img }/>

                        <View style={{ flex: 1 }}>
                            <Text style={ estilos.txt }>{ item.nombre_producto }</Text>
                            <View>
                                <Text style={ estilos.txt }>Precio: ${ item.precio }</Text>
                                <Text style={ estilos.txt }>Total: ${ item.precio * item.cantidad }</Text>
                            </View>
                        </View>

                        <View style={ estilos.botones }>
                            <TouchableOpacity onPress={ ()=> sumar( item.id ) }>
                                <AntDesign name='plus' size={30} color='white' />
                            </TouchableOpacity>

                            <Text style={ estilos.cantidad }>{ item.cantidad }</Text>

                            <TouchableOpacity onPress={ ()=> restar( item.id ) }>
                                <AntDesign name='minus' size={30} color='white' />
                            </TouchableOpacity>
                        </View>
                    </View>
                )) }
            </ScrollView>

            <Continuar_OnOff/>
            
        </ImageBackground>
    )
}

const estilos = StyleSheet.create({

    img: {
        width: 100,
        height: 100,
        marginRight: 20
    },

    contenedor_lista: {
        flexDirection: 'row',
        padding: 20
    },

    botones: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 90,
        justifyContent: 'space-between'
    },

    cantidad: {
        fontSize: 22,
        marginHorizontal: 10,
        color: 'white'
    },

    txt: {
        color: 'white'
    },

    texto: {
        marginTop: 100,
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'red',
        width: 300,
        height: 52,
        alignSelf: 'center',
        borderRadius: 30
    },

    txt_total: {
        fontSize: 18,
        marginHorizontal: 10,
        color: 'white',
        textAlign: 'center'
    },

    btn: {
        backgroundColor: 'black',
        margin: 20,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10
    },

    btn_text: {
        fontSize: 20,
        color: 'yellow',
        fontWeight: 'bold',
        marginRight: 20
    }

})