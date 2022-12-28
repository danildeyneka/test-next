import { cartActions } from '../store/cartSlice'
import { catalogActions } from '../store/catalogSlice'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

const allActions = {
    ...cartActions,
    ...catalogActions
}
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
} // typed actions from slices