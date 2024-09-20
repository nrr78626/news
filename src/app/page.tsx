import Header from "@/components/Header";
import Headlines from "@/components/Headlines";
import LatestNews from "@/components/LatestNews";
import SampleNewsCard from "@/components/News/SampleNewsCard";
import PopularNews from "@/components/PopularNews";
import Title from "@/components/Title";

export default function Home() {
  return (
    <>
      <Header />
      <Headlines />
      <div className="bg-zinc-100">
        <div className="px-4 md:px-8 py-8">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12">
              <LatestNews />
            </div>
            <div className="w-full lg:w-6/12 mt-5 lg:mt-0">
              <div className="flex w-full flex-col gap-y-[14px] pl-0 lg:pl-2">
                <Title title={"Technology"}  />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                  {
                    [1,2,3,4].map((e,i)=>(
                      <SampleNewsCard type={""} item={undefined} />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <PopularNews/>
        </div>
      </div>
    </>
  );
}
