import 'react-native-gesture-handler';
import React from 'react';
import {AppStrings} from '../utils/app_strings';
import {AppColors} from '../utils/app_colors';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './home_screen/home_screen';
import StatsScreen from './chart_screen/chart_screen';
import AccountsScreen from './accounts_screen/accounts_screen';
import SettingsScreen from './settings_screen/settings_screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: AppColors.backgroundHeaderColor,
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name={AppStrings.nameHomeScreen}
        component={HomeScreen}
        options={{title: AppStrings.nameHomeScreen}}
      />
    </Stack.Navigator>
  );
}

function StatsStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: AppColors.backgroundHeaderColor},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name={AppStrings.nameStatsScreen}
        component={StatsScreen}
        options={{title: 'Stats'}}
      />
    </Stack.Navigator>
  );
}

function AccountsStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: AppColors.backgroundHeaderColor},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name={AppStrings.nameAccountsScreen}
        component={AccountsScreen}
        options={{title: 'Accounts'}}
      />
    </Stack.Navigator>
  );
}

function SettingStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: AppColors.backgroundHeaderColor},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name={AppStrings.nameSettingsScreen}
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
    </Stack.Navigator>
  );
}

const MainScreen = () => {
  let today = new Date();
  let nowDate = today.getDate() + '/' + (today.getMonth() + 1);
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={AppStrings.nameHomeScreen}
        tabBarOptions={{
          activeTintColor: AppColors.iconBottomNavColor,
        }}>
        <Tab.Screen
          name={AppStrings.nameHomeScreen}
          component={HomeStackScreen}
          options={{
            title: nowDate,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="book-plus"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name={AppStrings.nameStatsScreen}
          component={StatsStackScreen}
          options={{
            title: AppStrings.nameStatsScreen,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="chart-bar"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name={AppStrings.nameAccountsScreen}
          component={AccountsStackScreen}
          options={{
            title: AppStrings.nameAccountsScreen,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="database"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name={AppStrings.nameSettingsScreen}
          component={SettingStackScreen}
          options={{
            title: AppStrings.nameSettingsScreen,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
