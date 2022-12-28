import { FC } from 'react'
import s from '../styles/common.module.scss'
import { useRouter } from 'next/router'
import { useActions } from '../../hooks'

type props = {
    text?: string
    route?: string
}

export const RouteButton: FC<props> = ({text = 'В каталог', route = '/'}) => {
    const router = useRouter()

    return <button className={ s.button } onClick={ () => router.push(`${ route }`) }>{ text }</button>
}

export const ClearCartButton: FC = () => {
    const {clearCart} = useActions()

    return <button className={ s.button } onClick={ () => clearCart() }>Очистить корзину</button>
}

export const Button: FC<{ text: string, callback: () => void }> = ({text, callback}) => {
    return <button className={ s.button } onClick={ callback }>{ text }</button>
}