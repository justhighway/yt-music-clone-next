import { sleep } from "@/lib/utils";

export default async function HomePage() {
  // await sleep(3000);

  throw new Error("My error");
  return <div>HomePage</div>;
}
