import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import MealInfo from './MealInfo'

const MealItem = ({item}) => {
  const navigation = useNavigation();

  const navigateDatail = ()=>{
    navigation.navigate("MealDetail",{
        mealID:item.id
    })
  }

  return (
<View style={styles.itemContainer}>
   <Pressable
     onPress={navigateDatail}
     style={({pressed})=>pressed && styles.pressed}
   >
        <Image style={styles.image} source={{uri:item.imageUrl}} />
    <Text style={styles.title}>{item.title}</Text>
    <MealInfo item={item} />
   </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    itemContainer: {
        margin:10,
        backgroundColor:'white',
        elevation:8,
        borderRadius:8,
        overflow: 'hidden',
        shadowColor:'black',
        shadowOffset:{width:0, height:4},
        shadowOpacity:0.25,
        shadowRadius:8,

    },
    image:{
        width: "100%",
        height:200,
    },
    title:{
        fontSize:18,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical:6,
        color:'#3432a8',
    },
    pressed:{
        opacity:0.75
    }
   
})