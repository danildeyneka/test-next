import React, { FC, memo, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { setProducts } from '../store/catalogSlice'
import { useAppDispatch, useAppSelector } from '../hooks'
import { Ads } from '../components/Ads'
import { cart, favourites } from '../assets'
import s from './styles/index.module.scss'
import { Product } from '../components/Product'
import { Loader } from '../components/common/Loader'

const Index: FC = memo(() => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const {products, awaiting} = useAppSelector(state => state.catalog)

    const loader = [...Array(9)].map((_, i) => <Loader key={ i }/>)
    const mappedProducts = products?.map(p => <Product p={ p } key={ p.id }/>)

    useEffect(() => {
        if (!products.length) dispatch(setProducts())
    }, [])

    return <>
        <nav className={ s.nav }>
            <Image src={ cart } alt="cart" onClick={ () => router.push('cart') }/>
            <Image src={ favourites } alt="favourites" onClick={ () => router.push('favourites') }/>
        </nav>
        <main className="grid">
            <Ads/>
            { awaiting ? loader : mappedProducts }
        </main>
    </>
})

Index.displayName = 'Test Nextjs'

export default Index