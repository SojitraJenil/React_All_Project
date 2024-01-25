import Card from "react-bootstrap/Card";
import React, { useState } from "react";

function IncriDecri() {

let [num, setNum]= useState(3);


  let increment =()=>{
    if(num<1000)
    {
    setNum(num+1);
    }
  };

  let Decrement = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
  



  return (
    <>
      <Card style={{ width: "18rem", height:"180px" }}  className="mt-3 bg-warning">
        <Card.Body>
          <Card.Title>increment Decrement Task</Card.Title>
          <hr />
          <h4 className="text-center">{num}</h4>
          <div className="d-flex">
            <input className="ms-2" type="button" onClick={Decrement} value="Decrement(-)"  />
            <input className="ms-2" type="button" onClick={increment} value="increment(+)" />
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default IncriDecri;
