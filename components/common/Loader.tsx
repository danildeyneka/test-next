import { FC } from 'react'
import ContentLoader from 'react-content-loader'

export const Loader: FC = () => {

    return <ContentLoader
        speed={ 3 }
        width={ 332 }
        height={ 462 }
        viewBox="0 0 332 462"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="56" y="32" rx="5" ry="5" width="220" height="220"/>
        <rect x="29" y="267" rx="6" ry="6" width="100" height="14"/>
        <rect x="154" y="267" rx="6" ry="6" width="150" height="14"/>
        <rect x="29" y="289" rx="6" ry="6" width="250" height="60"/>
        <rect x="29" y="358" rx="6" ry="6" width="105" height="24"/>
        <rect x="29" y="391" rx="25" ry="25" width="175" height="42"/>
        <rect x="267" y="391" rx="25" ry="25" width="42" height="42"/>
    </ContentLoader>
}