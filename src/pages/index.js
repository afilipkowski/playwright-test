// pages/index.js
import Link from 'next/link';
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Playwright Test</title>
      </Head>
      <h1>Home Page</h1>
      <Link href="/subpage">
        Go to Subpage
      </Link>
    </div>
  );
}
