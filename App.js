import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';

import NewScreen from './src/screens/NewScreen';




import { StyleSheet, View, Text} from 'react-native';
import { Icon } from 'react-native-elements';




import Toast from 'react-native-toast-message';

import { v4 as uuidv4 } from 'uuid';
 uuidv4();




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>



      <Stack.Navigator
    screenOptions={{
			headerStyle: {
				backgroundColor: '#EDA6C4'
			},
        	headerTintColor: '#fff'
    	}} 
    initialRouteName="Home">



        {/* <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{


        
          headerStyle: {
            backgroundColor: '#ffc0cb'
          },
              headerTintColor: '#fff'


              
          }} 
        /> */}





        <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={({navigation}) => ({
                headerRight: () => (
                    <Icon 
                    name="plus" 
                    type="feather" 
                    color="#fff"
                    style={style.headerIcon}
                                        onPress={() => navigation.navigate('New')}
                />
              )
            })}
        /> 






        
        <Stack.Screen 
          name="New" 
          component={NewScreen}
          

           />

        
        




      </Stack.Navigator>







      <Toast ref={(ref) => Toast.setRef(ref)} />        







    </NavigationContainer>
  );
}



const style = StyleSheet.create({
  headerIcon: {
    marginRight: 10
  }
});