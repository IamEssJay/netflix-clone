import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from '../context/AuthContext'
//import { db } from '../Firebase'
//import {collection, doc, onSnapshot, query} from 'firebase/firestore'
import axios from 'axios'
import requests from '../requests'
import Movie from './Movie'

const SavedShows = () => {
    const {user}=UserAuth()
    const [movies, setMovies]=useState([])
    const fetchURL= requests.requestTrending

    const slideLeft =()=>{
        var slider= document.getElementById('slider');
        slider.scrollLeft= slider.scrollLeft-500;
    }
    const slideRight =()=>{
        var slider= document.getElementById('slider');
        slider.scrollLeft= slider.scrollLeft+500;
    }
    // useEffect(()=>{
    //     const q= query(collection(db,'users'))
    //     const unsubscribe= onSnapshot(q,(querySnapshot)=>{
    //         let todosarr=[]
    //         querySnapshot.forEach((doc)=>{
    //          if({...doc.data(), id: doc.id}=== `${user?.email}`){
    //             console.log("hemmmmmm")

    //          }
    //         });
    //         setMovies(todosarr)
    //       })
    //     return()=> unsubscribe()
    //   },[user?.email])

      useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchURL])
    // useEffect(()=>{
    //     onSnapshot(doc(db,'users',`${user?.email}`, (doc)=>{
     //   setMovies(doc.data()?.savedShows)
    //}
    //}))
    // },[user?.email])
console.log (user?.email)
//console.log(movies)
  return (
    <>
    <h2 className='text-white py-4 font-bold md:text-xl '>My Shows</h2>
     <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block ' size={40} />
        {/* <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {movies.map((item, id)=>(
             <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
             <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item.title} />
             <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
             <p className='white-space-normal text-xs md:text-sm flex justify-center items-center h-full font-bold'>{item?.title}</p>
             </div>
         </div>
            ))}
        </div> */}
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {movies.map((item, id)=>(
             <Movie key={id} item={item} />
            ))}
        </div>
        <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block ' size={40} />
     </div>
    </>
  )
}

export default SavedShows