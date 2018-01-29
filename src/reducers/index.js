import { SWITCH_CLOCK, STOP_CLOCK, CLOCK_TICK } from '../actions/action_types';

const defaultState = {
  running: false,
  currentClock: '',
  player1Time: 60000,
  player2Time: 60000,
};

const clockReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SWITCH_CLOCK: {
      const clockState = Object.assign({}, state);
      clockState.currentClock = state.currentClock !== 'player1' ? 'player1' : 'player2';
      clockState.running = true;
      return clockState;
    }
    case STOP_CLOCK: {
      const clockState = Object.assign({}, state);
      console.log('stops clock');
      clockState.running = false;
      return clockState;
    }
    case CLOCK_TICK: {
      console.log('clock tick!');
      return state;
    }
    default:
      return state;
  }
};

export default clockReducer;
