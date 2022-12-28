import { FC } from 'react'
import s from '../styles/productParts.module.scss'

export const Hit: FC<{ rating: number }> = ({rating}) => {

    return <>
        { rating > 300 && <div className={ s.hit }><span>Хит</span></div> }
    </>
}