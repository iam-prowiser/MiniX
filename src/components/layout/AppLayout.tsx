import Sidebar from "./Sidebar/Sidebar";


export default function AppLayout({ children }) {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )
}