'use client'
import Image from "next/image"

import Modal from './Modal'

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal"

const AddPropertyModal = () => {
  
    const addPropertyModal = useAddPropertyModal()
    
    console.log("Modal:", addPropertyModal.isOpen);


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