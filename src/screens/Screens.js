import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Home from './Home';
import {Provider} from 'react-redux';
import store from '../redux/store';
import Places from './Places';
import Favorites from './Favorites';
import Account from './Account';
import AddPost from './AddPost';
import {CONTENT_BACKGROUND_COLOR, STATUS_BAR_COLOR} from '../utils/Colors';
import {topBar, bottomTabs, bottomTab} from '../utils/NavigationOptions';

const appWrapper = Comp => props => {
  return (
    <>
      <StatusBar
        backgroundColor={STATUS_BAR_COLOR}
        barStyle={'light-content'}
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: CONTENT_BACKGROUND_COLOR,
        }}>
        <Comp {...props} />
      </SafeAreaView>
    </>
  );
};

Navigation.events().registerComponentDidAppearListener(data => {
  const {componentId, componentName} = data;
  store.dispatch({ type: '[NAVIGATION] NAVIGATE_BOTTOM_TAB', payload: {componentId, componentName}});
});

export default () => {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: STATUS_BAR_COLOR,
      style: 'light',
    },
    topBar,
    bottomTabs,
    bottomTab,
  });
  Navigation.registerComponentWithRedux(
    'HomeScreen',
    () => appWrapper(Home),
    Provider,
    store,
  );
  Navigation.registerComponent('PlacesScreen', () => appWrapper(Places));
  Navigation.registerComponent('FavoritesScreen', () => appWrapper(Favorites));
  Navigation.registerComponent('AccountScreen', () => appWrapper(Account));
  Navigation.registerComponent('AddPostScreen', () => appWrapper(AddPost));
};
