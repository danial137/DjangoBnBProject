'use client';

import { useState } from "react";

import Modal from "./Modal";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import CustomButton from "../form/CustomButton";
import Categories from "../addproperty/Categories";

const AddPropertyModal = () => {
    const addPropertyModal = useAddPropertyModal();

    const [currentStep, setCurrentStep] = useState(1);

    const [dataCategory, setDataCategory] = useState("");
    const [dataTitle, setDataTitle] = useState("");
    const [dataDescription, setDataDescription] = useState("");
    const [dataPrice, setDataPrice] = useState(0);
    const [dataBedrooms,setDataBedrooms]=useState()

    const content = (
        <>
            {currentStep === 1 ? (
                <>
                    <h2 className="mb-6 text-2xl font-semibold">
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
            ) : currentStep === 2 ? (
                <>
                    <h2 className="mb-6 text-2xl font-semibold">
                        Describe your place
                    </h2>

                    <div className="space-y-6">
                        {/* Title */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700">
                                Title
                            </label>

                            <input
                                type="text"
                                value={dataTitle}
                                onChange={(e) => setDataTitle(e.target.value)}
                                placeholder="Enter property title..."
                                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                            />
                        </div>

                        {/* Description */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700">
                                Description
                            </label>

                            <textarea
                                rows={6}
                                value={dataDescription}
                                onChange={(e) => setDataDescription(e.target.value)}
                                placeholder="Describe your property..."
                                className="w-full resize-none rounded-xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col gap-3">
                            <CustomButton
                                label="Previous"
                                className="bg-black hover:bg-gray-800 mb-4"
                                onClick={() => setCurrentStep(1)}
                            />

                            <CustomButton
                                label="Next"
                                onClick={() => setCurrentStep(3)}
                            />
                        </div>
                    </div>
                </>
            ) : currentStep == 3 ? (

                <>
                    <CustomButton
                        label="Previous"
                        className="bg-black hover:bg-gray-800 mb-4"
                        onClick={() => setCurrentStep(2)}
                    />

                    <CustomButton
                        label="Next"
                        onClick={() => setCurrentStep(4)}
                    />
                </>
            ) : (
                <p>Details</p>
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