import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { addDoc } from 'firebase/firestore';
import { moviesRef } from '../firebase/Firebase';
import swal from 'sweetalert';

const AddMovie = () => {

  const [form, setform] = useState({
    title: "",
    year: "",
    description:"",
    image: ""
  });

  const[loading, setloading] = useState(false)

 const addmovie = async () =>{
  setloading(true);
  await addDoc(moviesRef, form)
  swal({
    title:"suceessfullyadded",
    icon: "success",
    buttons: false,
    timer:3000
  })
  setloading(false);
 }
 
  return (
    <div><section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-pink-900">Add Your Favourite Movie</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Here We can add our Favourite Movie.</p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600">Title</label>
              <input 
              type="text" 
              id="name"
               name="name"
                value={form.title} 
                onChange={(e) => setform({...form, title: e.target.value})}
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600">Year</label>
              <input
               type="email" 
               id="email" name="email"
               value={form.year}
               onChange={(e) => setform({...form, year:e.target.value})}
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600">image link</label>
              <input
               type="email" 
               id="email" name="email"
               value={form.image}
               onChange={(e) => setform({...form, image: e.target.value})}
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600">Description</label>
              <textarea id="message" name="message" 
              value={form.description}
              onChange={(e)=> setform({...form, description:e.target.value})}
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
           <button  onClick={addmovie} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              { loading ? <TailSpin  height={25} color='white'/> :'Submit'}
              </button>
          </div>
          
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default AddMovie;