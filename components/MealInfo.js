import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MealInfo = ({item,style}) => {
  return (
<View style={styles.infoContainer}>
   <Text style={[styles.infoTitle,style]}>{item.duration}m</Text>
   <Text style={[styles.infoTitle,style]}>{item.complexity}</Text>
   <Text style={[styles.infoTitle,style]}>{item.affordability}</Text>
</View>
  )
}

export default MealInfo

const styles = StyleSheet.create({
    infoContainer:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding:6,
    },
    infoTitle:{
       fontSize:16,
       paddingHorizontal:6,
    }
    

})