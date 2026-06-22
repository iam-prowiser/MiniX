import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AppLayout from "../components/layout/AppLayout";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {
                    <AppLayout>
                        <Home />
                    </AppLayout>
                }></Route> 
            </Routes>
        </BrowserRouter>
    )
}