import { SWITCH_CLOCK, STOP_CLOCK, CLOCK_TICK, TIME_OVER, SET_TIME } from '../actions/action_types';

const defaultState = {
  running: false,
  isTimeOver: false,
  currentClock: '',
  player1Time: 180000,
  player2Time: 180000,
};

const clockReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SWITCH_CLOCK: {
      const clockState = Object.assign({}, state);
      clockState.currentClock = state.currentClock !== 'player1Time' && state.running ? 'player1Time' : 'player2Time';
      clockState.running = true;
      return clockState;
    }
    case STOP_CLOCK: {
      const clockState = Object.assign({}, state);
      clockState.running = false;
      return clockState;
    }
    case TIME_OVER: {
      const clockState = Object.assign({}, state);
      clockState.running = false;
      clockState.isTimeOver = true;
      return clockState;
    }
    case SET_TIME: {
      const clockState = Object.assign({}, state);

      clockState.player1Time = action.time;
      clockState.player2Time = action.time;
      return clockState;
    }
    case CLOCK_TICK: {
      const clockState = Object.assign({}, state);
      if (clockState.isTimeOver === false) {
        const playerTime = clockState[clockState.currentClock];
        clockState[clockState.currentClock] = playerTime - 10;
      }
      return clockState;
    }
    default:
      return state;
  }
};

export default clockReducer;
