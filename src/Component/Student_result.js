import { Alert } from "bootstrap";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";

function Student_result() {

    const [PrintName , SetPrintName] = useState()
    const [GetName , SetGetName] = useState("")

    const [PrintEnglish , SetPrintEnglish] = useState()
    const [GetEnglish , SetGetEnglish] = useState("")

    const [PrintStat , SetPrintStat] = useState()
    const [GetStat , SetGetStat] = useState("")

    const [PrintEco , SetPrintEco] = useState()
    const [GetEco , SetGetEco] = useState("")

    const [PrintBA , SetPrintBA] = useState()
    const [GetBA , SetGetBA] = useState("")

    const [PrintSP , SetPrintSP] = useState()
    const [GetSP , SetGetSP] = useState("")

    const [Total , SetTotal] = useState("")

    const [Per , SetPer] = useState("")

    const ClickResult =()=>{
      SetPrintName(GetName)
      SetPrintEnglish(GetEnglish)
      SetPrintStat(GetStat)
      SetPrintEco(GetEco)
      SetPrintBA(GetBA)
      SetPrintSP(GetSP)
      SetTotal(parseInt(GetEnglish)+parseInt(GetStat)+parseInt(GetEco)+parseInt(GetBA)+parseInt(GetSP))
      SetPer(Total*100/500)


    }


  return (
    <>
    <div className="container w-100 d-flex my-4">
    <div style={{width:"30%"}}>
      <Table border={3} align>
        <tbody>
        <tr>
            <td>Name -:</td>  
            <td><input type="text" placeholder="Enter Name..." onChange={(e)=>{SetGetName(e.target.value)}} /></td>
        </tr> 
        <tr>
            <td>Eng -:</td>  
            <td><input type="text" placeholder="Enter English Mark..." onChange={(e)=>{SetGetEnglish(e.target.value)}}/></td>
        </tr> 
        <tr>
            <td>Stat -:</td>  
           <td> <input type="text" placeholder="Enter Stat Mark..." onChange={(e)=>{SetGetStat(e.target.value)}}/> </td> 
        </tr> 
        <tr>
            <td>Eco -:</td>  
           <td> <input type="text" placeholder="Enter Eco Mark..." onChange={(e)=>{SetGetEco(e.target.value)}}/></td>  
        </tr> 
        <tr>
            <td>BA -:</td>  
           <td> <input type="text"  placeholder="Enter BA Mark..." onChange={(e)=>{SetGetBA(e.target.value)}}/> </td> 
        </tr> 
        <tr>
            <td>SP -:</td>  
            <td><input type="text" placeholder="Enter Sp Mark..." onChange={(e)=>{SetGetSP(e.target.value)}} /></td>  
        </tr> 
        <tr>
            <td colSpan={2} align="center"><input type="button" value="Submit" onClick={ClickResult} /></td>
        </tr>
        </tbody>
      </Table>
    </div>

      <div style={{width:"70%"}} className="ms-5">
        <Table striped bordered border={3 }>
          <thead>
            <tr>
              <th rowSpan={2} className="text-center ">
                R.No
              </th>
              <th rowSpan={2} className="text-center ">
                Name
              </th>
              <th colSpan={5} className="text-center ">
                Subject
              </th>
              <th rowSpan={2} className="text-center ">
                Total
              </th>
              <th rowSpan={2} className="text-center ">
                Per
              </th>
            </tr>
            <tr>
              <th>Eng</th>
              <th>Stat</th>
              <th>Eco</th>
              <th>B.A.</th>
              <th>S.P</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1 </th>
              <th>{PrintName}</th>
              <th>{PrintEnglish}</th>
              <th>{PrintStat}</th>
              <th>{PrintEco}</th>
              <th>{PrintBA}</th>
              <th>{PrintSP}</th>
              <th>{Total}</th>
              <th>{Per}</th>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>

    </>
  );
}

export default Student_result;
