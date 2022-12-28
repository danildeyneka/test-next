import { FC } from 'react'
import s from '../styles/productParts.module.scss'
import { getPrettierPrice } from '../../utils/addSpacesInNumber'
import { roundToRubles } from '../../utils/roundToRubles'

export const Price: FC<{ propsPrice: number }> = ({propsPrice}) => {
    const price = getPrettierPrice(roundToRubles(propsPrice))

    return <span className={ s.price }>
        { price } ₽
        <span>&nbsp; /шт.</span>
    </span>
}