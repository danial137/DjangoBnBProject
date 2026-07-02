"use client"

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal"
const AddPropertyButton = () => {
 
    const addPropertyModal = useAddPropertyModal();
    const airbnbYourHome = () => {
        
    }
    return (
        <div className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200" onClick={airbnbYourHome}>
            Djangobnb your home
        </div>
    )
}

export default AddPropertyButton