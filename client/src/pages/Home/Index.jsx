import React from "react";
import { Link } from "react-router-dom";
import "../Home/Index.css"

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <div className="Cat">
        <Link to={"/cat/123"}>
          <button>Show cat</button>
        </Link>
        <Link to={"/cats"}>
          <button>Show cats</button>
        </Link>
        <Link to={"/cat-create"}>
          <button>Create cat</button>
        </Link>
        <Link to={"/cat-update/1231"}>
          <button>Update cat</button>
        </Link>
      </div>
      <div className="Car">
        <Link to={"/car/123"}>
          <button>Show car</button>
        </Link>
        <Link to={"/cars"}>
          <button>Show cars</button>
        </Link>
        <Link to={"/car-create"}>
          <button>Create car</button>
        </Link>
        <Link to={"/car-update/1231"}>
          <button>Update car</button>
        </Link>
      </div>
    </>
  );
}
