'use client'
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import PasswordInput from "./PasswordInput";
import LoadingSubmit from "./LoadingSubmit";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import request from "@/service/request";

export default function SignupForm() {
    const form = useForm({
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirmPassword: "",
          },
    })
    
    const { toast } = useToast()
    const router = useRouter()

    async function onSubmit(payload) {
        console.log(payload);
        const { data, isSuccess } = await request.httpRequest('post', '/auth/signup', payload)

        if (!isSuccess || data.error !== undefined) {
            toast({
                title: data.error,
                description: '',
            })
            return;
        }
        toast({
            title: "Account Created Successfully",
            description: "",
        })
        router.push('/login')
    }

    return (
        <div>
            <Form {...form}>
                <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex w-full gap-2">
                        <FormField
                            control={form.control}
                            name="first_name"
                            render={({ field }) => (
                                <div className="flex-1 grid gap-2">
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Jane" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </div>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="last_name"
                            render={({ field }) => (
                                <div className="flex-1 grid gap-2">
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </div>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="you@example.com"
                                        type="email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <PasswordInput form={form} includeForgotPasswordLink={true} /> 

                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="confirm password"
                                        type="password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* {message ? <p className="text-red-600">{message}</p> : null} */}
                    <LoadingSubmit buttonTitle={'Get Started'} />
                </form>
            </Form>
        </div>
    )
}