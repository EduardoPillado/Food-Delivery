import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

export default function Inicio({ navigation }) {

    function ver_menu() {
        navigation.navigate( 'MenuCategorias' )
    }

    function ver_login() {
        navigation.navigate( 'LoginFirebase' )
    }

  return (
    <View style={ estilos.contenedor }>
        <ImageBackground
        style={{ width:'100%', height:'100%' }}
        source={ require('../assets/fondo2.jpg') }>
            <View style={ estilos.view_logo }>
                <Image
                    source={ require('../assets/Grogu.jpg') }
                    style={ estilos.logo }
                />
            </View>

            <View style={ estilos.view_botones }>
                
                <Text style={ estilos.titulo }>Grogu's Kitchen</Text>
                <Text style={ estilos.subtitulo }>Patù</Text>

                {/* botón para iniciar sesión */}
                <TouchableOpacity
                    onPress={ ver_login }
                    activeOpacity={ .6 }
                    style={ [ estilos.btn_general, estilos.btn_iniciar_sesion ] }>
                        <FontAwesome5 name="mandalorian" size={26} color="black" />
                        <Text style={ estilos.btn_txt }>
                            &nbsp;Iniciar Sesión
                        </Text>
                </TouchableOpacity>

                {/* botón para menú */}
                <TouchableOpacity
                    onPress={ ver_menu }
                    activeOpacity={ .6 }
                    style={ [ estilos.btn_general, estilos.btn_ver_menu ] }>
                        <Text style={ [ estilos.btn_txt, estilos.txt_menu ] }>
                            Ver menú
                        </Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    </View>
  )
}

const estilos=StyleSheet.create({

    contenedor: {
        flex: 1,
        backgroundColor: 'white'
    },

    view_logo: {
        flex: 1,
        alignItems: 'center'
    },

    view_botones: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    logo: {
        flex: 1,
        aspectRatio: 1
    },

    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },

    subtitulo: {
        fontSize: 20,
        color: 'white'
    },

    btn_general: {
        width: '70%',
        paddingVertical: 20,
        alignItems: 'center',
        borderRadius: 35,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    btn_iniciar_sesion: {
        backgroundColor: 'white'
    },

    btn_ver_menu: {
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: 'white'
    },

    btn_txt: {
        fontSize: 20,
        fontWeight: '100'
    },

    txt_menu: {
        color: 'yellow'
    }

})