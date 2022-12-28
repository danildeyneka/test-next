import React, { FC } from 'react'
import s from '../styles/productParts.module.scss'
import { productT } from '../../@types/api.types'
import { useActions, useAppSelector } from '../../hooks'
import { useRouter } from 'next/router'
import { minus, plus } from '../../assets'
import { ChangeQuantityButton } from './changeQuantityButton'

export const CartButtons: FC<{ p: productT }> = ({p}) => {
    const {addToCart, decreaseItemsCount, increaseItemsCount, resetProductQuantity} = useActions()
    const router = useRouter()

    const cart = useAppSelector(state => state.cart.cart)
    const existsInCart = cart.find(i => i.id === p.id)

    const handleAddToCart = (p: productT) => {
        resetProductQuantity(p.id)
        addToCart(p)
    }

    return <>
        <div className={ s.mainButtons }>
            { existsInCart
                ? <a onClick={ () => router.push('cart') } className={ s.toCart }>В корзине</a>
                : <>
                    <button className={ `${ s.cartBtn }` } onClick={ () => handleAddToCart(p) }>
                        <span>В корзину</span>
                    </button>

                    <ChangeQuantityButton img={ minus } callback={ decreaseItemsCount } id={ p.id }/>

                    <div className={ s.quantity }>{ p.quantity }</div>

                    <ChangeQuantityButton img={ plus } callback={ increaseItemsCount } id={ p.id }/>
                </>
            }
        </div>
    </>
}