import Sidebar from "./Sidebar/Sidebar";
import type { ReactNode } from "react";

type AppLayoutProps = {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )
}