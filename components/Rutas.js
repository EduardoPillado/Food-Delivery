
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Login";
import LoginFirebase from "./LoginFirebase";
import Perfil from './Perfil';
import OrdenarComida from './OrdenarComida';
import Apps from './Apps';
import Inicio from './Inicio';
import MenuCategorias from './MenuCategorias';
import Twitter from './Twitter';
import Imagenes from './Imagenes';
import Wallpaper from './Wallpaper';
import CategoriaComponent from './CategoriaComponent';
import MenuProductos from './MenuProductos';
import Carrito from './Carrito';
import SeleccionarMesa from './SeleccionarMesa';

const Stack = createNativeStackNavigator()

export default function Rutas({ route }) {

    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Apps" component={ Apps } options={{ title: 'Inicio', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
                <Stack.Screen name="Login" component={ Login } options={{ headerShown: false }} />
                <Stack.Screen name="LoginFirebase" component={ LoginFirebase } options={{ headerShown: false }} />
                <Stack.Screen name="Perfil" component={ Perfil } options={({ route }) => ({ title: route.params.username })} />
                <Stack.Screen name="OrdenarComida" component={ OrdenarComida } options={{ title: 'Detalles', headerTitleAlign: 'center', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
                <Stack.Screen name="Inicio" component={ Inicio } options={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
                <Stack.Screen name="MenuCategorias" component={ MenuCategorias } options={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white', title: 'Menú' }} />
                <Stack.Screen name="CategoriaComponent" component={ CategoriaComponent } options={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
                <Stack.Screen name="Twitter" component={ Twitter } options={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
                <Stack.Screen name="Imagenes" component={ Imagenes } options={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
                <Stack.Screen name="Wallpaper" component={ Wallpaper } />
                <Stack.Screen name="menu_productos" component={ MenuProductos } options={{ title: 'Productos', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
                <Stack.Screen name="carrito" component={ Carrito } options={{ title: 'Carrito', headerTitleAlign: 'center', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
                <Stack.Screen name="mesa" component={ SeleccionarMesa } options={{ title: 'Seleccionar mesa', headerTitleAlign: 'center', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
            </Stack.Navigator>
        </NavigationContainer>

    )

}