import Link from "next/link";

// dynamic
//export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div>
      <Link prefetch href="/test">Test</Link>
      <h1>Welcome to My App</h1>
      <p>This is the home page of my application.</p>
      <p>Feel free to explore the features and functionalities.</p>
      <p>Enjoy your stay!</p>
    </div>
  );
}
