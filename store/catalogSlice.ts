import { productT } from '../@types/api.types'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { catalogApi } from '../services/catalogApi'

const initialState = {
    products: [] as productT[],
    favourites: [] as number[],
    awaiting: false
}

export const setProducts = createAsyncThunk(
    'catalog/setProducts',
    async function () {
        const res: productT[] = await catalogApi.getProducts()
        return res.flatMap(i => [{...i, quantity: 1}]) // just convenient
    }
)

export const catalogSlice = createSlice({
    name: '/catalog',
    initialState,
    reducers: {
        increaseItemsCount: (state, action: PayloadAction<number>) => {
            state.products.map(p => {
                if (p.id === action.payload) p.quantity += 1
            })
        },
        decreaseItemsCount: (state, action: PayloadAction<number>) => {
            const id = action.payload
            if (state.products.find(item => item.id === id)?.quantity === 1) {
                return
            } else {
                state.products.map(p => {
                    if (p.id === action.payload) p.quantity -= 1
                })
            }
        },
        resetProductQuantity: (state, action: PayloadAction<number>) => {
            state.products.map(p => {
                if (p.id === action.payload) p.quantity = 1
            })
        },
        addToFavourites: (state, action: PayloadAction<number>) => {
            state.favourites.push(action.payload)
        },
        removeFromFavourites: (state, action: PayloadAction<number>) => {
            state.favourites = state.favourites.filter(i => i !== action.payload)
        }
    },
    extraReducers: builder => {
        builder.addCase(setProducts.pending, state => {
            state.awaiting = true
        })
        builder.addCase(setProducts.fulfilled, (state, action: PayloadAction<Array<productT>>) => {
            state.awaiting = false
            state.products = action.payload
        })
    }
})

export const catalogActions = catalogSlice.actions
export default catalogSlice.reducer