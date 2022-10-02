import './Nav.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Navv() {
    return (
      <>
        <div className="container-fluid shadow">
            <ul className="nav nav-fill h5 justify-content-center bg-success p-1">
                <li className="nav-item">
                <a className="nav-link text-dark" href="/">Movies</a>
                </li>
                <li className="nav-item ">
                <a className="nav-link text-dark" href="/tvs">Tv Shows</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-dark" href="/product">Products</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-dark" href="/fav">Favourites</a>
                </li>
            </ul>
        </div>
      </>
    );
  }
  
  export default Navv;