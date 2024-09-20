import Header from "@/components/Header";
import Headlines from "@/components/Headlines";
import LatestNews from "@/components/LatestNews";
import Image from "next/image";

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
          </div>
        </div>
      </div>
    </>
  );
}
