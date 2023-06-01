import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { PokemonsReducer } from '@redux'
import { localStorageFavorites, logger, prefix } from '@middleware'
import thunk from 'redux-thunk'

const store = createStore(
  PokemonsReducer,
  composeWithDevTools(applyMiddleware(thunk, logger, prefix, localStorageFavorites))
)

export { store }
