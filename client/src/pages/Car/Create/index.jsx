import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { createCar } from "../../../models/Cars";

export default function CarCreate() {
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const data = await createCar(formData);
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
        <input type="text" name="model" placeholder="Enter model" onChange={e => handleInput(e)}/>
        <input type="text" name="year" placeholder="Enter year" onChange={e => handleInput(e)}/>
        <input type="text" name="color" placeholder="Enter color" onChange={e => handleInput(e)}/>
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
