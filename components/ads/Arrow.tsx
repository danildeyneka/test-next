import { FC } from 'react'
import s from '../styles/ads.module.scss'
import Image from 'next/image'
import { arrow } from '../../assets'

export const Arrow: FC = () => {

    return <div className={ s.arrow }>
        <Image src={ arrow } alt="arrow" priority={true}/>
    </div>
}