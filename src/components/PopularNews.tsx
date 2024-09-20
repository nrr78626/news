import React from 'react'
import Title from './Title'
import SampleNewsCard from './News/SampleNewsCard'
import SimpleDetailsNewsCard from './SimpleDetailsNewsCard'

const PopularNews = () => {
  return (
    <div className='w-full pb-8 mt-5'>
        <div className='flex flex-col w-full gap-y-[14px]'>
            <Title title='Popular News'/>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 sm:gap-3 lg:gap-x-3'>
                {
                    [1,2,3,4].map((item:any,i:any)=>(
                        <SimpleDetailsNewsCard item={item} key={i} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default PopularNews