import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import CreateMealScreen from './screens/CreateMealScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import MealistScreen from './screens/MealistScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import NavIcon from './components/ui/NavIcon';
import ContextProvider from './contexts/ContextProvider';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();




const DrawerNavigation = ()=>{

  return (
    <Drawer.Navigator initialRouteName='AllCategory' 
    screenOptions={{
      headerStyle:{backgroundColor: '#3432a8'},
      headerTintColor:'white',
      sceneContainerStyle:{
        backgroundColor:'#38d2fc'
       },
       drawerContentStyle:{
        backgroundColor:'#1646f2',
       },
       drawerActiveBackgroundColor:"#28cef7",
       drawerInactiveTintColor:"white",
       drawerActiveTintColor:"#1646f2",
    }}
    >
      <Drawer.Screen name='AllCategory' component={CategoryScreen}
        options={{
          title:"All Category",
          drawerIcon:({color,size})=><NavIcon size={size} color={color} icon="list" />
        }}
      />
      <Drawer.Screen name='AllFavourite' component={FavouriteScreen}
       options={{
        title:"Favourite Meal",
          drawerIcon:({color,size})=><NavIcon size={size} color={color} icon="star" />
       }}
      />
      <Drawer.Screen name='CreateMeal' component={CreateMealScreen}
        options={{
          title:"Create New Meal",
          drawerIcon:({color,size})=><NavIcon size={size} color={color} icon="pencil" />
        }}
      />
    </Drawer.Navigator>
 
  )
}




export default function App() {
  return (
    <>
    <ContextProvider>
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerStyle:{backgroundColor: '#3432a8'},
        headerTintColor:'white',
        contentStyle:{
          backgroundColor:'#38d2fc'
        }
       }}
      >
        <Stack.Screen name='Category' component={DrawerNavigation} 
         options={{
          headerShown:false,
         }}
        
        />
        <Stack.Screen name='MealList' component={MealistScreen} />
        <Stack.Screen name='MealDetail' component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </ContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
