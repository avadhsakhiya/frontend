import { NextResponse } from 'next/server'
import auth from './store/auth';
 
const protectedRoutes = ["/dashboard"];

// This function can be marked `async` if using `await` inside
export function middleware(req) {
//     console.log(auth.user == undefined && protectedRoutes.includes(req.nextUrl.pathname),auth.user);
    
//     if (auth.user == undefined && protectedRoutes.includes(req.nextUrl.pathname)) {
//         const absoluteURL = new URL("/", req.nextUrl.origin);
//         return NextResponse.redirect(absoluteURL.toString());   
//     }
}