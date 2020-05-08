import ConfigurationReducer from './ConfigurationReducer';
import {combineReducers} from 'redux';
import NavigationReducer from './NavigationReducer';

export default combineReducers({
  configuration: ConfigurationReducer,
  navigation: NavigationReducer
});
