import React from 'react';
import 'react-native-gesture-handler';
import {AppStrings} from '../../utils/app_strings';
import {AppColors} from '../../utils/app_colors';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './home_screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Tab.Navigator
      initialRouteName={AppStrings.nameHomeScreen}
      tabBarOptions={{
        activeTintColor: AppColors.iconBottomNavColor,
      }}>
      <Tab.Screen
        name={AppStrings.nameHomeScreen}
        component={HomeScreen}
        options={{
          title: '16/3',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="book-open-page-variant"
              color={AppColors.iconBottomNavColor}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const MainScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={AppStrings.appName}
        screenOptions={{
          headerStyle: {backgroundColor: AppColors.backgroundHeaderColor},
          headerTintColor: AppColors.headerTintColor,
        }}>
        <Stack.Screen name={AppStrings.appName} component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
