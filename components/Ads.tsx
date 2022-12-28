import { FC } from 'react'
import s from './styles/ads.module.scss'
import { Ad1, Ad2, Arrow, Title } from './ads/index'

export const Ads: FC = () => {

    return <div className={ s.wrapper }>
        <Title/>
        <Arrow/>
        <Ad1/>
        <Ad2/>
    </div>
}