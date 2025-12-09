'use client'
import React, { useState } from 'react'

//page untuk recruiter 
const page = () => {

    const [name, setName] = useState('')
        const [email, setEmail] = useState('') //email pengirim
        const [email2, setEmail2] = useState('') //email penerima
        const [video, setVideo] = useState('')
    
        const onSubmited = async (e) => {
            e.preventDefault()
            console.log('berhasil ngirim data', name)
    
            try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, email2 }),
            })
    
            if (res.ok) {
                alert('Message sent successfully!')
                setName('')
                setEmail('')
                setNumber('')
                setPesan('')
            } else {
                alert('Failed to send message')
            }
            } catch (error) {
            console.error('Error:', error)
            alert('Something went wrong!')
            }
        }
  return (
    <div className='relative w-full h-screen bg-[#0039C8] justify-center items-center flex-col text-white'>
        <h1 className='relative top-16 font-bold text-left leading-none w-full text-[min(10vw,100px)] mb-20'>SEND INTERVIEW INVITES</h1>

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
              value={video}
              onChange={(e) => setVideo(e.target.value)}
              type="file"
              accept='video'
              placeholder="Phone Number"
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
