const INITIAL_STATE = {
  bottomTabIndex: 0,
  componentID: 'HomeScreen',
  componentName: 'HomeScreen',
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case '[NAVIGATION] NAVIGATE_BOTTOM_TAB':
      return {...state, ...payload};
    default:
      return state;
  }
};
