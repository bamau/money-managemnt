import React from 'react';
import styles from './styles_home_screen';
import {SafeAreaView} from 'react-native';
import {AppStrings} from '../../utils/app_strings';
import ToolBarComponent from '../../components/tool_bar_component';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DailyScreen from './daily_screen/daily_screen';
import CalenderScreen from './daily_screen/calender_screen';

const MaterialTopTap = createMaterialTopTabNavigator();

const currentMonth = (new Date().getMonth() + 1).toString();
const currentYear = new Date().getFullYear().toString();

function HomeTabs() {
  return (
    <MaterialTopTap.Navigator>
      <MaterialTopTap.Screen name={AppStrings.daily} component={DailyScreen} />
      <MaterialTopTap.Screen
        name={AppStrings.calender}
        component={CalenderScreen}
      />
    </MaterialTopTap.Navigator>
  );
}

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ToolBarComponent currentMonth={currentMonth} currentYear={currentYear} />
    </SafeAreaView>
  );
};

export default HomeScreen;
