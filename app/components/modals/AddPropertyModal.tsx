'use client'

import { useState } from "react";

import Modal from './Modal';

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import CustomButton from "../form/CustomButton";
import Categories from "../addproperty/Categories";

const AddPropertyModal = () => {
    const addPropertyModal = useAddPropertyModal();

    const [currentStep, setCurrentStep] = useState(1);
    const [dataCategory, setDataCategory] = useState('');

    const content = (
        <>
            {currentStep === 1 ? (
                <>
                    <h2 className="mb-6 text-2xl">
                        Choose category
                    </h2>

                    <Categories
                        dataCategory={dataCategory}
                        setCategory={setDataCategory}
                    />

                    <CustomButton
                        label="Next"
                        onClick={() => setCurrentStep(2)}
                    />
                </>
            ) : (
                    <>
                        

                        <h2 className="mb-6 text-2xl"> Describe your place  </h2>


                    </>
            )}
        </>
    );

    return (
        <Modal
            isOpen={addPropertyModal.isOpen}
            close={addPropertyModal.close}
            label="Add property"
            content={content}
        />
    );
};

export default AddPropertyModal;