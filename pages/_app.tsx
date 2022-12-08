import '@unocss/reset/tailwind.css'
import 'uno.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'

import Head from 'next/head'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'

import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Mainnet}
    /*
    chainRpc={{ [ChainId.Mainnet]: 'https://mainnet.infura.io/v3' }}
    dAppMeta={{
      name: 'Thirdweb-UnoCSS Starter Template',
      description: 'A starter template for web3 development using thirdweb, paired with unocss as frontend librabry.',
      isDarkMode: false,
      logoUrl: 'https://thirdweb-unocss-starter.netlify.app/logo.png',
      url: 'https://thirdweb-unocss-starter.netlify.app',
    }}
    supportedChains={[ChainId.Mainnet]}
    walletConnectors={[
      'walletConnect',
      { name: 'injected', options: { shimDisconnect: false } },
      {
        name: 'walletLink',
        options: {
          appName: 'Thirdweb-UnoCSS Starter Template',
        },
      },
      {
        name: 'magic',
        options: {
          apiKey: 'your-magic-api-key',
          rpcUrls: {
            [ChainId.Mainnet]: 'https://mainnet.infura.io/v3',
          },
        },
      },
    ]}
    sdkOptions={{
      gasSettings: { maxPriceInGwei: 500, speed: 'fast' },
      readonlySettings: {
        chainId: ChainId.Mainnet,
        rpcUrl: 'https://mainnet.infura.io/v3',
      },
      gasless: {
        openzeppelin: {
          relayerUrl: 'your-relayer-url',
        },
      },
    }}
    */
    >
      <Head>
        <title>Thirdweb-UnoCSS Starter Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A starter template for web3 development using thirdweb, paired with unocss as frontend librabry." />
        <meta name="keywords" content="web3, unocss, thirdweb, ethereum, sdk, nextjs" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="bg-violet-600 text-violet-50 text-xl font-sans flex flex-col min-h-screen w-full relative px-6 md:px-0">
        <TheHeader />
        <main className="flex-grow flex items-center my-16">
          <Component {...pageProps} />
        </main>
        <TheFooter />
      </div>
    </ThirdwebProvider>
  )
}
