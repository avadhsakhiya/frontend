import { NextResponse } from 'next/server';

export function middleware(request) {
    // Check for a token in cookies
    const userToken = request.cookies.get('token')?.value;

    // Redirect to login if no token is found
    if (!userToken) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Allow access to protected routes
    return NextResponse.next();
}

// Define which routes this middleware should apply to
export const config = {
    matcher: ['/protected-route', '/another-protected-route'], // Add your protected routes here
};