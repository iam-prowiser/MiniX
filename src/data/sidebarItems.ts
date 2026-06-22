import { Home, Search, Bell, type LucideIcon } from "lucide-react"

type sidebarItems = {
    id: number,
    label: string,
    path: string,
    icon: LucideIcon
}

const sidebarItems: sidebarItems[] = [
    {
        id: 1,
        label: "Home",
        path: "/",
        icon: Home
    },
    {
        id: 2,
        label: "Explore",
        path: '/explore',
        icon: Search
    },
    {
        id: 3,
        label: "Notifications",
        path: '/notifications',
        icon: Bell
    }
]

export default sidebarItems