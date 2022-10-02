import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

export default function ProductDetails(props) {
  let params = useParams();
  let [productt, setProductDetails] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((singleproduct) => {
        setProductDetails(singleproduct.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="card mb-3" style={{ maxwidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">Title: {productt.title}</h4>
              <h4 className="card-text">Price: {productt.price}</h4>
              <h4 className="card-text">Description: {productt.description}</h4>
            </div>
          </div>
          <div className="col-md-4">
            <img src={productt.image} className="card-img" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}