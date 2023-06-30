import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';


export const GitGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

//  const [ images, setImages ] = useState([]);

//   useEffect( () => {
//     getGifs( category )
//         .then( setImages );
//   }, [ category ])


  return (
    <>
        <h3 className='animate__animated animate__fadeInLeft'> { category } </h3>

        { loading && <p className='animate__animated animate__flash'>Loading</p>}
        <div className="card-grid">
        
            {
                images.map( img => (
                    <GifGridItem 
                        key={ img.id }
                        { ...img } 
                    />
                ))
            }   
        </div>
    </>
    
  )
}

