import {FC} from "react";

export const EmptyResult:FC = () => {
    return (
        <div className={'h-72 flex flex-col justify-center items-center gap-y-5'}>
            <div className={'flex flex-col items-center'}>
                <h1 className={'text-3xl text-start mt-3 font-medium text-tacao-300'}>No Result Found</h1>
                <h1 className={'text-xl text-start mt-3 mb-2 font-medium text-tacao-300'}>Try search something
                    different </h1>
            </div>
        </div>
    )
}