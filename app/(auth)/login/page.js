import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import LoginForm from "@/components/LoginForm";

export default function LoginPage(){
    return(
        <div>
            <div className="w-full lg:grid lg:grid-cols-8 min-h-screen">
      <div className="hidden bg-muted lg:block col-span-3">
        <Image
          src="/light-pattern.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>

      <div className="flex items-center justify-center py-12 col-span-5">
        <div className="mx-auto grid max-w-lg w-full gap-6 px-4">
          <div className="grid gap-2 text-center">
            <h1 className="text-5xl font-bold text-left">Welcome Back! 👋</h1>
            <p className="text-balance text-left text-muted-foreground">
              Enter Your Credentials to Proceed
            </p>
          </div>
          <Button variant={"outline"} className="space-x-2">
            <FcGoogle />
            <span>Continue with Google</span>
          </Button>
          <Separator />
          <LoginForm />
          <div className="text-center text-sm">
            Already have an account?&nbsp;
            <Link
              href="/signup"
              className="hover:text-muted-foreground hover:underline duration-300 transition-all"
            >
              Sign up here!
            </Link>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}