import { FC } from 'react'
import { RouteButton } from '../components/common/Buttons'
import { useAppSelector } from '../hooks'
import { Product } from '../components/Product'

export const Favourites: FC = () => {
    const {products, favourites} = useAppSelector(state => state.catalog)

    const mappedFavs = products?.map(p => favourites.includes(p.id) && <Product p={ p } key={ p.id }/>)
    // to keep object quantity rerendering we have to work with the same object from catalog

    return <>
        <RouteButton/>
        <RouteButton route={ 'cart' } text={ 'В корзину' }/>

        <section className="grid">
            { favourites.length
                ? mappedFavs
                : <div>Нет избранных товаров</div>
            }
        </section>
    </>
}

export default Favourites