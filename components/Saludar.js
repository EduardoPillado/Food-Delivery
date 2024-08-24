
import { Text, View } from 'react-native'

function Saludar({ nombre, apellido }) {

  return (
    <View>
      <Text>Saludar a { nombre } { apellido }</Text>
    </View>
  )
}

export default Saludar

