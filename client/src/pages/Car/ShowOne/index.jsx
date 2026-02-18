import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCar } from "../../../models/Cars";
import { useEffect, useState } from "react";

export default function CarShowOne() {
  const { id } = useParams();
  const [car, setCar] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCar(id);
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setCar(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Car not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Car is loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Car show one</h1>
      <h2>{car.model}</h2>
      <p>{car.year}</p>
      <p>{car.color}</p>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </>
  );
}
