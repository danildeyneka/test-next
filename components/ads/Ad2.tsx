import { FC } from 'react'
import s from '../styles/ads.module.scss'
import Image from 'next/image'
import whiteCircle from '../../assets/ads/whiteCircle.svg'
import ad2 from '../../assets/ads/ad2.png'

export const Ad2: FC = () => {

    return <div className={ s.adBlock }>
        <div className={ s.ad2 }>
            <div className={ s.discount }>
                <span>10%</span>
            </div>
            <span>Скидка</span>
            <p>на периферию для компьютера</p>
            <button className={ s.button }>Выбрать</button>
            <Image src={ whiteCircle } alt="circle"/>
        </div>
        <Image src={ ad2 } alt="ad" priority={ true }/>
    </div>
}