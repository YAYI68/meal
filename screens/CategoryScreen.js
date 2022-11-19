import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import CategoryItem from '../components/CategoryItem'
import { CATEGORIES } from '../data/dummy-data'



const CategoryScreen = ({navigation}) => {

  const navigatehandler = (catId)=>{
    navigation.navigate("MealList",{categoryId:catId})
  }

  return (
    <FlatList 
    key={"#"}
    style={styles.container}
     data={CATEGORIES}
     renderItem={({item})=>(
      <CategoryItem title={item.title} color={item.color}
       onPress={()=>navigatehandler(item.id)}
      />
     )}
     keyExtractor={item=>item.id}
     numColumns={2}
    >
    </FlatList>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }

})