import { Home, Search, Bell, type LucideIcon, Mail, Bookmark, User, Settings } from "lucide-react"

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
    },
    {
        id: 4,
        label: "Messages",
        path: '/messages',
        icon: Mail
    },
    {
        id: 5,
        label: "Bookmarks",
        path: '/bookmarks',
        icon: Bookmark
    },
    {
        id: 6,
        label: "Profile",
        path: '/profile',
        icon: User
    },
    {
        id: 7,
        label: "Settings",
        path: '/settings',
        icon: Settings
    }
]

export default sidebarItems