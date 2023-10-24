import { Button } from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid h-screen place-items-center">
      <Button asChild={true} size="sm">
        <Link href="/dashboard">Go to dashboard</Link>
      </Button>
    </div>
  );
}
