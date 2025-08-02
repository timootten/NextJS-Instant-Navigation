
import { DataComponent } from "@/components/data-component";
import Link from "next/link";
import { Suspense } from "react";

// force dynamic rendering
export const dynamic = "force-dynamic";

export default async function Test() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Test Page</h1>
      <p>This is a test page to demonstrate functionality.</p>
      <Suspense fallback={<div>Loading...</div>}>
        <DataComponent />
      </Suspense>
    </div>
  );
}
