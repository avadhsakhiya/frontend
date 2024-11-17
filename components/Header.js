'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import auth from "@/store/auth"
export default function Header() {
    return (
        <header>
            <div className="flex justify-between py-4 items-center">
                <div>Logo</div>
                <nav>
                    <ul className="flex gap-10 items-center font-medium text-lg text-muted-foreground hover:text-foreground sm:text-sm">
                        <li>
                            <Link
                                href={''}
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-lg text-muted-foreground hover:text-foreground sm:text-sm"
                            >Feature</Link>
                        </li>
                        <li>
                            <Link
                                href={''}
                                target="_blank"
                                rel="noreferrer"
                            >Pricing</Link>
                        </li>
                        <li>
                            <Link
                                href={''}
                                target="_blank"
                                rel="noreferrer"
                            >Blog</Link>
                        </li>
                        <li>
                            <Button type="button">
                            <Link
                                href={auth.hasLogin() ? '/dashboard' :'/login'}
                                rel="noreferrer"
                            >{auth.hasLogin() ? 'Go To Dashboard' :'Get Started'}</Link>
                                </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}