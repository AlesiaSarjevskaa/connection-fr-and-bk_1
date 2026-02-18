import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllCars } from "../../../models/Cars";
import CarLink from "./CarLink";

export default function CarShowAll() {
  const [cars, setCars] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllCars();
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setCars(data.payload);
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
