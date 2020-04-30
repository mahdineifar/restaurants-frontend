import ConfigurationReducer from './ConfigurationReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  configuration: ConfigurationReducer,
});
