/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import codePush from "react-native-code-push";
const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };
export default class App extends Component<{}> {
  
  componentWillMount(){
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
      mandatoryInstallMode:codePush.InstallMode.IMMEDIATE,
      //deploymentKey为刚才生成的,打包哪个平台的App就使用哪个Key,这里用IOS的打包测试
      deploymentKey: 'IjC3_iRGEZE8-9ikmBZ4ITJTz9wn6dec4087-57cf-4c9d-b0dc-ad38ce431e1d',
      });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
