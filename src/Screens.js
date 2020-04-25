import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import App from './App';

const appWrapper = Comp => props => (
  <>
    <StatusBar backgroundColor="#131573" barStyle={'light-content'} />
    <SafeAreaView>
      <Comp {...props} />
    </SafeAreaView>
  </>
);

export default () => {
  Navigation.setDefaultOptions({
    topBar: {
      title: {
        color: 'white',
      },
      backButton: {
        color: 'white',
      },
      background: {
        color: '#5154F0',
      },
    },
  });
  Navigation.registerComponent('HomeScreen', () => appWrapper(App));
};
