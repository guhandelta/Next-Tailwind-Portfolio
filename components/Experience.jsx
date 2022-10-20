import Image from "next/image"
import { Experiences } from "./Const"

const Experience = () => {

    Experiences.map(exp => console.log(exp.logoImage));

  return (
    <div className="w-full" id="Portfolio">
        <div className="max-w-1240px mx-auto px-2 py-16">
            <p className="text-3xl text-center tracking-widest uppercase text-5651e5">Experience</p>
            <h2 className="py-4 text-2xl text-center">My Portfolio</h2>
            <div className="grid md grid-cols-2 gap-8">
                {/* bg-gradient-to-r => defines a horizontal linear gradient (HLG) from left to right */}
                {Experiences.map(({ sno, title, description, techStack, timePeriod, logoImage }) => 
                    <div key={sno} className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 p-4 group hover:bg-gradient-to-r from-[#565135] to-[#709dff]">
                        <Image className="rounded-xl group-hover:opacity-10" alt="/" height="1390px" width="2000px" src={logoImage} />
                        <div className="hidden group-hover:block ease-linear duration-300 absolute top-[15%] left-[5%] translate-x-[50] translate-y-[-100] ">
                            <h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
                            <h5 className="text-xl text-white pt-0.5 tracking-wider text-center">{timePeriod}</h5>
                            <div className="tracking-wider text-white">{description && description.map(desc => <> <p>{desc}</p> </>)}</div><br />
                            <div className="tracking-wider text-white text-center">Tech stack:&nbsp;{techStack}</div>
                        </div>
                    </div>
                )}
            </div> 
        </div>
    </div>
  )
}

export default Experience