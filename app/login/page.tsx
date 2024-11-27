"use client"
import TopSection from "@/app/components/login/TopSection"

export default function Login() {
  return (
    <div className="mx-auto grid grid-rows-[0px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)] bg-base">
      <main className="flex flex-col gap-0 row-start-2 items-center sm:items-start w-full h-full">
        <TopSection/>
      </main>
    </div>
  )
}


