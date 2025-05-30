import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GuestLayout() {
    return (
        <div id="app-container" className="bg-gray-100 min-h-screen flex">
            <div id="main-content" className="flex-1 p-4">
                <Header />
                
                <Outlet />
                <Footer/>
            </div>
        </div>
    )
}