import {FC} from "react";
import {Search} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export const Navbar:FC = () => {
    return (
        <nav className="h-16 w-full bg-cloud-burst-950">
            <div className="container flex flex-row justify-center items-center h-full">
                <Dialog>
                    <DialogTrigger className={'bg-transparent border-east-bay-500 text-east-bay-500 flex flex-row justify-center items-center border px-4 py-2 rounded-lg'}>
                            Search For a Movie
                            <Search className={'h-4 w-4 ml-4'} />
                    </DialogTrigger>
                    <DialogContent className={'bg-cloud-burst-950 border-red-500'}>
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            </div>
        </nav>
    )
}