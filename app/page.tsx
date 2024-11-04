"use client"

import TopSection from "@/app/components/homePage/TopSection"
import Features from "@/app/components/homePage/Features"
import Testimonals from "@/app/components/homePage/Testimonals"
// import ConnectThree from "@/app/components/homePage/animatedImage/ConnectThree"

export default function Home() {
  return (
    <div className="mx-auto grid grid-rows-[0px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)] bg-074b6c">
      <main className="flex flex-col gap-0 row-start-2 items-center sm:items-start w-full h-full">
        <TopSection/>
        {/* <Testimonals /> */}
        <Features />
      </main>
    </div>
  );
}
