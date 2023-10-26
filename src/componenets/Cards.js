import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import ReactStars from 'react-stars'
import { doc, getDocs} from 'firebase/firestore'
import { moviesRef } from '../firebase/Firebase'
import { Link } from 'react-router-dom'
import Detail from './Detail'

const Cards = () => {

    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    

    useEffect(() =>{
        async function getData()
        {
          setloading(true);
          const _data = await getDocs(moviesRef);
          console.log( 'ggyjg', _data)
          _data.forEach((doc) => {
            setdata((prev)=> [...prev, {...(doc.data()), id: doc.id}])
            
          })
          console.log("new id", doc );

          setloading(false);
        }
        getData();

    },[])
    console.log( 'hjjhik',data)
    return (
        <div className='flex flex-wrap justify-between mt-2 p-3' >
            {loading ?<div className='w-full flex justify-center items-center h-96 '> <TailSpin height={80} color='white' /></div>:
            
                data.map((ele, idx) => {
                    return (
                        <Link to ={`/detail/${ele.id}`}><div key={idx}className=' card font-medium shadow-2xl shadow-black p-3 hover:-translate-y-8 cursor-pointer mt-4 transition-all duration-700'>
                            <img className='h-72 ' src={ele.image}></img>

                            <h1><span className='text-gray-500'>Name:</span>{ele.title}</h1>
                            <h1><span className='text-gray-500'>Year:</span>{ele.year}</h1>
                            
                            <h1><span className='text-gray-500'></span> 
                            <ReactStars
                            size={20}
                            half={true}
                            value={ele.Rating}
                            edit={true}
                             /></h1>
                           
                        </div> </Link>
                    );
                })
            }
        </div>
    )
}

export default Cards;