import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCat } from "../../../models/Cats";
import { useEffect, useState } from "react";

export default function CatShowOne() {
  const { id } = useParams();
  const [cat, setCat] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCat(id);
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setCat(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Cat not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Cat is loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Cat show one</h1>
      <h2>{cat.name}</h2>
      <p>{cat.race}</p>
      <p>{cat.color}</p>
      <p>{cat.age}</p>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </>
  );
}
