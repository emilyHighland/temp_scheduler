import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookScreen from './src/screens/BookScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Book'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#055543',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
          headerRight: () => (
            <Pressable onPress={() => alert("Menu button pressed")}>
              <Text style={{ color: '#fff', fontSize: 16}}>Menu</Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: 'white',
          },
        }}
        >
        <Stack.Screen 
          name="Book" 
          component={BookScreen} 
          
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

