'use client'
import React, { useState } from 'react'

const Page = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [reviewerEmail, setReviewerEmail] = useState('')
    const [number, setNumber] = useState('')
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
            formData.append("reviewerEmail", reviewerEmail)
            formData.append("number", number)
            formData.append("video", video)

            const res = await fetch('/api/submit-video', {
                method: 'POST',
                body: formData, // ❗ NO HEADERS — browser sets them automatically
            })

            if (res.ok) {
                alert("Video & data sent successfully!")
                setName('')
                setEmail('')
                setReviewerEmail('')
                setNumber('')
                setVideo(null)
            } else {
                alert("Failed to send")
            }

        } catch (error) {
            console.error("Error:", error)
            alert("Something went wrong!")
        }

        setLoading(false)
    }

    return (
        <div className='relative w-full h-screen bg-[#0039C8] flex flex-col justify-center items-center text-white'>
            
            <h1 className='font-bold text-left leading-none w-full text-[min(10vw,100px)] mb-20'>
                SUBMIT YOUR VIDEO
            </h1>

            <div className="w-full max-w-md">
                <form 
                    onSubmit={onSubmited}
                    className=" flex flex-col items-center justify-center space-y-20"
                >
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Name"
                        className="bg-[#D9D9D9]/20 h-10 w-full rounded-4xl p-3 "
                    />

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Your Email"
                        className="bg-[#D9D9D9]/20 h-10 w-full rounded-4xl p-3"
                    />

                    <input
                        value={reviewerEmail}
                        onChange={(e) => setReviewerEmail(e.target.value)}
                        type="email"
                        placeholder="Reviewer Email"
                        className="bg-[#D9D9D9]/20 h-10 w-full rounded-4xl p-3"
                    />

                    <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => setVideo(e.target.files[0])}
                        className="bg-[#D9D9D9]/20 h-14 w-full rounded-4xl p-3 cursor-pointer"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-[#75CFFF] px-10 py-3 rounded-full hover:scale-105 transition"
                    >
                        {loading ? "Uploading..." : "Send"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Page
