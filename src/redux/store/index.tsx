import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { PokemonsReducer } from '@redux'
import { localStorageFavorites, logger } from '@middleware'
import thunk from 'redux-thunk'

const store = createStore(
  PokemonsReducer,
  composeWithDevTools(applyMiddleware(thunk, logger, localStorageFavorites ))
)

export { store }
