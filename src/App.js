import React from 'react'
import './App.css';
import MovieNav from './Components/MovieNav/MovieNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import moviesData from "./data/moviesData";
import MoviesList from './Components/MoviesList/MoviesList';
import AddMovie from './Components/AddMovie/AddMovie';


function App() {
  const [titleSearch, setTitleSearch ] = useState("")
  const [rateSearch, setRateSearch ] = useState(0)
  const [moviesListData, setMovieListData] = useState(moviesData)

  const getTitleSearch = (input) => {
    setTitleSearch(input);
  }
  const getRateSearch = (input) => {
    setRateSearch(input);
  }

  const getMovieListData = (input) => {
    setMovieListData([ ...moviesListData, input]);
  }


  return (

  <div>
      <MovieNav getTitleSearch = {getTitleSearch} 
                getSearchRate = {getRateSearch} />
                
<div className="addmovie">
   <AddMovie
             getMovieListData = {getMovieListData}/>
</div>
                
      <MoviesList moviesListData={moviesListData} 
                  titleSearch={titleSearch}
                  rateSearch={rateSearch} />
  </div> 


  );
};

export default App;
