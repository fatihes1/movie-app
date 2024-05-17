import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";
import {FC} from "react";

interface PaginationProps {
    currentPage: number;
    pageCount: number;
    onPageChange: (page: number) => void;
}

export const CustomPagination:FC<PaginationProps> = ({ currentPage, pageCount, onPageChange }) => {
    const getPageNumbers = () => {
        const pageNumbers = [];
        const totalNumbers = 3; // Number of page numbers to show (excluding ellipses)
        const totalBlocks = totalNumbers + 1; // Total blocks to show (including ellipses)

        if (pageCount > totalBlocks) {
            const startPage = Math.max(2, currentPage - 1);
            const endPage = Math.min(pageCount - 1, currentPage + 1);

            const pages = [];

            if (currentPage > 4) {
                pages.push(1);
                pages.push('ellipsis1');
            } else {
                for (let i = 1; i < startPage; i++) {
                    pages.push(i);
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (currentPage < pageCount - 3) {
                pages.push('ellipsis2');
                pages.push(pageCount);
            } else {
                for (let i = endPage + 1; i <= pageCount; i++) {
                    pages.push(i);
                }
            }

            return pages;
        }

        for (let i = 1; i <= pageCount; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    return (
        <Pagination className={'pt-3 pb-3 bg-east-bay-900'}>
            <PaginationContent>
                {
                    currentPage !== 1 && (
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                className={'text-kimberly-400 hover:text-tacao-400 hover:bg-kimberly-700'}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (currentPage > 1) onPageChange(currentPage - 1);
                                }}

                            />
                        </PaginationItem>
                    )
                }
                {pageNumbers.map((number, index) =>
                    number === 'ellipsis1' || number === 'ellipsis2' ? (
                        <PaginationItem key={index}>
                            <PaginationEllipsis className={'text-kimberly-400'} />
                        </PaginationItem>
                    ) : (
                        <PaginationItem key={index}>
                            <PaginationLink
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onPageChange(number as number);
                                }}
                                isActive={number === currentPage}
                                className={number === currentPage ? 'bg-kimberly-600 text-tacao-300 border-tacao-300 hover:text-tacao-400 hover:bg-kimberly-700' : 'hover:text-tacao-400 hover:bg-kimberly-700 text-kimberly-400'}
                            >
                                {number}
                            </PaginationLink>
                        </PaginationItem>
                    )
                )}
                {
                    currentPage !== pageCount && (
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                className={'text-kimberly-400 hover:text-tacao-400 hover:bg-kimberly-700'}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (currentPage < pageCount) onPageChange(currentPage + 1);
                                }}
                            />
                        </PaginationItem>
                    )
                }

            </PaginationContent>
        </Pagination>
    );
}