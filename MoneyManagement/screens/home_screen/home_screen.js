import React from 'react';
import styles from './styles_home_screen';
import {SafeAreaView} from 'react-native';
import {AppStrings} from '../../utils/app_strings';
import {AppColors} from '../../utils/app_colors';
import ToolBarComponent from '../../components/tool_bar_component';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DailyScreen from './daily_screen/daily_screen';
import CalenderScreen from './calender_screen/calender_screen';
import WeeklyScreen from './weekly_screen/weekly_screen';
import MonthlyScreen from './monthly_screen/monthly_screen';
import SummaryScreen from './summary_screen/summary_screen';

const TopTap = createMaterialTopTabNavigator();

const currentMonth = (new Date().getMonth() + 1).toString();
const currentYear = new Date().getFullYear().toString();

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ToolBarComponent currentMonth={currentMonth} currentYear={currentYear} />
      <TopTap.Navigator
        initialRouteName={AppStrings.daily}
        tabBarOptions={{
          activeTintColor: AppColors.headerTintColor,
          labelStyle: {
            fontSize: 12,
            textTransform: 'none',
            margin: 0,
          },
          indicatorStyle: {backgroundColor: AppColors.headerTintColor},
          style: {
            backgroundColor: AppColors.backgroundHeaderColor,
          },
        }}>
        <TopTap.Screen
          name={AppStrings.daily}
          component={DailyScreen}
          options={{tabBarLabel: AppStrings.daily}}
        />
        <TopTap.Screen
          name={AppStrings.calender}
          component={CalenderScreen}
          options={{tabBarLabel: AppStrings.calender}}
        />
        <TopTap.Screen
          name={AppStrings.weekly}
          component={WeeklyScreen}
          options={{tabBarLabel: AppStrings.weekly}}
        />
        <TopTap.Screen
          name={AppStrings.monthly}
          component={MonthlyScreen}
          options={{tabBarLabel: AppStrings.monthly}}
        />
        <TopTap.Screen
          name={AppStrings.summary}
          component={SummaryScreen}
          options={{tabBarLabel: AppStrings.summary}}
        />
      </TopTap.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreen;
