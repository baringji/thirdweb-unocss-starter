import Link from 'next/link'

function TheFooter() {
  return (
    <footer className="w-full py-2">
      <p className="text-center">Copyright 2021-2022. All rights reserved. Powered by <Link href={'https://thirdweb.com'}>Thirdweb</Link> & <Link href={'https://uno.antfu.me/'}>Unocss</Link></p>
    </footer>
  )
}

export default TheFooter
