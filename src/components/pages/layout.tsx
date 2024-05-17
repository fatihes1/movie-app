import {Navbar} from "@/components/common/navbar.tsx";
import {FC} from "react";
import {Home} from "@/components/pages/home.tsx";

export const Layout:FC = () => {
    return (
        <div className={'h-dvh bg-east-bay-900'}>
            <Navbar/>
            <Home />
        </div>
    )
}