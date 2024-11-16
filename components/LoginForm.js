'use client'
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import LoadingSubmit from "./LoadingSubmit";
import PasswordInput from "./PasswordInput";
import request from "@/service/request";
import { useToast } from "@/hooks/use-toast";
import auth from "@/store/auth";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const form = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
    })
    const { toast } = useToast()
    const router = useRouter()
    async function onSubmit(payload) {
        console.log(payload);
        const { data, isSuccess } = await request.httpRequest('post', '/auth/login', payload)

        if (!isSuccess || data.error !== undefined) {
            toast({
                title: data.error,
                description: '',
            })
            return;
        }
        toast({
            title: "Login Complated Successfully",
            description: "",
        })
        auth.user = data
        localStorage.setItem('user',JSON.stringify(data))
        router.push('/dashboard')
    }
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <div className="flex-1 grid gap-2">
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="you@example.com" {...field} />
                                    </FormControl>
                                </FormItem>
                            </div>
                        )}
                    />
                    <PasswordInput form={form} includeForgotPasswordLink={true} />
                    <LoadingSubmit buttonTitle={'Login'} />
                </form>
            </Form>
        </div>
    )
}