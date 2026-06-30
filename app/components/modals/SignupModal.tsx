"use client"

import { useRouter } from "next/navigation"

import { useState } from "react"

import useSignupModal from "@/app/hooks/useSignupModal"
import Modal from "./Modal"
import CustomButton from "../form/CustomButton"
import apiService from "@/app/services/apiService"
import { handleLogin } from "@/app/lib/action"

const SignupModal = () => {

    const signupModal = useSignupModal()

    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState<string[]>([])


    // submit functionality

    const submitSignup = async () => {

        const formData = {
            email: email,
            password1: password1,
            password2: password2
        }

        const response = await apiService.post('/api/auth/register/',formData);

        if (response.access) {
          
            handleLogin(response.user.pk, response.access, response.refresh)


            signupModal.close();

            router.push('/')

        } else {
            const tempErrors: string[] = Object.values(response).map((error: any) => {
                return error
            })

            setErrors(tempErrors)
      }

    }

    const content = (
        <>


            <form className="space-y-4" action={submitSignup}>
                <input onChange={(e) => setEmail(e.target.value)} placeholder="your email address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl " />


                <input onChange={(e) => setPassword1(e.target.value)} placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl " />

                <input onChange={(e) => setPassword2(e.target.value)} placeholder="Reapet password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl " />

                {errors.map((error, index) => {
                    return (
                        <div
                            className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                            key={`error_${index}`}
                        >
                            {error}
                        </div>
                    )
                })}




                <CustomButton label="submit" onClick={submitSignup} />

            </form>


        </>


    )

    return (
        <Modal isOpen={signupModal.isOpen} close={signupModal.close} label="sign up" content={content} />
    )
}



export default SignupModal