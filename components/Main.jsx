import SocailMediaIcons from './SocailMediaIcons'

const Main = () => {
  return (
    <div className="w-full h-screen text-center pt-40" id="Home">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <p className="uppercase text-sm tracking-widest text-gray-600">Building something legendary</p>
                <h1 className="py-4 text-gray-700">Hi, I&#39;m  <span className="text-orange-600 hover:uppercase hover:text-4xl hover:font-anurati">Guhaprasaanth</span></h1>
                <h1 className="py-4 text-gray-700 ">A <span className="text-blue-600 hover:uppercase hover:text-4xl hover:font-anurati">Front End</span> Web developer</h1>
                <p className="py-4 text-gray-600 max-w-[70%] m-auto">I’m focused on building responsive front-end web applications
                using ReactJS and integrating it with back-end technologies.</p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                    <SocailMediaIcons />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main