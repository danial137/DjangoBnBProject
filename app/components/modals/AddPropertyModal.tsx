'use client'
import Image from "next/image"

import Modal from './Modal'

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal"

const AddPropertyModal = () => {
  
    const addPropertyModal = useAddPropertyModal()
    

    const content = (
        <>
        
            <h2 className="mb-6 text-2xl">Choose category </h2>
            
        </>
    )


    return (
        <>
        
            <Modal
                isOpen={addPropertyModal.isOpen}
                close={addPropertyModal.close}
                label="Add property"
                content={(
                       <p>yo</p>
                )}
            />
        
        </>
    )


}

export default AddPropertyModal