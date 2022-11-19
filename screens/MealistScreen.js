import { useLayoutEffect, useState } from 'react'
import { Text, View } from 'react-native'
import MealList from '../components/MealList'
import { CATEGORIES, MEALS } from '../data/dummy-data'

const MealistScreen = ({route,navigation}) => {
  const catID = route.params.categoryId
  const AllMeals = MEALS.filter((meal)=>meal.categoryIds.includes(catID))

  useLayoutEffect(() => {
     const category = CATEGORIES.find((cat)=>cat.id===catID)
     navigation.setOptions({
      title: category.title
     })
    
  }, [])

  
  return (
    <MealList mealItems={AllMeals} />
  )
}

export default MealistScreen