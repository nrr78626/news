"use client"
import React from 'react'
import Marquee from "react-fast-marquee"
import Link from 'next/link'
import { useNews } from '@/context/NewsProvider'

const Headlines = () => {
    const {allNews,isLoading,isError} = useNews()
    
    return (
        <div className='bg-red-50 shadow flex flex-wrap'>
            <div className='flex md:w-[170px] w-full bg-red-500 relative after:absolute after:bg-red-500 after:w-[20px] after:left-[160px] after:skew-x-[20deg] after:top-0 after:bottom-0 after:z-30'>
                <div className='md:pl-8 pl-4 w-full py-2 flex justify-start items-center gap-x-1'>
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-50 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-100"></span>
                    </span>
                    <h2 className='text-sm font-semibold text-red-50'>Headlines</h2>
                </div>
            </div>
            <div className='flex md:w-[calc(100%-170px)] w-full'>
                <div className='flex w-full justify-start items-center '>
                    <Marquee>
                        {allNews.map((h:any, i:any) => (
                            <Link href={"#"} key={i} className='py-1 block font-semibold hover:text-red-500 pr-12 text-sm'>
                               {h.title}
                            </Link>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Headlines