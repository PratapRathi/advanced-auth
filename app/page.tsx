import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";


const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className)}>🔐Auth</h1>
        <p className="text-white text-lg">A Simple authentication service</p>
        <div>
          <LoginButton><Button variant={"secondary"} className="lg">Sign In</Button></LoginButton>
        </div>
      </div>
    </main>
  );
}

