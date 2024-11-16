import { Button } from "./ui/button";

export default function CallToAction(){
    return(
        <section className="flex flex-col items-center gap-6 py-24 sm:gap-10">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance">Code at the speed of no-code</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-xl text-center">Build at the speed of no-code. Export to Next.js and Tailwind code. Customize without limits.</p>
            <Button>Get Started</Button>
        </section>
    )
}