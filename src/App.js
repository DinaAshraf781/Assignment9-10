import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Movies from './components/movies/movies';
import TvShows from './components/tvs/tvs';
import Navv from './components/Nav/Nav';
import Products from './components/products/products';
import ProductDetails from './components/productdetails/productdetails';
import Favourite from './components/Favs/Favs';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className='App'>
        <Navv/>
      </div>
      <div className='App bg-light'>
        <Route path='/' exact component={Movies} />
        <Route path='/tvs' exact component={TvShows} />
        <Route path='/product' exact component={Products} />
        <Route path='/favourites' exact component={Favourite} />
        <Route path="/productdetails/:id" component={ProductDetails} />
      </div>
    </BrowserRouter>
    
    </>
  );
}

export default App;
