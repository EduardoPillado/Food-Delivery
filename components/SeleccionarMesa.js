
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';
import { useMenuStore } from '../store';
import { fecha_actual } from '../functions/fecha';


export default function SeleccionarMesa() {

    const lista_de_productos = useMenuStore( state => state.lista_de_productos )
    const [mesa, setMesa] = useState("Número 1")

    const app = initializeApp( firebaseConfig )
    const db = getFirestore( app )
    const citiesCollectionRef = collection(db, 'pedidos');


    function guardar_pedido() {

        var lista_final = lista_de_productos.map( item => {
            return {
                id: item.id,
                cantidad: item.cantidad,
            }
        })
        let fecha = fecha_actual()

        addDoc(citiesCollectionRef, {
            productos: lista_final,
            mesa,
            estado: 'pendiente',
            fecha
        })
        .then( () => {
            Alert.alert( 'Aviso', 'Tu pedido será enviado a su mesa' )
        } )


        /*
        // Obtener una referencia al documento de Firestore
        const docRef = db.collection('mesas').doc('mesa1');

        // Actualizar el campo "productos" con un array de objetos
        docRef.update({
            productos: [
                { id: 'id_producto_1', cantidad: 2 },
                { id: 'id_producto_2', cantidad: 1 },
                { id: 'id_producto_3', cantidad: 3 }
            ]
        });*/

    }




    return (
        <ImageBackground
            style={{ width:'100%', height:'100%' }}
            source={ require('../assets/fondo2.jpg') }
        >
            <View style={ estilos.contenedor }>
                
                <View>
                    <Text style={ estilos.texto }>Selecciona tu mesa</Text>

                    <View
                        style={ estilos.picker }
                    >
                        <Picker
                            selectedValue={ mesa }
                            onValueChange={ itemValue => setMesa(itemValue) }
                        >
                            { [...Array(80).keys()].map( item => {
                                
                                let num = item +1
                                return  (
                                <Picker.Item
                                    key={ num }
                                    label={ 'Número '+num }
                                    value={ 'Número '+num }
                                    style={ estilos.picker_in }
                                />
                            )}) }
                        </Picker>
                    </View>
                </View>

                <TouchableOpacity
                    activeOpacity={ .6 }
                    style={ estilos.btn }
                    onPress={ guardar_pedido }
                >
                    <Text style={ estilos.btn_text }>Ordenar</Text>
                    <AntDesign name="shoppingcart" size={34} color="yellow" />
                </TouchableOpacity>

            </View>
        </ImageBackground>
    )
}

const estilos = StyleSheet.create({

    contenedor: {
        flex: 1,
        justifyContent: 'space-around'
    },

    texto: {
        marginTop: 50,
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
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
    },

    picker: {
        borderWidth: 1,
        borderColor: 'gray',
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: 'black'
    },

    picker_in: {
        color: 'white',
        backgroundColor: 'black'
    }

})
