import Head from 'next/head'

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto items-center justify-center w-full">
      <Head>
        <title>Thirdweb-Unocss Starter Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A starter template for web3 development using thirdweb, paired with unocss as frontend librabry." />
        <meta name="keywords" content="web3, unocss, thirdweb, ethereum, sdk, nextjs" />
      </Head>
      <div>
        <h1 className="heading text-violet-600 text-4xl">Thirdweb-Unocss Starter Template</h1>
        <p>A starter template for web3 development using thirdweb, paired with unocss as frontend librabry.</p>
      </div>
    </div>
  )
}
