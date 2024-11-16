import SectionHeader from "./SectionHeader";
import { Button } from "./ui/button";
import { FcApproval } from "react-icons/fc";

export default function Pricing() {
  return (
    <section className="py-24 gap-6 sm:gap-7">
      <SectionHeader heading="Pricing" title="Simple pricing" description="Pricing that fits your needs and helps you scale." />
      <div className="mt-7 grid w-full grid-cols-1 gap-7 lg:grid-cols-3">
        <div className="relative shadow-lg rounded-xl">
          <div className="divide-y p-0">
            <div className="flex flex-col px-7 py-10 items-center">
              <h4 className="font-heading text-2xl font-semibold text-foreground">Basic</h4>
              <p className="mt-2 text-muted-foreground">For side project.</p>
              <div className="mt-5">
                <span className="font-heading text-5xl font-semibold">$9</span>
                <span className="text-sm">/month</span>
              </div>
              <Button className="mt-10 w-full">Get started</Button>
            </div>
            <ui className="space-y-2 px-7 py-10">
              <li className="flex items-center gap-3">
                <FcApproval />
                <span className="text-muted-foreground">Unlimited projects</span>
              </li>
              <li className="flex items-center gap-3">
                <FcApproval />
                <span className="text-muted-foreground">Unlimited projects</span>
              </li>
              <li className="flex items-center gap-3">
                <FcApproval />
                <span className="text-muted-foreground">Unlimited projects</span>
              </li>
              <li className="flex items-center gap-3">
                <FcApproval />
                <span className="text-muted-foreground">Unlimited projects</span>
              </li>
            </ui>
          </div>
        </div>
        <div className="relative shadow-lg border-2 border-primary rounded-xl">
          <div className="divide-y p-0">
            <div className="flex flex-col px-7 py-10 items-center">
              <span className="absolute inset-x-0 -top-5 mx-auto w-32 rounded-full bg-primary px-3 py-2  text-center text-sm font-semibold text-primary-foreground shadow-md">Most popular</span>
              <h4 className="font-heading text-2xl font-semibold text-foreground">Basic</h4>
              <p className="mt-2 text-muted-foreground">For side project.</p>
              <div className="mt-5">
                <span className="font-heading text-5xl font-semibold">$9</span>
                <span className="text-sm">/month</span>
              </div>
              <Button className="mt-10 w-full">Get started</Button>
            </div>
            <ui className="space-y-2 px-7 py-10">
              <li className="flex items-center gap-3">
                <FcApproval />
                <span className="text-muted-foreground">Unlimited projects</span>
              </li>
              <li className="flex items-center gap-3">
                <FcApproval />
                <span className="text-muted-foreground">Unlimited projects</span>
              </li>
              <li className="flex items-center gap-3">
                <FcApproval />
                <span className="text-muted-foreground">Unlimited projects</span>
              </li>
              <li className="flex items-center gap-3">
                <FcApproval />
                <span className="text-muted-foreground">Unlimited projects</span>
              </li>
            </ui>
          </div>
        </div>
        <div className="relative shadow-lg rounded-xl">
          <div className="divide-y p-0">
            <div className="flex flex-col px-7 py-10 items-center">
              <h4 className="font-heading text-2xl font-semibold text-foreground">Basic</h4>
              <p className="mt-2 text-muted-foreground">For side project.</p>
              <div className="mt-5">
                <span className="font-heading text-5xl font-semibold">$9</span>
                <span className="text-sm">/month</span>
              </div>
              <Button className="mt-10 w-full">Get started</Button>
            </div>
            <ui className="space-y-2 px-7 py-10">
              <li className="flex items-center gap-3">
                <FcApproval />
                <span className="text-muted-foreground">Unlimited projects</span>
              </li>
              <li className="flex items-center gap-3">
                <FcApproval />
                <span className="text-muted-foreground">Unlimited projects</span>
              </li>
              <li className="flex items-center gap-3">
                <FcApproval />
                <span className="text-muted-foreground">Unlimited projects</span>
              </li>
              <li className="flex items-center gap-3">
                <FcApproval />
                <span className="text-muted-foreground">Unlimited projects</span>
              </li>
            </ui>
          </div>
        </div>
      </div>
    </section>
  )
}