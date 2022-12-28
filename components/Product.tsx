import { FC } from 'react'
import { CartButtons, Description, Header, Hit, Img, Like, Price } from './ProductParts'
import { productT } from '../@types/api.types'

export const Product: FC<{ p: productT }> = ({p}) => {

    return <div className="product">
        <div className="productWrapper">
            <Hit rating={ p.rating.count }/>
            <Img src={ p.image }/>
            <Header propsRate={ p.rating.rate } category={ p.category } count={ p.rating.count }/>
            <Description description={ p.description }/>
            <Price propsPrice={ p.price }/>
            <div className="buttonsWrapper">
                <CartButtons p={ p }/>
                <Like id={ p.id }/>
            </div>
        </div>
    </div>
}