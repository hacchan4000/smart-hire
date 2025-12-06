import React from 'react'
import { useRouter } from 'next/navigation'

// landing page
const Page1 = () => {
    const router = useRouter()

    const handleClick = (site) => {
        if (site === "create") {
        router.push('/create')   // route to your create page
        } else {
        router.push('/submit')   // route to your submit page
        }
    }

  return (
    <div className='relative w-full h-screen bg-[#0039C8] justify-center items-center flex-col text-white'>
        <h1 className='relative top-16 font-bold text-center leading-none w-full text-[min(18vw,270px)] mb-10 textAnimation'>
            SMART-HIRE
        </h1>

        <h1 className='relative text-[min(4vw,30px)] text-center mt-15'>
            Your company's solution to recruitment
        </h1>
      
        <div className="absolute flex justify-center items-center w-full gap-50 mt-15">
        <button
          onClick={() => handleClick("create")}
          className="border-2 px-6 py-2 rounded-4xl text-4xl bg-white text-[#0039C8] cursor-pointer"
        >
          Create Interview
        </button>

        <button
          onClick={() => handleClick("submit")}
          className="border-2 px-6 py-2 rounded-4xl text-4xl bg-white text-[#0039C8] cursor-pointer"
        >
          Submit Interview
        </button>
      </div>
    </div>
  )
}

export default Page1
