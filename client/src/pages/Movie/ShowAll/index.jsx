import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllMovies } from "../../../models/Movies";
import MovieLink from "./MovieLink";

export default function MovieShowAll() {
  const [cars, setCars] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllMovies();
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setMovies(data.payload);
      setLoaded(true);
    }
  };
  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Cars not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Cars are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Car show all</h1>
      {
        cars.map((val, i) => {
          return (
            <CarLink key={i} {...val}/>
          )
        })

      }
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </>
  );
}
