import { FC } from 'react'
import s from '../styles/productParts.module.scss'

export const Description: FC<{ description: string }> = ({description}) => {

    return <p className={ s.desc }>{ description }</p>
}