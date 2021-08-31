import axios from '../../axios.js'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './RowPost.css'
import { baseUrl, imageUrl } from '../../constants/constants.js'
function RowPost(props) {
    const [movie, setOrgmovie] = useState([])
useEffect(() => {
    axios.get('discover/tv?api_key=5f6f334d30e8d1d3ed12b35ba787d10a&with_networks=213').then((response)=>
setOrgmovie(response.data.results)
   
    )
    
},[])
    return (
        <div className='row'>
       
            <h2>{props.title}</h2>
            <div className='posters'>
                {movie.map((obj)=>
                <img className={props.isSmall?'smallPoster':'poster'} alt='poster' src={movie?`${imageUrl+obj.backdrop_path}`:""} />
                )}
                
              
            </div>
        </div>
    )
}

export default RowPost