import React, { useEffect } from "react";
import {useState} from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";

const SearchedMovie = () =>{
    // const navigate = useNavigate();
    const[searchmovie, setSearchMovie] = useState([]);
    let params = useParams();

    const Getsearchmovie = (name) =>{
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${name}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(data => setSearchMovie(data.results))
    }

    useEffect(()=>{
        Getsearchmovie(params.search);
    },[params.search])
    return(
        <>
            <div>
                {
                    searchmovie.map((movie)=>{
                        return(
                            <>
                                <div key={movie.id}>
                                    <Link to={"/searchmovie/" + movie.id}>
                                        <img src= {`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                                        <p>{movie.title}</p>
                                    </Link>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default SearchedMovie;