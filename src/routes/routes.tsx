import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Friends from '../screens/Friends';
import Settings from '../screens/Settings';
import CustomTabBar from '../components/CustomTabBar';
import {Button, Text} from 'react-native-ui-lib';
import HomeView from '../screens/Home';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShadowVisible: true,
          headerShown: false,
          headerStyle: {
            elevation: 10,
          },
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#121212',
          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: '#fff',
          },
        }}
        tabBar={(props: any) => <CustomTabBar {...props} />}>
        <Tab.Screen
          name="Grupos"
          component={HomeView}
          options={{
            tabBarIcon: 'groups',
            
          }}
        />
        <Tab.Screen
          name="Amigos"
          component={Friends}
          options={{
            tabBarIcon: 'attach-money',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: 'storefront',
          }}
        />
      </Tab.Navigator>
    </>
  );
}
