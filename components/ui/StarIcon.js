import React from 'react'
import { Pressable } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

const StarIcon = ({active,onPress,size,color}) => {
  return (
    <Pressable onPress={onPress}>
        {active?  
        <Ionicons name='star' size={size} color={color} />
        :
        <Ionicons name='star-outline' size={size} color={color} />
    }
    </Pressable>
  )
}

export default StarIcon