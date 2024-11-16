import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function BlogList() {
    return (
        <section className="py-24 gap-6 sm:gap-7">
            <SectionHeader heading="Articles" title="Our Blog" description="Learn how to build beautiful landing pages fast."/>
            <div className="mt-10 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                <div className="shadow-lg rounded-lg overflow-hidden flex flex-col gap-5 px-0">
                    <div className="w-full h-52 relative">
                        <Image
                            src={"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"}
                            fill 
                            style={{ objectFit: 'cover' }}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="flex flex-col gap-5 px-5 mb-4">
                        <h3 className="text-lg font-semibold">How to build a beautiful landing page in minutes</h3>
                        <p className="mb-auto text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit.</p>
                    </div>
                </div>
                <div className="shadow-lg rounded-lg overflow-hidden flex flex-col gap-5 px-0">
                    <div className="w-full h-52 relative">
                        <Image
                            src={"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"}  
                            fill 
                            style={{ objectFit: 'cover' }}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="flex flex-col gap-5 px-5 mb-4">
                        <h3 className="text-lg font-semibold">How to build a beautiful landing page in minutes</h3>
                        <p className="mb-auto text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit.</p>
                    </div>
                </div>
                <div className="shadow-lg rounded-lg overflow-hidden flex flex-col gap-5 px-0">
                    <div className="w-full h-52 relative">
                        <Image
                            src={"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"}
                            fill 
                            style={{ objectFit: 'cover' }}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="flex flex-col gap-5 px-5 mb-4">
                        <h3 className="text-lg font-semibold">How to build a beautiful landing page in minutes</h3>
                        <p className="mb-auto text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}