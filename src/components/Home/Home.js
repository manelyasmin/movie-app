import React, { useEffect } from 'react';
import MovieApi from "../../common/apis/movieApi"
import MovieListing from "../MovieListinng/MovieListinng";
import {APIKey} from "../../common/apis/movieApiKey";
import {useDispatch} from "react-redux"
import {addMovies} from "../../features/movies/movieSlice";
const Home = () => {
const dispatch=useDispatch();
    useEffect(()=>{
        const movieText="Harry";
        
        
const fetchMovies=async()=>{
    const response=await MovieApi.get(
        `?apikey=${APIKey}&s=${movieText}&type=movie`
        )
        .catch((err)=>{
            console.log("ERROR : ",err);
        })
        //console.log("THE RESPONSE FROM API IS : " , response);
        console.log(response.data);
        dispatch(addMovies(response.data));


};
fetchMovies();
    },[]);

    return (
        <div>
        <div className='banner-img'></div> 
             
             <MovieListing/>
             </div>
    );
};

export default Home;