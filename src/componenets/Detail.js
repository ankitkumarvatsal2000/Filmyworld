import  {React, useEffect, useState } from 'react'
import ReactStars from 'react-stars';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/Firebase';
import { doc, getDoc } from 'firebase/firestore';


const Detail = () => {
    
    const {id} = useParams();
    const[data, setData] = useState({
        title:  "",
        year: "",
        image: "",
        description:  ""
    });


    useEffect(()=>{
        async function getData(){
            const _doc =doc(db, "movies", id);
            const _data = await getDoc(_doc);
            setData(_data.data());

        }
        getData();
    
     }, [])
    return (
        <div className=' p-4 flex w-full mt-4 justify-center'>
            <img className='sticky h-96 top-20' src={data.image} />
            <div className='ml-4 w-1/2'>
                <h1 className='text-2xl text-pink-400'>{data.title} <span className='text-violet-600'> {data.year}</span></h1>
                <ReactStars 
                            size={20}
                            half={true}
                            value={5}
                            edit={true}
                             />
                <p className='text-justify text-md '>
                {data.description}
                </p>
            </div>
        </div>
    )
}

export default Detail;