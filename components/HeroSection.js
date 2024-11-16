import { Button } from "./ui/button";

export default function HeroSection(){
    return(
       <section className="flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row">
          <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
            <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-left max-w-2xl text-center">Build beautiful landing pages in minutes</h1>
            <p className="max-w-md text-center lg:text-left text-lg text-muted-foreground">Build at the speed of no-code and then export to Next.js & Tailwind code for full customization.</p>
            <div>
                <Button>Get Started</Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">2</div>
       </section>
    )
}