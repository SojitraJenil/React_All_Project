import React, { useState } from "react";
import "../Css/Calculator.css"

function Calculator() {

  let [first,setfirst] = useState("")
  let [second,setsecond] = useState("")
  let [choice,setchoice]= useState("")

  function setval(n){
    setfirst(first+n)
  }
  const sign = (sign) =>{
    if(sign === '+'){
      setsecond(first)
      setfirst("+")
      setchoice("1")
    }
    if(sign === '-'){
      setsecond(first)
      setfirst("-")
      setchoice("2")
    }
    if(sign === '*'){
      setsecond(first)
      setfirst("*")
      setchoice("3")
    }
    if(sign === '/'){
      setsecond(first)
      setfirst("/")
      setchoice("4")
    }
  }
  const clear = () =>{
    setsecond("")
    setfirst("")
    setchoice("0")
  }
  
  const ce = () =>{
    setfirst(parseInt(first/10))
  }
  
  const equal = () =>{
    if(choice === "1"){
      setfirst(Number(second)+Number(first))
  }
    if(choice === "2"){
      setfirst(Number(second)-Number(first))
  }
    if(choice === "3"){
      setfirst(Number(second)*Number(first))
  }
    if(choice === "4"){
      setfirst(Number(second)/Number(first))
  }
    setchoice("=")
}


  return (
    <>
<div className="Calc" id="Calc"  >
      <table  cellPadding="0" border="0" cellSpacing={15}>
        <tbody>
        <tr>
          <td colSpan={5} className="button"> 
            <input type="text" readOnly id="print"  onChange={(n)=>{setfirst(n.target.value)}} value={first} />
          </td>
        </tr>
        <tr> 
          <td><input type="button" value={7} onClick={()=>{setval("7")}}/> </td>
          <td><input type="button" value={8} onClick={()=>{setval("8")}}/> </td>
          <td><input type="button" value={9} onClick={()=>{setval("9")}}/> </td>
        <td><input type="button"   value='+'  onClick={()=>sign("+")} /> </td>
        </tr>
        
        <tr>
          <td><input type="button" value={4} onClick={()=>{setval("4")}}/> </td>
          <td><input type="button" value={5} onClick={()=>{setval("5")}}/> </td>    
          <td><input type="button" value={6} onClick={()=>{setval("6")}}/> </td>
          <td><input type="button" value='-' onClick={()=>sign("-")} /> </td>
        </tr>
        
        <tr>
          <td><input type="button" value={1} onClick={()=>{setval("1")}} /> </td>
          <td><input type="button" value={2} onClick={()=>{setval("2")}} /> </td>
          <td><input type="button" value={3} onClick={()=>{setval("3")}} /> </td>
          <td><input type="button" value='*' onClick={()=>sign("*")}  /> </td>
        </tr>
        
        <tr>
          <td><input type="button" value={0} onClick={()=>{setval("0")}}/> </td>
          <td><input type="button" value='C' onClick={clear}  /> </td>
          <td><input type="button" value='=' onClick={()=>equal()} /> </td>
          <td><input type="button" value='/' onClick={()=>sign("/")} /> </td>
        </tr>
        
        <tr>
          <td colSpan={4} className="text" >
             <input type="button" onClick={ce} value='Clear' name=""/>
        </td>
        </tr> 
        </tbody>
    </table>
    </div>
    </>
  );
}

export default Calculator;
