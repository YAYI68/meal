
import { View,Text, Pressable, StyleSheet } from 'react-native'

const CategoryItem = ({title,color,onPress}) => {
  return (
     <View style={[styles.gridContainer,{backgroundColor:color}]}>
        <Pressable onPress={onPress} 
        style={({pressed})=>[styles.clickPad,pressed && styles.pressed]}
         android_ripple={{color:'#ccc'}}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable> 
     </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
   gridContainer: {
      flex: 1,
      height:150,
      borderRadius:10,
      margin:8,
      elevation:4,
      shadowColor:'black',
      shadowOffset:{width:0, height:4},
      shadowOpacity:0.25,
      shadowRadius:8,
   },
   clickPad:{
     flex: 1,
   },
   pressed:{
      opacity:0.7,
   },
   innerContainer:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   title:{
      fontSize:18,
      fontWeight:'bold'
   }
})