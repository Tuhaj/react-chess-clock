export function startClock() {
  return {
    type: 'SWITCH_CLOCK',
  };
}

export function stopClock() {
  return {
    type: 'STOP_CLOCK',
  };
}
