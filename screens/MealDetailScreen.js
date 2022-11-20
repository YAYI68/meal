import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Text, View } from 'react-native'
import MealDetail from '../components/MealDetail'
import StarIcon from '../components/ui/StarIcon'
import { useStateContext } from '../contexts/ContextProvider'
import { MEALS } from '../data/dummy-data'


function MealDetailScreen({route,navigation}) {
  const  { addFavId,removeFavId,favIDS } = useStateContext();

  const mealID = route.params.mealID
  const meal = MEALS.find((meal)=>meal.id === mealID)
  const favStatus = favIDS.includes(mealID)

  const favHandler = ()=>{
    if(favStatus){
      removeFavId(mealID)
    }else{
      addFavId(mealID)
    }
  }


  useLayoutEffect(() => {
      const meal = MEALS.find((meal)=>meal.id === mealID)
      navigation.setOptions({
        title:meal.title,
        headerRight:()=> <StarIcon size={24} color="white" active={favStatus}  onPress={favHandler}   />
      })
  }, [favStatus,navigation])

  return (
     <MealDetail  meal={meal} />
  )
}

export default MealDetailScreen