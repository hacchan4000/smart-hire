import React, {useRef} from 'react'


const Navbar = () => {
    const sideMenu = useRef();
    const openMobileMenu = ()=>{
        sideMenu.current.style.transform = 'translateX(-16rem)';
    }
    const closeMobileMenu = ()=>{
        sideMenu.current.style.transform = 'translateX(16rem)';
    }
  return (
    <>
      <nav className='w-full fixed px-6 lg:px-8 xl:px-[2%] py-2 flex items-center justify-between z-50 bg-none'>
        <a href="#top">

        </a>

        <ul className='hidden md:flex items-center gap-2 lg:gap-10 rounded-full px-10 py-3 mr-15 text-[13px]'>
            <li className='border-2 rounded-[50px] px-4 py-2 bg-[#0039C8]'><a href="#home">HOME</a></li>
            <li className='border-2 rounded-[50px] px-4 py-2 bg-[#0039C8]'><a href="#about">ABOUT US</a></li>
            <li className='border-2 rounded-[50px] px-4 py-2 bg-[#0039C8]'><a href="#experience">FEATURES</a></li>
            <li className='border-2 rounded-[50px] px-4 py-2 bg-[#0039C8]'><a href="#project">CONTACTS</a></li>
        </ul>

        <div className='flex items-center gap-2'>
            <a href="#connect" className='hidden lg:flex items-center gap-3 px-8 py-2 ml-4 text-[25px]'>
                📨
            </a>
            <button className='block md:hidden ml-3 cursor-pointer' onClick={openMobileMenu}>
               
            </button>
        </div>

        {/*--- mobile menu ---*/}
        <ul ref={sideMenu} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-black transition duration-500'>
            <div className='absolute right-7 top-6' onClick={closeMobileMenu}>
                <h1 className='text-[30px] cursor-pointer'>X</h1>
            </div>
            <li><a href="#top" onClick={closeMobileMenu}>HOME</a></li>
            <li><a href="#about" onClick={closeMobileMenu}>ABOUT</a></li>
            <li><a href="#experience" onClick={closeMobileMenu}>EXPERIENCE</a></li>
            <li><a href="#project" onClick={closeMobileMenu}>PROJECTS</a></li>
            <li><a href="#connect" onClick={closeMobileMenu}>CONTACTS</a></li>
        </ul>
        
      </nav>
    </>
  )
}

export default Navbar
