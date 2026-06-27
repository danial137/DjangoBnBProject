"use client"

import { useRouter } from "next/navigation"

import { useState } from "react"

import useSignupModal from "@/app/hooks/useSignupModal"
import Modal from "./Modal"
import CustomButton from "../form/CustomButton"

const SignupModal = () => {

    const signupModal = useSignupModal()

    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState<string[]>([])
    const content = (
        <>


            <form className="space-y-4">
                <input placeholder="your email address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl " />


                <input placeholder="Your password" type="password" />

                <input placeholder="Reapet password" type="password" />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>


                <CustomButton label="submit" onClick={() => console.log("clicked")} />

            </form>


        </>


    )

    return (
        <Modal isOpen={signupModal.isOpen} close={signupModal.close} label="sign up" content={content} />
    )
}



export default SignupModal