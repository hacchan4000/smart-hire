'use client'
import React, { useState } from 'react'

//page untuk upload video user yang akan di analisis oleh model
const page = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [pesan, setPesan] = useState('')

    const onSubmited = async (e) => {
        e.preventDefault()
        console.log('berhasil ngirim data', name)

        try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, number, pesan }),
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
        <div className="w-full max-w-md ml-0 2xl:ml-50">
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
              placeholder="Email"
              className="bg-[#D9D9D9]/20 h-10 w-full drop-shadow-lg rounded-4xl p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#75CFFF]"
            />

            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="text"
              placeholder="Phone Number"
              className="bg-[#D9D9D9]/20 h-10 w-full drop-shadow-lg rounded-4xl p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#75CFFF]"
            />

            <textarea
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              placeholder="Message"
              className="bg-[#D9D9D9]/20 h-40 w-full drop-shadow-lg p-3 rounded-4xl text-sm sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#75CFFF]"
            ></textarea>

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
