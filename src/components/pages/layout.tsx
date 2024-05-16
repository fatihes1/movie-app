import {Navbar} from "@/components/common/navbar.tsx";
import {FC, useState} from "react";
import {Home} from "@/components/pages/home.tsx";

export const Layout:FC = () => {
    const [search, setSearch] = useState<string>('pokemon')
    return (
        <div className={'h-dvh'}>
            <Navbar handleOnChangeSearch={setSearch}/>
            <Home search={search} />
        </div>
    )
}