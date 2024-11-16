import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
export default function Footer() {
    return (
        <footer className="mt-10 grid grid-cols-2 justify-between pb-16 pt-10">
            <div>
                <div>Logo</div>
                <p className="text-muted-foreground text-sm max-w-md mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit.</p>
                <ul className="flex items-center gap-4 mt-5">
                    <li><FaTwitter className="text-muted-foreground hover:text-foreground"/></li>
                    <li><FaFacebook className="text-muted-foreground hover:text-foreground" /></li>
                    <li><FaLinkedinIn  className="text-muted-foreground hover:text-foreground" /></li>
                    <li><FaSquareThreads  className="text-muted-foreground hover:text-foreground" /></li>
                </ul>
            </div>
            <div className="flex flex-wrap justify-around">
                <div className="flex flex-col mt-10 basis-1/2 gap-5 md:mt-0 md:basis-auto">
                    <h3 className="font-semibold">Company</h3>
                    <span className="text-sm text-muted-foreground hover:text-foreground">About us</span>
                    <span className="text-sm text-muted-foreground hover:text-foreground">Blog</span>
                    <span className="text-sm text-muted-foreground hover:text-foreground">Contact us</span>
                </div>
                <div className="flex flex-col mt-10 basis-1/2 gap-5 md:mt-0 md:basis-auto">
                    <h3 className="font-semibold">Resources</h3>
                    <span className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</span>
                    <span className="text-sm text-muted-foreground hover:text-foreground">Terms of service</span>
                </div>
            </div>
        </footer>
    )
}