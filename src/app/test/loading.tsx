
import Link from "next/link";
import { ClearCacheButton } from '../../components/clear-cache';

export default async function Test() {
  return (
    <div>
      <Link href="/">Home</Link>
      <ClearCacheButton />
      <h1>Test Page</h1>
      <p>This is a test page to demonstrate functionality.</p>
      <div>Loading...</div>
    </div>
  );
}
