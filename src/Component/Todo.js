import React, { useState } from "react";
import Table from 'react-bootstrap/Table';


function Todo() {
    const[Todo , SetTodo] = useState('')

    const[all , setall] = useState([])
    const[status , setstatus] = useState(false)
    const[id , setid] = useState()

    const GetInput =(e) =>{
      SetTodo(e.target.value) 
    }

    const btnhandler = () => {
        if(status)
        {
            var info = [...all]
            info[id] = Todo
            setall(info)
            setstatus(false)
        }
        else
        {
        setall([...all,Todo])
        }
    }

    function Delete_Handler(element){
      const NewStat = all.filter((elements,ind)=>{
        return ind!=element
      })
      setall(NewStat)
    }

    
    function Update_Handler(id){

      SetTodo(all[id])

      setstatus(true)
      setid(id)
      
    }
    return(
    <> 
     <div className=" w-50 border px-3 py-2 bg-primary container" >
    <center className="mt-3">
      <input type="text" value={Todo} className=" p-2 w-50 " onChange={GetInput} required placeholder="Enter the task..." />
      <input type="button" className="p-2 ms-3 px-3" onClick={btnhandler} value="Add task" />
  <Table border={1} striped bordered hover className="mt-2">
  <thead>
    <tr>
      <th style={{width:"20%"}}>No</th>
      <th>Task</th>
      <th style={{width:"20%"}}>Delete</th>
      <th style={{width:"20%"}}>Update</th>
    </tr>
  </thead>
  <tbody>
  {
      all.map((element,ind)=>{
        return(
    <tr>

          <td style={{width:"20%"}}>{ind+1}</td>
          <td>{element}</td>
          <td style={{width:"20%"}}> <input type="button" value="Delete" onClick={()=>{Delete_Handler(ind)}} /> </td>
          <td style={{width:"20%"}}> <input type="button" value="update"  onClick={()=>{Update_Handler(ind)}} /> </td>
      </tr>

        )
      })
  }
        </tbody>
  </Table>
  </center>
  </div>

    </>
  );
}

export default Todo;
