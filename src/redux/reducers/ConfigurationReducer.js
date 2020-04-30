const INITIAL_STATE = {
  theme: 'dark',
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case '[CONFIGURAION] SWITCH_THEME':
      return {...state, theme: payload};
    default:
      return state;
  }
};
