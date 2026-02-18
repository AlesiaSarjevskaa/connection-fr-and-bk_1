import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { createCat } from "../../../models/Cats";

export default function CatCreate() {
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const data = await createCat(formData);
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
      <h1>Cat create</h1>
      <form>
        <input type="text" name="name" placeholder="Enter name" onChange={e => handleInput(e)}/>
        <input type="text" name="race" placeholder="Enter race" onChange={e => handleInput(e)}/>
        <input type="text" name="color" placeholder="Enter color" onChange={e => handleInput(e)}/>
        <input type="number" name="age" placeholder="Enter age" onChange={e => handleInput(e)}/>
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
