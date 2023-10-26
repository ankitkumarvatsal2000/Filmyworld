import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber,appVerifier } from "firebase/auth";
import app from '../firebase/Firebase';
import { TailSpin } from 'react-loader-spinner';

const auth =getAuth(app);

const Signup = () => {

    const [form, setform] = useState({
        Name: "",
        Mobile: "",
        password: ""
    });
    const [loading, setLoading] = useState(false)
    const [otpSent, setotpSent] = useState(false);
    const [OTP, setOTP] = useState("");

    const generateReCaptha =() =>{
        window.recaptchaVerifier = new RecaptchaVerifier('reCaptha-container', {
            'size': 'invisible',
            'callback': (response) => {
              
              
            }
          },auth);
    }
    const requestOtp=()=>{
        setLoading(true);
        generateReCaptha();
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, `+91${form.Mobile}`,appVerifier  )
        .then((confirmationResult)=>{
            window.confirmationResult =confirmationResult;
        
        setotpSent(true);
        setLoading(false);
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div class="flex  flex-wrap flex-col items-center mt-40 gap-4">
              <button className='w-60 pr-3 h-9 mt-14  rounded-lg text-lg bg-green-500 block m-auto'>Signup</button>
            {otpSent ?
                <>
                    <div class="p-2 w-1/2">
                        <div class="relative">
                            <label for="name" class="leading-7 text-lg text-pink-500">OTP</label>
                            <input
                            
                                id="name"
                                name="name"
                                value={OTP}
                                onChange={(e) => setOTP(e.target.value )}
                                class="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>

                    <div>
                        <button class='w-60 rounded-md bg-green-500 h-9 '>Confirm OTP</button>
                    </div>
                </>
                :
                <>
                    <div class="p-2 w-1/2">
                        <div class="relative">
                            <label for="name" class="leading-7 text-lg text-pink-500">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.Name}
                                onChange={(e) => setform({ ...form, Name: e.target.value })}
                                class="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div class="p-2 w-1/2">
                        <div class="relative">
                            <label for="name" class="leading-7 text-lg text-pink-500">Mobile</label>
                            <input
                                type="number"
                                id="name"
                                name="name"
                                value={form.Mobile}
                                onChange={(e) => setform({ ...form, Mobile: e.target.value })}
                                class="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>




                    <div class="p-2 w-1/2">
                        <div class="relative">
                            <label for="email" class="leading-7 text-lg text-pink-600">password</label>
                            <input
                                type="email"
                                id="email" name="email"
                                value={form.password}
                                onChange={(e) => setform({ ...form, password: e.target.value })}
                                class="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button onClick={requestOtp} className='w-60 pr-3 h-9 mt-14  rounded-lg text-lg bg-green-500 block m-auto'>
                            {loading ? <TailSpin  height ={25} color ="white"/>: 'sign up'}  </button>
                    </div>
                    </>
            }
                    <div>
                        <p className='text-red-500 text-lg'>already have an account ?<Link to={'../login'}><button className='text-green-700'>Login</button></Link></p>
                    </div>
                    <div id='reCaptha-container'></div>

        </div >
    )
}

export default Signup;