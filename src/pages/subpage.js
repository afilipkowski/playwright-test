// pages/subpage.js
import Link from 'next/link';

export default function Subpage() {
  return (
    <div>
      <h1>Subpage</h1>
      <Link href="/">
        Go to Home
      </Link>
    </div>
  );
}
