import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { adsApi } from './services/adsApi'

export const store = configureStore({
    reducer: {
        [adsApi.reducerPath]: adsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(adsApi.middleware),
})

setupListeners(store.dispatch) 