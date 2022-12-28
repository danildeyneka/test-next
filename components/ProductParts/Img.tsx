import { FC } from 'react'
import Image from 'next/image'
import s from '../styles/productParts.module.scss'

export const Img: FC<{ src: string }> = ({src}) => {

    return <Image className={ s.image } src={ src } alt="productImg" width={ 220 } height={ 220 }
                  priority={ true }/>
}
