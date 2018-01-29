const defaultState = {
  running: false,
  currentClock: '',
  player1Time: 5000,
  player2Time: 5000,
};

const clockReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SWITCH_CLOCK': {
      const clockState = Object.assign({}, state);
      clockState.currentClock = state.currentClock !== 'player1' ? 'player1' : 'player2';
      clockState.running = true;
      return clockState;
    }
    case 'STOP_CLOCK': {
      const clockState = Object.assign({}, state);
      console.log('stops clock');
      clockState.running = false;
      return clockState;
    }
    default:
      return state;
  }
};

export default clockReducer;
