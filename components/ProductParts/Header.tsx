import { FC, useMemo } from 'react'
import Image from 'next/image'
import { nanoid } from '@reduxjs/toolkit'
import s from '../styles/productParts.module.scss'
import { getNounDeclension } from '../../utils/nounDeclension'
import { redStar, star } from '../../assets/'

type props = {
    propsRate: number
    category: string
    count: number

}
const reviews = ['отзыв', 'отзыва', 'отзывов'] //

export const Header: FC<props> = ({propsRate, category, count}) => {

    const rate = Math.round(propsRate)
    const rating = useMemo(() => [...Array(rate)].map(() =>
        <Image src={ redStar } alt="rating" width={ 15 } height={ 14.5 }
               key={ nanoid() }/>) // maps red star product rating
        .concat([...Array(5 - rate)].map(() =>
            <Image src={ star } alt="rating" width={ 15 } height={ 14.5 } key={ nanoid() }/>)), [propsRate]) // joins remaining white stars to prev arr

    return <div className={ s.header }>
        <span>{ category }</span>

        <div className={ s.rating }>
            { rating }
            <span className={ s.reviews }>{ count }
                <span> { getNounDeclension(count, reviews) }</span>
            </span>
        </div>
    </div>
}
