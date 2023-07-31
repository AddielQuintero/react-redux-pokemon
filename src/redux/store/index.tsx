import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { localStorageFavorites, logger } from '@redux'
import { DataSlice } from '@redux'

const store = configureStore({
  reducer: {
    data: DataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, localStorageFavorites),
  // middleware: new MiddlewareArray(thunk, logger, localStorageFavorites),
})

export { store }

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
