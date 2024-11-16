'use client'
import { Eye, EyeOff } from "lucide-react";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";

export default function PasswordInput({form,includeForgotPasswordLink}){
    const [showPassword, setShowPassword] = useState(false);
    return (
        <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <div className="flex justify-between items-center">
              <FormLabel>Password</FormLabel>
              {includeForgotPasswordLink && (
                <Link
                  href={"/auth/forgot-password"}
                  className="text-sm text-muted-foreground hover:text-primary hover:underline  duration-300 transition-all"
                >
                  Forgot Password?
                </Link>
              )}
            </div>
            <FormControl>
              <div className="relative">
                <Input
                  placeholder="Password"
                  type={`${showPassword ? "text" : "password"}`}
                  {...field}
                />
                <span className="absolute top-0 right-1">
                  {showPassword ? (
                    <Button
                      type="button"
                      size={"icon"}
                      variant={"ghost"}
                      className="rounded-full"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <Eye className="opacity-80" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      size={"icon"}
                      variant={"ghost"}
                      className="rounded-full"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <EyeOff className="opacity-80" />
                    </Button>
                  )}
                </span>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    )
}