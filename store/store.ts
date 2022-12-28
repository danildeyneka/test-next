import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import catalogSlice from './catalogSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        catalog: catalogSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch