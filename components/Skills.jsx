import Image from "next/image"

import { SkillStore } from './Const'

const Skills = () => {
  return (
    <div className="w-full lg h-screen p-2" id="Skills">
        <div className="max-w-[1240] mx-auto flex flex-col justify-center h-full">
            <p className="text-xl tracking-widget uppercase text-[#56521e5]">Skills</p>
            <h2 className="py-4">What I can do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SkillStore.map(({sno, name, image})=><>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div key={sno} className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={image} width="64px" height="64px" alt="/" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h3>{name}</h3>
                        </div>
                    </div>
                </div>
            </>)}
            </div>
        </div>
    </div>
  )
}

export default Skills