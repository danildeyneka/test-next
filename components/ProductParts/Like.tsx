import React, { FC } from 'react'
import Image from 'next/image'
import s from '../styles/productParts.module.scss'
import { useActions, useAppSelector } from '../../hooks'
import { like, liked } from '../../assets'

export const Like: FC<{ id: number }> = ({id}) => {
    const favourites = useAppSelector(state => state.catalog.favourites)
    const favourited = favourites.find(i => i === id)
    const {removeFromFavourites, addToFavourites} = useActions()

    return <div className={ s.like }>
        { favourited
            ? <Image src={ liked } alt="favourite" onClick={ () => removeFromFavourites(id) }/>
            : <Image src={ like } alt="favourite" onClick={ () => addToFavourites(id) }/>
        }
    </div>
}