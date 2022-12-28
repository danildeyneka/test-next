import Head from 'next/head'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { store } from '../store/store'
import './styles/globals.css'

export default function App({Component, pageProps}: AppProps) {
    return <Provider store={ store }>
        <Head>
            <title>Test Nextjs</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <Component { ...pageProps } />
    </Provider>
}
