
import { Pressable } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

function NavIcon({icon,color,size}) {
  return (
     <Pressable >
        <Ionicons name={icon} size={size} color={color} />
     </Pressable>
  )
}

export default NavIcon