import { instance } from './index'

export const catalogApi = {
    getProducts: () => {
        return instance.get('products')
            .then(res => res.data)
            .catch(err => console.error(err))
    }
}