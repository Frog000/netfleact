import React, { useState, useEffect } from 'react';
import './Test.css';

const Test = () => {
    console.log('Test called');
    const [movieKey, setMovieKey] = useState('');
    const baseYoutubeUrl = 'https://www.youtube.com/embed/';
    const [isTrue, setIsTrue] = useState(true);
    
    useEffect(()=>{
      console.log('useEffect called!');
      const API_KEY = '05fd93d479e2957992e63239fd142a82';
      const movie_id = 414906;
      const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US&append_to_response=videos`;

      const response = fetch(url)
      .then(response => response.json())
      .then(json => {
          setMovieKey(json.results[4].key);
      });
    }, []);
    return (
    // <video autoPlay={true}>
    //     <source src={`${baseYoutubeUrl}${movieKey}`}/>
    // </video>
    <iframe  src={`${baseYoutubeUrl}${movieKey}?autoplay=1&mute=1&rel=0&controls=0&modestbranding=1&loop=1&playlist=${movieKey}`}></iframe>
    // ?autoplay=1&mute=1&modestbranding=1&frameborder=0&fs=0&controls=0
    )
}

export default Test;