import DashboardHeader from "@/components/DashBoardHeader";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
    return (
        <div className="h-svh overflow-hidden">
            <DashboardHeader />
            <main className="flex overflow-hidden" style={{height:'calc(100vh - 61px)'}}>
                <Sidebar />
                <div style={{background:'#faf9ff'}} className="w-full h-full">
                {children}
                </div>
            </main>
        </div>
    )
}