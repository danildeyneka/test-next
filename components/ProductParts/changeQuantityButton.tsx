import React, { FC } from 'react'
import Image from 'next/image'
import s from '../styles/productParts.module.scss'

type props = {
    img: any
    callback: (id: number) => void
    id: number
}

export const ChangeQuantityButton: FC<props> = ({img, callback, id}) => {

    return <Image className={ s.changeQty } src={ img } alt="changeQty" width={ 10 } height={ 10 }
                  onClick={ () => callback(id) }/>
}