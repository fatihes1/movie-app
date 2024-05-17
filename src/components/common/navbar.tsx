import {FC, useContext} from "react";
import {Button} from "@/components/ui/button.tsx";
import {Home, Search} from "lucide-react";
import {MovieContext} from "@/providers/movie-provider.tsx";
import {SearchDialog} from "@/components/common/search-dialog.tsx";
import {useNavigate} from "react-router-dom";


export const Navbar:FC = () => {
    const { setShowSearchDialog } = useContext(MovieContext);
    const navigate = useNavigate()

    return (
        <nav className="h-16 w-full flex flex-row bg-cloud-burst-950">
            <div className={'flex flex-row justify-center items-center ml-4'} onClick={() => navigate('/')}>
                <Button className={'bg-cloud-burst-800 px-2 py-2 text-kimberly-400 hover:bg-cloud-burst-950 hover:border-t-tacao-300 hover:text-tacao-300'}><Home /></Button>
            </div>
            <div className="container flex flex-row justify-center items-center h-full">
                <Button className="mr-4 bg-transparent border-kimberly-600 text-kimberly-600 hover:bg-transparent hover:border-kimberly-500 hover:text-kimberly-500 py-5 px-10 text-lg" variant="outline" onClick={() => {
                    setShowSearchDialog(true)
                }}>
                    Search a Movie <Search className="w-4 h-4 ml-7" />
                </Button>
                <SearchDialog />
            </div>
        </nav>
    )
}