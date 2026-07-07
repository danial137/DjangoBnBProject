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
    const [dataPrice, setDataPrice] = useState('');
    const [dataBedrooms, setDataBedrooms] = useState('')
    const [dataBathrooms, setDataBathrooms] = useState('')
    const [dataGuests, setDataGuests] = useState('')

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
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700">
                            Perice per night
                        </label>

                        <input
                            type="number"
                            value={dataPrice}
                            onChange={(e) => setDataPrice(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700">
                            Bedrooms
                        </label>

                        <input
                            type="number"
                            value={dataBedrooms}
                            onChange={(e) => setDataBedrooms(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700">
                            Bathroom
                        </label>

                        <input
                            type="number"
                            value={dataBathrooms}
                            onChange={(e) => setDataBathrooms(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700">
                            Maximum number of Guest
                        </label>

                        <input
                            type="number"
                            value={dataGuests}
                            onChange={(e) => setDataGuests(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                        />
                    </div>
                    <CustomButton
                        label="Previous"
                        className="bg-black hover:bg-gray-800 mb-4 mt-4"
                        onClick={() => setCurrentStep(2)}
                    />

                    <CustomButton
                        label="Next"
                        onClick={() => setCurrentStep(4)}
                    />
                        </>
                    ) : currentStep == 4 ? (           
                            <>
                                
                                <h2 className="mb-6 text-2xl"> Location </h2>

                                <div className="pt-3 pb-6 space-y-4"> 

                                    select

                                </div>

                                <CustomButton
                                    label="Previous"
                                    className="bg-black hover:bg-gray-800 mb-4 mt-4"
                                    onClick={() => setCurrentStep(3)}
                                />

                                <CustomButton
                                    label="Next"
                                    onClick={() => setCurrentStep(5)}
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