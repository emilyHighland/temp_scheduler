import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome5, AntDesign, Feather } from "@expo/vector-icons";
import MyScheduleScreen from './src/screens/MyScheduleScreen';
import BookScreen from './src/screens/BookScreen';
import ClockScreen from './src/screens/ClockScreen';
import NotesScreen from './src/screens/NotesScreen';
import ProfileScreen from './src/screens/ProfileScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Schedule'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            let Icon;
            if (route.name === 'Schedule') {
              iconName = focused ? 'calendar-number' : 'calendar-number-outline';
              Icon = Ionicons;
            }
            else if (route.name === 'Book') {
              iconName = focused ? 'plussquare' : 'plussquareo';
              Icon = AntDesign;
            }
            else if (route.name === 'Clock') {
              iconName = focused ? 'clockcircle' : 'clockcircleo';
              Icon = AntDesign;
            }
            else if (route.name === 'Notes') {
              iconName = focused ? 'edit-2' : 'edit';
              Icon = Feather;
            }
            else if (route.name === 'Profile') {
              iconName = focused ? 'user-alt' : 'user';
              Icon = FontAwesome5;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarLabelPosition: 'below-icon',
          // tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#F5F5F5',
            position: 'absolute',
          },
          tabBarActiveTintColor: '#044839',
        })}
      >
        <Tab.Screen name="Schedule" component={MyScheduleScreen} />
        <Tab.Screen name="Book" component={BookScreen} />
        <Tab.Screen name="Clock" component={ClockScreen} />
        <Tab.Screen name="Notes" component={NotesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
