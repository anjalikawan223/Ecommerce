import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function MainLayouts(){
    return(
        <>
        <Header/>

        <main>
            {/* Main Content Area */}
            <Outlet />
        </main>

        <Footer/>
        </>
    )
}