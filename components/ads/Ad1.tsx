import { FC } from 'react'
import s from '../styles/ads.module.scss'
import Image from 'next/image'
import ad1 from '../../assets/ads/ad1.png'
import circle from '../../assets/ads/circle.svg'

export const Ad1: FC = () => {

    return <div className={ s.adBlock }>
        <Image src={ ad1 } alt="ad"/>
        <div className={ s.ad1 }>
            <div className={ s.discount }>
                <span>- 25%</span>
            </div>
            <p>на товары для кабинета</p>
            <button className={ s.button }>Выбрать</button>
            <Image src={ circle } alt="circle" priority={ true }/>
        </div>
    </div>
}