 import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home/Index";
import CatCreate from "./Cat/Create";
import CatUpdate from "./Cat/Update";
import CatShowOne from "./Cat/ShowOne";
import CatShowAll from "./Cat/ShowAll";

import CarCreate from "./Car/Create";
import CarUpdate from "./Car/Update";
import CarShowOne from "./Car/ShowOne";
import CarShowAll from "./Car/ShowAll";



export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cat-create" element={<CatCreate/>} />
        <Route path="/cat-update/:id" element={<CatUpdate/>} />
        <Route path="/cat/:id" element={<CatShowOne/>} />
        <Route path="/cats" element={<CatShowAll/>} />

        <Route path="/car-create" element={<CarCreate/>} />
        <Route path="/car-update/:id" element={<CarUpdate/>} />
        <Route path="/car/:id" element={<CarShowOne/>} />
        <Route path="/cars" element={<CarShowAll/>} />
    </Routes>
    </BrowserRouter>
  )
}
