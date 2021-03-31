import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ToolBarComponent extends Component {
  render() {
    return (
      <View style={styles.toolBarStyle}>
        <MaterialCommunityIcons name="chevron-left" color="#fff" size={25} />
        <Text style={styles.titleToolBar}>
          {this.props.currentMonth}/{this.props.currentYear}
        </Text>
        <MaterialCommunityIcons name="chevron-right" color="#fff" size={25} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolBarStyle: {
    backgroundColor: 'green',
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleToolBar: {
    color: '#fff',
    fontSize: 15,
  },
});
