import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { productT } from '../@types/api.types'

const initialState = {
    cart: [] as productT[]
}

const cartSlice = createSlice({
    name: '/cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<productT>) => {
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(i => i.id !== action.payload)
        },
        clearCart: state => {
            state.cart = []
        },
        increaseCartItemsCount: (state, action: PayloadAction<number>) => {
            state.cart.map(p => {
                if (p.id === action.payload) p.quantity += 1
            })
        },
        decreaseCartItemsCount: (state, action: PayloadAction<number>) => {
            const id = action.payload
            const currentItem = state.cart.find(item => item.id === id)
            if (currentItem?.quantity === 1) {
                state.cart = state.cart.filter(p => p.id !== id)
            } else {
                state.cart.map(p => {
                    if (p.id === action.payload) p.quantity -= 1
                })
            }
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer