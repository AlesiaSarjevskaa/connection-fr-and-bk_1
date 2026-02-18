import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { createMovie } from "../../../models/Movies";

export default function MovieCreate() {
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const data = await createMovie(formData);
    if (data.status === 201) return navigate("/");
    setInfo(data.msg);
  }
  const handleInput = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleButton = (e) => {
    e.preventDefault();
    postForm();
  };

  return (
    <>
      <h1>Car create</h1>
      <form>
        <input type="text" name="name" placeholder="Enter name" onChange={e => handleInput(e)}/>
        <input type="text" name="year" placeholder="Enter year" onChange={e => handleInput(e)}/>
        <input type="text" name="author" placeholder="Enter author" onChange={e => handleInput(e)}/>
        <button onClick={handleButton}>
          Send
        </button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </>
  )
}
