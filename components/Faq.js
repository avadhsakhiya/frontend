import SectionHeader from "./SectionHeader";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./ui/accordion"

export default function FaQ() {
    return (
        <section className="py-24 gap-6 sm:gap-7">
            <SectionHeader heading="Faq" title="Frequently Asked Questions" description="For any other questions, please feel free to contact us." />
            <div>
                <Accordion type="single" collapsible className="w-full mt-6 divide-y max-w-3xl mx-auto">
                    <AccordionItem value="item-1" className="border-b-0">
                        <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">How is Reweb different than tools like Framer or Webflow?</AccordionTrigger>
                        <AccordionContent className="text-lg text-muted-foreground">
                        Reweb is focused on developers and it's built on top of Next.js, Tailwind CSS and Shadcn UI, the most popular tech stack for building landing pages in the React ecosystem. This means that you can export your Reweb website to a Next.js project and continue building your app with the same tech stack.Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-b-0">
                        <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">How is Reweb different than tools like Framer or Webflow?</AccordionTrigger>
                        <AccordionContent className="text-lg text-muted-foreground">
                        Reweb is focused on developers and it's built on top of Next.js, Tailwind CSS and Shadcn UI, the most popular tech stack for building landing pages in the React ecosystem. This means that you can export your Reweb website to a Next.js project and continue building your app with the same tech stack.Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-b-0">
                        <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">How is Reweb different than tools like Framer or Webflow?</AccordionTrigger>
                        <AccordionContent className="text-lg text-muted-foreground">
                        Reweb is focused on developers and it's built on top of Next.js, Tailwind CSS and Shadcn UI, the most popular tech stack for building landing pages in the React ecosystem. This means that you can export your Reweb website to a Next.js project and continue building your app with the same tech stack.Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border-b-0">
                        <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">How is Reweb different than tools like Framer or Webflow?</AccordionTrigger>
                        <AccordionContent className="text-lg text-muted-foreground">
                        Reweb is focused on developers and it's built on top of Next.js, Tailwind CSS and Shadcn UI, the most popular tech stack for building landing pages in the React ecosystem. This means that you can export your Reweb website to a Next.js project and continue building your app with the same tech stack.Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}