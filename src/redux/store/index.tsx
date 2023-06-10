import { MiddlewareArray, configureStore  } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { useDispatch } from 'react-redux'
import { localStorageFavorites, logger } from '@redux'
import { DataSlice } from '@redux'

const store = configureStore({
  reducer: {
    data: DataSlice.reducer,
  },
  middleware: new MiddlewareArray(thunk, logger, localStorageFavorites),
})

export { store }

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
