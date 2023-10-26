import React, { useState } from 'react'
import { Link } from 'react-router-dom';



const Login = () => {

    const [form, setform] = useState({
        Mobile: "",
        password: ""
    });
    return (

        <div class="flex mt-40 flex-col items-center self-center gap-4">
            <div class="p-2 w-1/2">
                <div class="relative">
                    <label for="name" class="leading-7 text-lg text-pink-400">Mobile</label>
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
                    <label for="email" class="leading-7 text-lg text-pink-400">password</label>
                    <input
                        type="email"
                        id="email" name="email"
                        value={form.password}
                        onChange={(e) => setform({ ...form, password: e.target.value })}
                        class="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className='w-60 rounded-lg h-9 pr-3 mt-14 text-lg bg-green-500 block m-auto'>Login</button>
            </div>
            <div>
                <p className='text-red-500 text-lg'>Don't have an account ?<Link to={'../signup'}><span className='text-green-700'>Signup</span></Link></p>
            </div>
            {console.log("hiiii")}
        </div >
    )
}

export default Login;