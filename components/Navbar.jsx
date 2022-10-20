import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


import { Pages, SocialMediaIcons } from './Const'


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => { setNav(!nav) }

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            {/* Relative image path should start with a / */}
            <Image src="/../public/assets/navLogo.png" alt="/" width='50' height='50' />
            {Pages.map(({ page, sno })=>
                <div key={sno}>            
                    <ul className="hidden md:flex">
                        <Link href={`#${page}`}>
                            <li className="ml-10 text-sm uppercase hover:border-b">{page}</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            )}
        </div>

        <div className={ nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-500" : '' }>
            <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screem bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
               <div className="">
                    <div className="flex w-full items-center justify-between">
                        <Image src="/../public/assets/navLogo.png" alt="Logo" width={50} height={50} />
                        <div  onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                            <AiOutlineClose />
                        </div>
                    </div>
                    {/*<div className="border-b border-gray-300 my-4">
                        <p className="w-[85%] md:w-[90%] py-4">Building something innovative</p>
                    </div> */}
               </div> 
               <div className="py-4 flex flex-col">
                    {Pages.map(({ page, sno })=>
                        <ul key={sno} className="uppercase">
                            <Link href={`#${page}`}>
                                <li className="py-4 text-sm">{page}</li>
                            </Link>
                        </ul>
                    )}
                    <div className="pt-10">
                        <p className="uppercase tracking-widest text-[#5651e5]">Let us connect</p>
                        {SocialMediaIcons.map(({ icon, sno })=>
                            <div key={sno} className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    {icon}
                                </div>
                            </div>
                        )}
                    </div>
               </div>
            </div>
        </div>
    </div>  
  )
}

export default Navbar