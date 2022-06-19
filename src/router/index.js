import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DrinkPages,
  FoodPages,
  InvoicePages,
  Logout,
  OrderPages,
} from '../pages';
import {BottomTabNavigator} from '../components/modules';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTabNavigator {...props} />}>
      <Tab.Screen
        options={{headerShown: false}}
        name="FoodPages"
        key={FoodPages}
        component={FoodPages}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="InvoicePages"
        key={InvoicePages}
        component={InvoicePages}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="OrderPages"
        key={OrderPages}
        component={OrderPages}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="DrinkPages"
        key={DrinkPages}
        component={DrinkPages}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Logout"
        key={Logout}
        component={Logout}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
