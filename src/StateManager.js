(function () {
  const stateMap = new Map();
  const listeners = new Map();

  function useState(initialValue) {
    const id = Symbol("state");
    stateMap.set(id, initialValue);

    function setState(newValue) {
      stateMap.set(id, newValue);

      // Notify all listeners immediately after updating the state
      if (listeners.has(id)) {
        listeners.get(id).forEach((listener) => listener(newValue));
      }
    }

    function getState() {
      return stateMap.get(id);
    }

    function subscribe(listener) {
      if (!listeners.has(id)) {
        listeners.set(id, []);
      }
      listeners.get(id).push(listener);
    }

    return [getState, setState, subscribe];
  }

  window.useState = useState;
})();
