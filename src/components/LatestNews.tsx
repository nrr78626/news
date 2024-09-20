"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SampleNewsCard from './News/SampleNewsCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNews } from '@/context/NewsProvider';

const LatestNews = () => {
  const {allNews,isLoading} = useNews()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const ButtonGroup = ({ next, previous }: any) => {
    return <div className='flex justify-between items-center'>
      <div className='text-xl font-bold text-zinc-800 relative before:absolute before:w-[4px] before:bg-red-500 before:h-full before:-left-0 pl-3'>Latest News</div>
      <div className='flex justify-center items-center gap-x-3'>
        <button onClick={() => previous()} className='w-[30px] h-[30px] flex justify-center items-center bg-white border-zinc-100'>
          <span><ChevronLeft /></span>
        </button>
        <button onClick={() => next()} className='w-[30px] h-[30px] flex justify-center items-center bg-white border-zinc-100'>
          <span><ChevronRight /></span>
        </button>
      </div>
    </div>
  }

  if(isLoading){
    return <div className='flex h-screen w-screen justify-center items-center'>Please wait</div>
  }
  return (
    <div className='w-full flex flex-col-reverse gap-3 pr-8 lg:pr-2 '>
      <Carousel autoPlay={true} arrows={false} renderButtonGroupOutside={true} responsive={responsive} infinite={true} transitionDuration={500} customButtonGroup={<ButtonGroup />}>
        {
          allNews.map((e:any, i:any) => <SampleNewsCard key={i} element={e} />)
        }
      </Carousel>
    </div>
  )
}

export default LatestNews