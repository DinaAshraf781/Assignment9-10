import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Rating } from "@mui/material";
import Button from "react-bootstrap/Button";
import "./Favs.css"


function Favourite() {
    let favslist=useSelector((state)=>state.favorties)
  return (
    <>
      <div className="container">
        <div className="row">
        {favslist.map((product) => {
            return (
              <div className="card col-2 shadow">
                <img className="card-img-top" src={product.image}/>
                <div className="card-body">
                  <p className="card-title"><strong>Title: </strong>{product.title}</p>
                  <p className="card-title"><strong>Category: </strong>{product.title}</p>
                  <p className="card-title"><strong>Price: </strong>{product.title}</p>
                  <Link className="btn btn-outline-success m-4 text-dark" to={`/productdetails/${product.id}`}>View Product Details</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Favourite;