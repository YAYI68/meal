import React, { useLayoutEffect } from 'react'
import { Text, View } from 'react-native'
import MealDetail from '../components/MealDetail'
import { MEALS } from '../data/dummy-data'


function MealDetailScreen({route,navigation}) {

  const mealID = route.params.mealID
  const meal = MEALS.find((meal)=>meal.id === mealID)

  useLayoutEffect(() => {
      const meal = MEALS.find((meal)=>meal.id === mealID)
      navigation.setOptions({
        title:meal.title
      })
  }, [])

  return (
     <MealDetail  meal={meal} />
  )
}

export default MealDetailScreen