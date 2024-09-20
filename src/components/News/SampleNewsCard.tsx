import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SampleNewsCard = ({ element }: any) => {
    const img = element?.urlToImage
    return (
        <div className='group relative'>
            <div className='overflow-hidden'>
                <div className='h-[250px] sm:h-[370px] w-full'>
                    {/* <Image alt='latest news' src={img} layout='fill' priority={true} /> */}
                    <img src={img} alt="news" className='h-full w-full' />
                </div>
            </div>
            <Link href={"#"} className='w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300' ></Link>
            <div className='left-5 absolute bottom-4 flex justify-start item-start flex-col text-white font-semibold gap-y-2'>
                <div className='px-[6px] py-[2px] rounded-sm text-[13px] w-1/4 bg-red-500 text-center'>
                    {element.source.name}
                </div>
                <h1>{element.title}</h1>
                <div className='flex gap-x-2 text-sm font-normal'>
                    <span>{element.publishedAt}</span>
                    <span>{element.author}</span>
                </div>
            </div>
        </div>
    )
}

export default SampleNewsCard