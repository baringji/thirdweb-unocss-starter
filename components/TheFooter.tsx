import Link from 'next/link'

function TheFooter() {
  return (
    <footer className="w-full py-2">
      <p className="text-center">Copyright 2021-2022. All rights reserved. Powered by <Link href={'https://thirdweb.com'} target="_blank">Thirdweb</Link> & <Link href={'https://uno.antfu.me/'} target="_blank">Unocss</Link>.</p>
    </footer>
  )
}

export default TheFooter
