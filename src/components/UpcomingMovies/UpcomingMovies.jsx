import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../UpcomingMovies/UpcomingMovies.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const UpcomingMovies = () => {
    const [upcomingmovies, setUpcomingMovies] = useState([]);
    const type = useParams()
    const GetUpcomingMovies = () => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&number=9&tags=upcoming`)
            .then(res => res.json())
            .then(data => setUpcomingMovies(data.results))
    }
    useEffect(() => {
        GetUpcomingMovies();
    }, [])
    return (
        <>
            <div className="container">
                <Splide
                    options={{
                        perPage: 7,
                        arrow: false,
                        pagination: false,
                        drag: 'free',
                        gap: "1rem",
                    }}
                >
                    {
                        upcomingmovies.map(movie => {
                            return (
                                <>
                                    <SplideSlide key={movie.id}>
                                        <div className="upcoming-movie-content">
                                            <img className="movie-image" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                                            <p className="movie-title">{movie.title}</p>
                                            <p>{movie.release_date}</p>
                                        </div>
                                    </SplideSlide>
                                </>
                            )
                        })
                    }
                    </Splide>
            </div>
        </>
    )
}
export default UpcomingMovies;