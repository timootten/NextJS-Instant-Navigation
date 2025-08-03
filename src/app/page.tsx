"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
// dynamic
export const dynamic = "force-dynamic";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Link href="/test">Test</Link>
      <button onClick={() => {
        console.log("Clearing cache...");
        router.refresh();
      }}>Clear Cache</button>
      <h1>Welcome to My App</h1>
      <p>This is the home page of my application.</p>
      <p>Feel free to explore the features and functionalities.</p>
      <p>Enjoy your stay!</p>
    </div>
  );
}
