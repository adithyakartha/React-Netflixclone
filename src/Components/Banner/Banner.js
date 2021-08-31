import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios.js'
import { API_KEY} from '../../constants/constants'
import { imageUrl } from '../../constants/constants'
function Banner() {
const [movie, setMovie] = useState()

    useEffect(()=>{
axios.get('trending/all/week?api_key=5f6f334d30e8d1d3ed12b35ba787d10a&language=en-US').then((response)=>{
      
        const imagenumber=getRandomInt(20)
        setMovie(response.data.results[imagenumber])
})
    },[])
    return (      
        <div 
        style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie?movie.title:""}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie?movie.overview:""}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export default Banner