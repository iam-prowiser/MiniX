import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AppLayout from "../components/layout/AppLayout";
import Explore from "../pages/Explore";
import Notifications from "../pages/Notifications";
import Messages from "../pages/Messages";
import Bookmarks from "../pages/Bookmarks";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/explore" element={<Explore />} />
                        <Route path="/notifications" element={<Notifications />} />
                        <Route path="/messages" element={<Messages />} />
                        <Route path="/bookmarks" element={<Bookmarks />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/settings" element={<Settings />} />
                </Route>               
            </Routes>
        </BrowserRouter>
    )
}