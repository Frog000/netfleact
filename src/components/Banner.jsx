import React, { useState, useEffect } from 'react'

// axios.js 모듈을 import하는 코드
import axios from '../axios';
import requests from '../requests';
import './Banner.css';
import Test from './Test';


const Banner = () => {
    // console.log('Banner rendered');
    const [movie, setMovie] = useState([]); // 초기값 : 빈 배열

    // useEffect() hook
    useEffect(() => {
        // 화면이 초기에 렌더링된 직후 한 번 호출.

        // API 서버에 데이터 요청하는 부분.
        async function fetchData() {// async, await

            // 비동기 요청으로 받아온 응답 데이터 
            const request = await axios.get(requests.fetchNetflixOriginals);
            // console.log(request);

            const randomMovie = request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
              ];
            setMovie(randomMovie);
        }

        fetchData();
    }, []);

    // console.log('movie : ',movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }

    const text = '지난 2년간 고담시의 어둠 속에서 범법자들을 응징하며 배트맨으로 살아온 브루스 웨인. 알프레드와 제임스 고든 경위의 도움 아래, 도시의 부패한 공직자들과 고위 관료들 사이에서 복수의 화신으로 활약한다. 고담의 시장 선거를 앞두고 고담의 엘리트 집단을 목표로 잔악한 연쇄살인을 저지르는 수수께끼 킬러 리들러가 나타나자, 최고의 탐정 브루스 웨인이 수사에 나서고 남겨진 단서를 풀어가며 캣우먼, 펭귄, 카마인 팔코네, 리들러를 차례대로 만난다. 사이코 범인의 미스터리를 수사하면서';

  return (
    <header className='banner' style={{
        // backgroundSize: "cover",
        // backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        // backgroundPosition: "center center"
    }}>
        {/* Background video */}
        <Test />

        <div className="banner__contents">
            {/* <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1> */}
            <h1 className="banner__title">The Batman: 더 배트맨</h1>

            {/* div.banner__buttons > div.banner__button*2 */}
            <div className="banner__buttons">
                <button className="banner__button">바로 시청</button>
                <button className="banner__button">나중에 보기</button>
            </div>

            {/* description */}
            <h1 className="banner__description">
                {/* {truncate(movie?.overview, 150)} */}
                {truncate(text, 150)}
            </h1>
        </div>

        {/* <div className="banner--fadeBottom"></div> */}

    </header>
  )
}

export default Banner