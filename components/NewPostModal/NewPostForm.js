'use client'
import { useForm } from "react-hook-form"
import { Form } from "../ui/form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button"
import LoadingSubmit from "../LoadingSubmit"
import request from "@/service/request";
import { useToast } from "@/hooks/use-toast";

export default function NewPostForm({Toggle}) {
    const form = useForm({
        defaultValues: {
            keywords: "",
            country: "",
            language: ""
        },
    })
    const { toast } = useToast()
    async function onSubmit(payload){
        const { data, isSuccess } = await request.httpRequest('post', '/content/create', payload)  
        if (!isSuccess || data.error !== undefined) {
            toast({
                title: data.error,
                description: '',
            })
            return;
        }
        toast({
            title: "Content Created Successfully",
            description: "",
        })
        Toggle()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div>
                    <Tabs defaultValue="account">
                        <TabsList>
                            <TabsTrigger value="Keyword"> New content</TabsTrigger>
                            <TabsTrigger value="Webpage"> Optimize content</TabsTrigger>
                            <TabsTrigger value="Video">Video To Content</TabsTrigger>
                        </TabsList>
                        <TabsContent value="Keyword">
                            <div className="grid grid-cols-2 w-full gap-3">
                                <FormField
                                    control={form.control}
                                    name="keywords"
                                    render={({ field }) => (
                                        <div className="flex-1 grid gap-2">
                                            <FormItem>
                                                <FormLabel>Keyword</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="you@example.com" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        </div>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="country"
                                    render={({ field }) => (
                                        <div className="flex-1 grid gap-2">
                                            <FormItem>
                                                <FormLabel>Country</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="you@example.com" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        </div>
                                    )}
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="Webpage">
                            <div>
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
                                <div className="grid grid-cols-2 w-full gap-3">
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
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="Video">Change your password here.</TabsContent>
                    </Tabs>
                </div>
                <div className="mt-4 flex justify-end">
                    <LoadingSubmit buttonTitle="Start" />
                </div>
            </form>
        </Form>
    )
}