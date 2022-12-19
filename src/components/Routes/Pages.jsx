import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SearchedMovie from "../searchmovie/SearchedMovie";
import UpcomingMovies from "../UpcomingMovies/UpcomingMovies";

const Pages = () => {
    const location = useLocation();
    return (
        <>
            <Routes Location = {location} key={location.pathname}>
                <Route path="/" element={<UpcomingMovies />} />
                <Route path="/searchedmovie/:searchmovie" element={<SearchedMovie />} />
            </Routes>
        </>
    )
}
export default Pages;