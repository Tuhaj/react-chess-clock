const defaultState = {
  runningClock: '',
  player1Time: 5000,
  player2Time: 5000,
};

const clockReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SWITCH_CLOCK': {
      const clockState = Object.assign({}, state);
      clockState.runningClock = state.runningClock !== 'player1Time' ? 'player1Time' : 'player2Time';
      return clockState;
    }
    default:
      return state;
  }
};

export default clockReducer;
