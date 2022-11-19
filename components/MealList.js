import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from './MealItem'

function MealList({mealItems}) {
  return (
    <View style={styles.container}>
        <FlatList 
        data={mealItems} 
        renderItem={({item})=>(
            <MealItem  item={item}  />
        )}
        keyExtractor={item=>item.id}
        />
    </View>
  )
}

export default MealList

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})