  import React,{ useState } from 'react';
  import 'bootstrap/dist/css/bootstrap.min.css'
  import './App.css'
  import Home from "./pages/home/home"
  import Cards from "./components/cards/cards"
  import Header from "./components/header/Header"
  import MovieDetail from "./pages/movieDetail/movie"
  import MovieList from "./components/movieList/movieList"
  import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
  import Signup from './Signup';
  import Login from './Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route id='register' path='/register' element={<Signup/>}></Route>
          <Route  id='login' path='/login' element={<Login/>}></Route>
          <Route path="/movie/:id" element={<MovieDetail/>} />
          <Route path="/movies/:type" element={<MovieList/>} />
          <Route path="/*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;
