import React from 'react';
import 'react-native-gesture-handler';
import {AppStrings} from './utils/app_strings';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeScreen} from './screens/home_screens/home_screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName={AppStrings.nameHomeScreen}>
      <Stack.Screen
        name={AppStrings.nameHomeScreen}
        component={HomeScreen}
        options={{title: AppStrings.nameHomeScreen}}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="home">
          <Tab.Screen
            name="MainStack"
            component={MainStack}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color="red" size="20" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  backgroundStyle: {flex: 100},
});
