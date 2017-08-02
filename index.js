(function(){
  'use strict';

  var countText = document.getElementById('js-text-count');

  var decrementButton = document.getElementById('js-button-decrement'),
      incrementButton = document.getElementById('js-button-increment');

  /**
   * counter reducer
   *
   * @param {number|undefined} state
   * @param {Object} action
   */
  function counter(state, action) {
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

  var store = Redux.createStore(counter);

  /**
   * render function
   */
  function render() {
    countText.innerHTML = store.getState().toString();
  }

  store.subscribe(render);

  decrementButton.addEventListener('click', function() {
    store.dispatch({
      type: 'DECREMENT'
    });
  }, false);
  incrementButton.addEventListener('click', function() {
    store.dispatch({
      type: 'INCREMENT'
    });
  }, false);

  render();

}());
