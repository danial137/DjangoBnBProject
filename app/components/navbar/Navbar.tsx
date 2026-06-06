import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full fixed top-0 left-0  py-6 border-b bg-white z-10 '>
            <div className='max-w-375 mx-auto px-6'>
                <div className='flex justify-between items-center'>
                    <Link href='/'>
                        <Image src="/logo.png" width={180} height={38} alt='DjangoBnbLogo' />
                    </Link>

                    <div className='flex space-x-6'> search Filter  </div>


                    <div className='flex items-center space-x-6'>

                        Add property - User nav

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar