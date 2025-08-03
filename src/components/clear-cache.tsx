"use client";

import { useRouter } from "next/navigation";

export const ClearCacheButton = () => {
  const router = useRouter();

  const handleClearCache = () => {
    console.log("Clearing cache...");
    router.refresh();
  };

  return (
    <button onClick={handleClearCache}>
      Clear Cache
    </button>
  );
}