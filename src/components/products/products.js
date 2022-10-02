import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddToFavourite } from "../../store/action";

export default function Products() {

  let [productlist, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((productt) => setProductList(productt.data))
      .catch(console.error());
  }, []);

  return (
    <>
      <div className="container-fluid m-4">
        <div className="row">
          {productlist.map((product) => {
            return (
              <div className="card col-2 shadow">
                <img className="card-img-top" src={product.image}/>
                <div className="card-body">
                  <p className="card-title"><strong>Title: </strong>{product.title}</p>
                  <p className="card-title"><strong>Category: </strong>{product.title}</p>
                  <p className="card-title"><strong>Price: </strong>{product.title}</p>
                  <Link className="btn btn-outline-success m-4 text-dark" to={`/productdetails/${product.id}`}>View Product Details</Link>
                  {/*<button  className="btn btn-outline-success m-4 text-dark" onClick={dispatch(AddToFavourite(product))}>
                    Add to Favorites</button>*/}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}