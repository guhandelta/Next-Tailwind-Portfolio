import Image from "next/image"

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16" id="About">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-2">
                <p className="uppercase text-3xl text-center tracking-widest hover:font-anurati text-[#5651e5]">About Me</p>
                <h2 className="py-4 text-2xl hover:font-anurati text-center">Who I am</h2>
                <p className="py-2 text-gray-600">I&#39;m not a Normal Programmer</p>
                <p className="py-2 text-gray-600">
                    I specialize in building mobile responsive front-end UI applications
                    Using ReactJS & NextJS, and connecting them with API’s. I’m
                    passionate about learning new technologies and improve my skills
                    more than one way to accomplish a task. Though I am skilled
                    in building front-end applications using ReactJS, and
                    I am a quick learner and can pick up new tech stacks as
                    needed. I believe that being a great developer is not using one
                    specific language, but choosing the best tool for the job.
                </p>
                <p className="py-2 text-gray-600 underline cursor-pointer">Checkout my projects</p>
            </div>
            <div className="w-full h-auto m-auto shadow-xl rounded-xl shadow-gray-400 flex items-center justify-center p-1 hover:scale-105 ease-in duration-300">
                {/* <Image src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/photo-1619410283995-43d9134e7656.jpeg" width="350" height="275" alt="" className="" /> */}
                <img className="rounded-xl" src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/photo-1619410283995-43d9134e7656.jpeg" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About

