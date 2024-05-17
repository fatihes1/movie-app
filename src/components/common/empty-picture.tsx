import {FC} from "react";
import {ImageOff} from "lucide-react";

export const EmptyPicture:FC = () => {
    return (
        <div className={'w-full h-40 bg-gray-400 rounded-t-lg text-white flex flex-row justify-center items-center'}>
            <ImageOff className={'w-8 h-8'}/>
        </div>
    )
}