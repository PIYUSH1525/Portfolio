import { Heart } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='py-8 pb-24 mt-8 border-t border-gray-800 text-center'>
            <p className='flex items-center justify-center '>Made with <Heart className="h-4 w-4 mx-2 text-red-500" /> by Piyush Negi</p>
        </div>
    )
}

export default Footer