import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import MealInfo from './MealInfo'

const MealDetail = ({meal}) => {

  return (
   <ScrollView>
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:meal.imageUrl}} />
        <Text style={styles.title}>{meal.title}</Text>
        <MealInfo item={meal} style={styles.textStyle} />
        <View style={styles.inner}>
            <View style={styles.stepContainer}>
              <Text style={styles.subTitle}>Ingredients</Text>
            </View>
            {meal.ingredients?.map((ingredient)=>(
                <View style={styles.subContent}>
                    <Text style={styles.content}>{ingredient}</Text>
                </View>
            ))    
            }
             <View style={styles.stepContainer}>
              <Text style={styles.subTitle}>Steps</Text>
            </View>
            {meal.steps?.map((step)=>(
                <View style={styles.subContent}>
                    <Text style={styles.content}>{step}</Text>
                </View>
            ))    
            }
        </View>
    </View>
   </ScrollView>
  )
}

export default MealDetail

const styles = StyleSheet.create({
     container:{
        flex:1,
     },
     image:{
        width:'100%',
        height:250,
     },
     title:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        padding:10,
        color:'white',
     },
     textStyle:{
        color:'white',
     },
     inner:{
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal:30,
        paddingVertical:10
     },
     stepContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:8,
        borderBottomColor: 'white',
        borderBottomWidth:2,
        margin:8,
     
     },
     subTitle:{
        fontSize:20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
     },
     subContent:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:8,
        borderRadius:20,
        margin:5,
        backgroundColor: '#3432a8',
        padding:5,
 
       
     },
     content:{
        color:'#38d2fc'
     }


})