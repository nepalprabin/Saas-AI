import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
      // <p className="text-6xl">Hello AI Saas</p>
      <div>
        <Button variant="destructive"> Dashboard</Button>
        <UserButton  afterSignOutUrl="/"/>
      </div>
  )
}
