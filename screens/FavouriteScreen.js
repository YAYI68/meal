import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MealList from '../components/MealList';
import { useStateContext } from '../contexts/ContextProvider'
import { MEALS } from '../data/dummy-data'

function FavouriteScreen() {
  const {favIDS} =  useStateContext();
  const FavMeals = MEALS.filter((meal)=>favIDS.includes(meal.id))

  // useLayoutEffect(() => {
  //    const category = CATEGORIES.find((cat)=>cat.id===catID)
  //    navigation.setOptions({
  //     title: category.title
  //    })
    
  // }, [])
  if(FavMeals.length === 0) {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>No Favourite meal yet</Text>
      </View>
    )
  }

  
  return (
    <MealList mealItems={FavMeals} />
  )
}

export default FavouriteScreen

const styles = StyleSheet.create({
     container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
     },
     title:{
      fontSize:20,
      fontWeight: 'bold',
      textAlign: 'center',
     }
})