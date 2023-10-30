// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/subpage">
        Go to Subpage
      </Link>
    </div>
  );
}
