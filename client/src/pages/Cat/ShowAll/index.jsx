import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllCats } from "../../../models/Cats";
import CatLink from "./CatLink";

export default function CatShowAll() {
  const [cats, setCats] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllCats();
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setCats(data.payload);
      setLoaded(true);
    }
  };
  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Cats not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Cats are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Cat show all</h1>
      {
        cats.map((val, i) => {
          return (
            <CatLink key={i} {...val}/>
          )
        })

      }
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </>
  );
}
