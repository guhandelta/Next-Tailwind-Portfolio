import Link from 'next/link'

import { SocialMediaIconsList } from './Const'

const SocailMediaIcons = () =>( 

        SocialMediaIconsList.map(({ sno, icon, url }) => 
            <div key={sno} className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <Link to={url} href={url}>
                    <a target="_blank" rel="noopener noreferrer">{icon}</a>
                </Link>
            </div>
        )
)
    
export default SocailMediaIcons