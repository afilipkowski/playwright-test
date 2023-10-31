// pages/subpage.js
import Link from 'next/link';
import Head from 'next/head'

export default function Subpage() {
  return (
    <div>
      <Head>
        <title>Playwright Test</title>
      </Head>
      <h1>Subpage</h1>
      <Link href="/">
        Go to Home
      </Link>
    </div>
  );
}
