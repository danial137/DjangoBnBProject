import Image from 'next/image'
import React from 'react'

const Categories = () => {
    return (
        <div className='pt-3 cursor-pointer pb-6 flex items-center space-x-12'>

            <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-800'>

                <Image src="/icn_category_beach.jpeg" alt='beach' width={20} height={20} />
                <span className='text-xs'>Beach</span>

            </div>

        </div>
    )
}

export default Categories