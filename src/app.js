import { createStore } from 'redux';

// region ACTIONS
const increaseCounter = {
  type: 'INCREASE',
  payload: 1
};

const decreaseCounter = {
  type: 'DECREASE',
  payload: 1
};
// endregion

// region REDUCER
function counterReducer(state, action) {
  switch(action.type) {
    case 'INCREASE':
      return {
        count: state.count + action.payload,
      };

    case 'DECREASE':
      return {
        count: state.count - action.payload,
      };

    default:
      return state;
  }
}
// endregion

// region STORE
const initialState = {
  count: 0,
};

const store = createStore(counterReducer, initialState);
// endregion

// region APPLICATION CODE
const decreaseEl = document.getElementById('decrease');
const increaseEl = document.getElementById('increase');
const countEl = document.getElementById('count');

function render() {
  const state = store.getState();

  countEl.innerText = state.count;
}

render();

store.subscribe(render);

decreaseEl.addEventListener('click', () => store.dispatch(decreaseCounter));
increaseEl.addEventListener('click', () => store.dispatch(increaseCounter));
// endregion
