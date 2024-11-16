export default function NotFound() {
    return (
        <div className="m-auto flex h-svh w-full flex-col items-center justify-center gap-2">
            <h1 className="text-[7rem] font-bold leading-tight">404</h1>
            <span className="font-medium">Oops! Page Not Found!</span>
            <p className="text-center text-muted-foreground">It seems like the page you're looking for <br />does not exist or might have been removed.</p>
            <div className="mt-6 flex gap-4">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">Go Back</button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">Back to Home</button>
            </div>
        </div>
    )
}