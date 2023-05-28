import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { PokemonsReducer } from '@redux'
import { logger, prefix } from '@middleware'

const store = createStore(PokemonsReducer, composeWithDevTools(applyMiddleware(logger, prefix)))

export { store }
