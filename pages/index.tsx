import Head from 'next/head'

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto items-center justify-center w-full">
      <Head>
        <title>Thirdweb-UnoCSS Starter Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A starter template for web3 development using thirdweb, paired with unocss as frontend librabry." />
        <meta name="keywords" content="web3, unocss, thirdweb, ethereum, sdk, nextjs" />
      </Head>
      <div className="space-y-2xl">
        <h1 className="heading text-5xl text-center">Thirdweb-UnoCSS Starter Template</h1>
        <p className="text-center">A starter template for web3 development using thirdweb, paired with unocss as frontend library.</p>
      </div>
    </div>
  )
}
