import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Age from "./Component/Age";
import Headerr from "./Component/Headerr";
import Loan from "./Component/Loan";
import TicToc from "./Component/TicToc";
import Calculator from "./Component/Calculator";
import Todo from "./Component/Todo";
import IncriDecri from "./Component/IncriDecri";
import { Routes, Route } from "react-router-dom";
import Student_result from "./Component/Student_result";


function App() {
  return (
    <>
      <Headerr />

<center>

     <Routes>
        <Route path="/Student_res" element={<Student_result />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/IncriDecri" element={<IncriDecri />} />
        <Route path="/Age" element={< Age />} />
        <Route path="/Loan" element={<Loan />} />
        <Route path="/TicToc" element={    <TicToc />} />
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
      </center>

    </>
  );
}

export default App;
