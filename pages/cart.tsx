import React, { FC } from 'react'
import { useActions, useAppSelector } from '../hooks'
import { Button, ClearCartButton, RouteButton } from '../components/common/Buttons'
import s from './styles/cart.module.scss'
import { Description, Header, Hit, Img, Price } from '../components/ProductParts'
import { ChangeQuantityButton } from '../components/ProductParts/changeQuantityButton'
import { minus, plus } from '../assets'
import { getPrettierPrice } from '../utils/addSpacesInNumber'
import { roundToRubles } from '../utils/roundToRubles'

export const Cart: FC = () => {
    const {increaseCartItemsCount, decreaseCartItemsCount} = useActions()
    const cart = useAppSelector(state => state.cart.cart)
    const total = cart.reduce((acc, p) => acc + (p.quantity * roundToRubles(p.price)), 0)
    const handleCart = () => alert('Заказ успешно оформлен')

    const mappedCart = cart?.map(p =>
        <div className="product" key={ p.id }>
            <div className="productWrapper">
                <Hit rating={ p.rating.count }/>
                <Img src={ p.image }/>
                <Header propsRate={ p.rating.rate } category={ p.category } count={ p.rating.count }/>
                <Description description={ p.description }/>
                <Price propsPrice={ p.price }/>

                <div className="buttonsWrapper">
                    <ChangeQuantityButton img={ minus } callback={ decreaseCartItemsCount } id={ p.id }/>
                    <div className={ s.quantity }>{ p.quantity } шт.</div>
                    <ChangeQuantityButton img={ plus } callback={ increaseCartItemsCount } id={ p.id }/>
                </div>

                <div className={ s.total }>Итого: &nbsp;{ getPrettierPrice(roundToRubles(p.price) * p.quantity) }</div>
            </div>
        </div>
    )

    return <>
        <RouteButton/>
        <ClearCartButton/>

        <section className="grid">
            { cart.length
                ? mappedCart
                : <div>В корзине пусто</div> }
        </section>

        { cart.length
            ? <div className={ s.checkout }>
                <span>Общая стоимость: { getPrettierPrice(total) }</span>
                <Button text={ 'Оформить заказ' } callback={ handleCart }/>
            </div>
            : ''
        }
    </>
}

export default Cart