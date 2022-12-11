import Head from 'next/head'

export default function ThirdwebEmbedLink() {
  return (
    <div className="max-w-screen-xl mx-auto items-center justify-center w-full">
      <Head>
        <title>Using Thirdweb Embed Link</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A starter template for web3 development using thirdweb, paired with unocss as frontend library." />
        <meta name="keywords" content="web3, unocss, thirdweb, ethereum, sdk, nextjs" />
      </Head>
      <div className="space-y-2xl">
        <h1 className="heading text-5xl text-center">Using Thirdweb Embed Link</h1>
        <p className="font-bold">Instructions</p>
        <ol className="list-decimal list-inside text-lg space-y-1">
          <li>Login to thirdweb dashboard.</li>
          <li>Navigate to Embed, copy the embed code and paste it in here.</li>
        </ol>
        <iframe className="max-w-screen-sm min-h-screen-sm w-full h-full mx-auto"
          src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc721.html?contract=0xb594D831Df7Ce4F75061aD765C9eD6757B933d44&chainId=5"
        ></iframe>
      </div>
    </div>
  )
}
