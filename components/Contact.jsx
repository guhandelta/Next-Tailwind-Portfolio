import Image from "next/image"
import Link from "next/link"
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

import SocailMediaIcons from "./SocailMediaIcons"

const Contact = () => {
  return (
    <div className="w-full lg:h-screen" id="Contact">
        <div className="max-w-[1240px] m-auto py-16 w-full">
            <p className="text-3xl tracking-widest hover:font-anurati uppercase text-center text-[#5651e5]">
                Contact
            </p>
            <h2 className=" text-2xl text-center hover:font-anurati">Get in Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
            
                {/*left*/}
                <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="lg p-4 h-full">
                        <div>
                            <Image src="/../public/assets/skills/Contactus.jpg" height="400px" width="550px" alt="Contact us" className="rounded-xl hover:scale-105 ease-in duration-300" />
                        </div>
                        <div>
                            <h2 className="py-2">Guhaprasaanth</h2>
                            <p>Frontend Developer</p>
                            <p className="py-4">I&#39;m available for Freelancing and any Corp-to-Corp or Contract-to-Hire roles on ReactJS. Contact me, let&#39;s talk</p>
                        </div>
                        <div>
                            <p className="uppercase pt-8">Let&#39;s Connect</p>
                            <div className="flex items-center justify-between py-8">
                                <SocailMediaIcons />
                            </div>
                        </div>
                    </div>
                </div>
                {/*right*/}

                <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:py-4">
                    <div className="p-4">
                        <form>
                            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">Name:</label>
                                    <input type="text" name="name" className="border-2 rounded-lg p-3 flex border-gray-300" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">Phone:</label>
                                    <input type="text" name="number" className="border-2 rounded-lg p-3 flex border-gray-300" />
                                </div>
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase py-2 text-sm">Email:</label>
                                <input type="email" name="email" className="border-2 rounded-lg p-3 flex border-gray-300" />
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase py-2 text-sm">Subject:</label>
                                <input type="text" name="subject" className="border-2 rounded-lg p-3 flex border-gray-300" />
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase py-2 text-sm">Message:</label>
                                <textarea rows="10" name="message" className="border-2 rounded-lg p-3 border-gray-300"></textarea>
                            </div>
                            <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-12">
                <Link href="/">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                        <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact