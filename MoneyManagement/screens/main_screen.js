import React from 'react';
import 'react-native-gesture-handler';
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

const HomeStack = createStackNavigator();
const StatsStack = createStackNavigator();
const AccountsStack = createStackNavigator();
const SettingStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: AppColors.backgroundHeaderColor},
        headerTintColor: '#fff',
      }}>
      <HomeStack.Screen
        name={AppStrings.nameHomeScreen}
        component={HomeScreen}
        options={{title: 'Transaction'}}
      />
    </HomeStack.Navigator>
  );
}

function StatsStackScreen() {
  return (
    <StatsStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: AppColors.backgroundHeaderColor},
        headerTintColor: '#fff',
      }}>
      <StatsStack.Screen
        name={AppStrings.nameStatsScreen}
        component={StatsScreen}
        options={{title: 'Stats'}}
      />
    </StatsStack.Navigator>
  );
}

function AccountsStackScreen() {
  return (
    <AccountsStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: AppColors.backgroundHeaderColor},
        headerTintColor: '#fff',
      }}>
      <AccountsStack.Screen
        name={AppStrings.nameAccountsScreen}
        component={AccountsScreen}
        options={{title: 'Accounts'}}
      />
    </AccountsStack.Navigator>
  );
}

function SettingStackScreen() {
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: AppColors.backgroundHeaderColor},
        headerTintColor: '#fff',
      }}>
      <SettingStack.Screen
        name={AppStrings.nameSettingsScreen}
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
    </SettingStack.Navigator>
  );
}

const MainScreen = () => {
  var today = new Date();
  var nowDate = today.getDate() + '/' + (today.getMonth() + 1);
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
