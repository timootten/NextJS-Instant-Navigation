import { setTimeout } from "timers/promises";

export const dynamic = "force-dynamic"; // important!
export const fetchCache = "force-no-store"; // ensures fresh eval
export const revalidate = 0; // no revalidation

export const DataComponent = async () => {
  await setTimeout(1000); // Simulate a delay for demonstration purposes

  const currentTime = new Date().toLocaleTimeString();
  console.log(`Test page loaded at: ${currentTime}`);

  return (
    <p>Current time: {currentTime}</p>
  );
}