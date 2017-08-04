(function(){

  'use strict';

  var countText = document.getElementById('js-text-count');

  var decrementButton = document.getElementById('js-button-decrement'),
      incrementButton = document.getElementById('js-button-increment');

  var store, unsubscribe;

  /**
   * counter reducer
   *
   * @param {number|undefined} state
   * @param {Object} action
   */
  function counter(state, action) {
    // NOTE: or Redux.createStore(counter, 0);
    if (typeof state === 'undefined') {
      return 0;
    }

    switch (action.type) {
      case 'DECREMENT':
        return state - 1;
      case 'INCREMENT':
        return state + 1;
      default:
        return state;
    }
  }

  store = Redux.createStore(counter);

  /**
   * render function
   */
  function render() {
    countText.innerHTML = store.getState().toString();
  }

  /**
   * onclick handler for decrement button
   */
  function onClickDecrement() {
    store.dispatch({
      type: 'DECREMENT'
    });
  }

  /**
   * onclick handler for increment button
   */
  function onClickIncrement() {
    store.dispatch({
      type: 'INCREMENT'
    });
  }

  decrementButton.addEventListener('click', onClickDecrement, false);
  incrementButton.addEventListener('click', onClickIncrement, false);

  render();

  unsubscribe = store.subscribe(render);

}());
