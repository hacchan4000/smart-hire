'use client'
import React, { useState } from 'react'

//page untuk upload video user yang akan di analisis oleh model
const page = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [video, setVideo] = useState(null)
    const [loading, setLoading] = useState(false)

     const onSubmited = async (e) => {
        e.preventDefault()

        if (!video) {
            alert("Please upload a video!")
            return;
        }

        setLoading(true)

        try {
            const formData = new FormData()
            formData.append("name", name)
            formData.append("email", email)
            formData.append("email2", email2)
            formData.append("file", video)

             const res = await fetch('http://localhost:8001/predict-video', {
                method: 'POST',
                body: formData,
              })

            if (res.ok) {
              const json = await res.json()
              alert("Video & data sent successfully!\nResult: " + (json.result || json.message))
              // reset
              setName('')
              setEmail('')
              setEmail2('')
              setVideo(null)
            } else {
              const text = await res.text()
              console.error("Failed response:", text)
              alert("Failed to send: " + res.status)
            }
          } catch (error) {
            console.error("Error:", error)
            alert("Something went wrong!")
          } finally {
            setLoading(false)
          }
        }

  return (
    <div className='relative w-full h-screen bg-[#0039C8] justify-center items-center flex-col text-white'>
        <h1 className='relative top-16 font-bold text-left leading-none w-full text-[min(10vw,100px)] mb-20'>SUBMIT YOUR VIDEO</h1>

        <div className="w-full max-w-md ml-0 2xl:ml-10">
          <form
            onSubmit={onSubmited}
            className="flex flex-col items-center justify-center space-y-4 sm:space-y-5"
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="bg-[#D9D9D9]/20 h-10 w-full drop-shadow-lg rounded-4xl p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#75CFFF]"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your Email"
              className="bg-[#D9D9D9]/20 h-10 w-full drop-shadow-lg rounded-4xl p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#75CFFF]"
            />
            <input
              value={email2}
              onChange={(e) => setEmail2(e.target.value)}
              type="email"
              placeholder="Recruiter Email"
              className="bg-[#D9D9D9]/20 h-10 w-full drop-shadow-lg rounded-4xl p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#75CFFF]"
            />

            <input
              onChange={(e) => setVideo(e.target.files[0])}
              type="file"
              placeholder="video/*"
              className="bg-[#D9D9D9]/20 h-50 w-full drop-shadow-lg rounded-4xl p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#75CFFF]"
            />

            <button
              type="submit"
              className="bg-[#75CFFF] px-10 py-3 rounded-full text-white drop-shadow-lg 
              cursor-pointer active:bg-[#69bae6] text-sm sm:text-base transition-all duration-300 hover:scale-105"
            >
              Send
            </button>
          </form>
        </div>
      
    </div>
  )
}

export default page
