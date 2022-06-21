// Минимализированная структура устройства стора

function createStore(reducer, preloadedState) {
  let state = preloadedState
  const listeners = []

  function getState() {
    return state
  }

  function subscribe(listener) {
    listeners.push(listener)
    return function unsubscribe() {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  dispatch({ type: '@@redux/INIT' })

  return { dispatch, subscribe, getState }
}

// Этот пример имеет небольшие отличия, поскольку:
// Хранилище из этого примера не создает дополнительную копию state при вызове getState(). Это точно такая же ссылка, которая была возвращена функцией корневого редуктора.
const state = store.getState()
state.filters.status = 'Active' // ❌ Не делайте этого - это мутирует текущее состояние!

// Магазин Redux больше ничего не делает для предотвращения случайных мутаций. 
// Можно изменить состояние как внутри редуктора, так и вне хранилища, и вы всегда должны быть осторожны, чтобы избежать мутаций .