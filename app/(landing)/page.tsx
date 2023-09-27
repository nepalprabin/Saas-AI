import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
      // <p className="text-6xl">Hello AI Saas</p>
      // <Button variant="destructive"> LandingPage</Button>
    <div>
        <div>
          <h3>Landing Page</h3>
            <Link href="/sign-in">
              <Button>
                Sign In
                </Button>
            </Link>
            <Link href="/sign-up">
              <Button>
                Register
                </Button>
            </Link>
        </div>
    </div>
  );
}
