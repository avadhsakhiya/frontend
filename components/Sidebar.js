export default function Sidebar(){
    return(
        <aside className="right-0 top-0 z-50 h-full w-[320px] border-l bg-background p-6 md:static md:w-[260px] md:translate-x-0 md:border-l-0 md:border-r transition-transform translate-x-full">
        <div className="flex h-full flex-col justify-between">
           <div className="flex flex-col gap-1 pt-12 md:pt-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x absolute right-5 top-5 cursor-pointer md:hidden">
                 <path d="M18 6 6 18"></path>
                 <path d="m6 6 12 12"></path>
              </svg>
              <a className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 font-medium text-primary bg-secondary" href="/dashboard">
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                    <path d="M 1 3 C 1 1.895 1.895 1 3 1 L 5.5 1 C 6.052 1 6.5 1.448 6.5 2 L 6.5 6 C 6.5 6.276 6.276 6.5 6 6.5 L 2 6.5 C 1.448 6.5 1 6.052 1 5.5 Z M 11 1 C 12.105 1 13 1.895 13 3 L 13 5.5 C 13 6.052 12.552 6.5 12 6.5 L 8 6.5 C 7.724 6.5 7.5 6.276 7.5 6 L 7.5 2 C 7.5 1.448 7.948 1 8.5 1 Z M 13 11 C 13 12.105 12.105 13 11 13 L 8.5 13 C 7.948 13 7.5 12.552 7.5 12 L 7.5 8 C 7.5 7.724 7.724 7.5 8 7.5 L 12 7.5 C 12.552 7.5 13 7.948 13 8.5 Z M 3 13 C 1.895 13 1 12.105 1 11 L 1 8.5 C 1 7.948 1.448 7.5 2 7.5 L 6 7.5 C 6.276 7.5 6.5 7.724 6.5 8 L 6.5 12 C 6.5 12.552 6.052 13 5.5 13 Z" fill="currentColor"></path>
                 </svg>
                 <span className="text-foreground">Dashboard</span>
              </a>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 mt-2 duration-300 animate-in fade-in">Upgrade</button>
           </div>
           <div className="flex flex-col gap-3">
              <a href="https://x.com/mattiapomelli/status/1846212045680590930" target="_blank" rel="noopener noreferrer">
                 <div className="rounded-lg text-card-foreground bg-primary/10 duration-300 animate-in fade-in hover:bg-primary/15 dark:bg-card">
                    <div className="flex flex-col items-start gap-2 p-3">
                       <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent gap-1 bg-primary/20 text-primary hover:bg-primary/20">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles size-3 fill-primary">
                             <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                             <path d="M20 3v4"></path>
                             <path d="M22 5h-4"></path>
                             <path d="M4 17v2"></path>
                             <path d="M5 18H3"></path>
                          </svg>
                          New Feature
                       </div>
                       <div className="flex w-full items-center justify-between">
                          <h4 className="font-semibold">Shadcn CLI Support</h4>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right size-4">
                             <path d="m9 18 6-6-6-6"></path>
                          </svg>
                       </div>
                       <p className="text-sm text-foreground/80">You can now add any block to your codebase with one command.</p>
                    </div>
                 </div>
              </a>
           </div>
        </div>
     </aside>
    )
}