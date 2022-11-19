import React, { useLayoutEffect } from 'react'
import { Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'


function MealDetailScreen({route,navigation}) {

  const mealID = route.params.mealID

  useLayoutEffect(() => {
      const meal = MEALS.find((meal)=>meal.id === mealID)
      navigation.setOptions({
        title:meal.title
      })
  }, [])

  return (
    <View>
        <Text>MealDetailScreen</Text>
    </View>
  )
}

export default MealDetailScreen