import ReservationSidebar from '@/app/components/properties/ReservationSidebar'
import Image from 'next/image'
import React from 'react'

const PropertyDetailPage = () => {
    return (
        <main className='max-w-[1500px] mx-auto px-6 pb-6'>
            <div className='w-full h-[64vh] overflow-hidden rounded-xl relative'>
                <Image src='/beach_1.jpg' alt='beach' fill className='object-cover w-full h-full' />
            </div>



            <div className=' grid grid-cols-1 md:grid-cols-5 gap-4'>
                <div className='py-6 pr-6 col-span-3'>

                    <h1 className='mb-4 text-4xl'>Property name</h1>

                    <span className='mb-6 block text-lg text-gray-600'>
                        4 guests - 2 bedrooms - 1 bathroom
                    </span>

                    <hr />

                    <div className='py-6 flex items-center space-x-4 '>

                        <Image

                            src="/profile_pic_1.jpg"

                            width={50}

                            height={50}
                            className='rounded-full'
                            alt="The user name"

                        />

                        <p> <strong>John Doe</strong> is your host</p>

                    </div>

                    <hr />

                    <p className='mt-6 text-lg'>

                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, minus, illo laudantium aut vero modi qui doloremque quas suscipit, quidem nisi ab hic. Enim nam libero doloribus molestias, quae totam.
                        Quisquam ex enim impedit ratione. Voluptate fuga unde accusantium deserunt magni molestiae soluta culpa odit eaque distinctio. Iste ut, odio, ipsum molestiae dolorem recusandae, quis voluptates numquam inventore porro quidem.
                        Repudiandae odio quae, temporibus necessitatibus maxime autem iste nisi nemo facilis at eaque fugiat? Quas, illo voluptas dolore inventore pariatur, esse fuga amet eos tempora molestiae ipsum, dolorum eaque sed.

                    </p>

                </div>

                <ReservationSidebar />
            </div>

        </main>
    )
}

export default PropertyDetailPage