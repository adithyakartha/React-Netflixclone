import axios from '../../axios.js'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './RowPost.css'
import { orginals } from '../../urls.js'
import { baseUrl, imageUrl } from '../../constants/constants.js'
import { action } from '../../urls.js'
import YouTube from 'react-youtube'
const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }}

  

function RowPost(props) {
    const [movie, setOrgmovie] = useState([])
    const [urlid, seturlid] = useState('')

useEffect(() => {
    axios.get(props.url).then((response)=>
setOrgmovie(response.data.results)
   
    )
    
},[])

const handleclick=(id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=5f6f334d30e8d1d3ed12b35ba787d10a&language=en-US`).then(response=>{
        console.log(response.data);
        if(response.data.results.length!==0){seturlid(response.data.results[0])}
    })
}  
    return (
        <div className='row'>
       
            <h2>{props.title}</h2>
            <div className='posters'>
                {movie.map((obj)=>
                <img  onClick={()=>handleclick(obj.id)}  className={props.isSmall?'smallPoster':'poster'} alt='poster' src={movie?`${imageUrl+obj.backdrop_path}`:""} />
                )}
                
              
            </div>
        { urlid?<YouTube opts={opts} videoId={urlid.key} />:"" }    
        </div>
    )
}

export default RowPost