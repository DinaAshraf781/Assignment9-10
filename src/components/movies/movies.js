import "./movies.css";
import Button from "react-bootstrap/Button";
import { Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      moviesList: []
    };
  }
  componentDidMount(){
    axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=fa220448b6edfcd6a8c92904ee3d0ec1&language=en-US&page=1'
    )
    .then((moviesData) => {
      this.setState({moviesList : moviesData.data.results});
    })
    .catch((err) => {
      console.log(err);
    });
  }
  render() {
    return (
      <>
        {
         (
          <div className="container-fluid m-4">
            <div className="row">
              {this.state.moviesList.map((movie) => (
                <div
                  className="card col-2 shadow"
                  // style={{ width: 300, marginLeft: 10, marginBottom: 10 }}
                >
                  <img
                    class="card-img-top"
                    src={
                      "https://image.tmdb.org/t/p/original" + movie.poster_path
                    }
                    alt="Card image"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Title:{movie.title}</h4>
                    <p className="h4 text-sm">Rating: <Rating name="half-rating" defaultValue={(movie.vote_average)/2} precision={0.5}></Rating></p>
                    <Button href="#" variant="outline-success m-4 text-dark">View Movie Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
      </>
    );
  }
}
export default Movies;
