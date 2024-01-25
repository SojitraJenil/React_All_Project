import React from 'react'
import "../Css/TicToc.css";


function TicToc() {

    // var tic =()=>{
    //     alert()
    // }
    function tic (e){
        alert()
    }
  return (
    <>

    <div className="TicToc my-4">
     <div className="game" id='game'cellpadding={10}>
     <h4>Tic Toc Tie</h4>
      <table cellSpacing={0}  cellpadding="10"  class="tic">
    <tr> 
      <td> <input type="button" value="" id="t1" onclick={(e) =>(tic)} /> </td>
      <td> <input type="button" value="" id="t2" onclick={tic} /> </td>
      <td> <input type="button" value="" id="t3" onclick={tic} /> </td>

    </tr>
    <tr>
        <td colSpan={3} style={{backgroundColor:"black"}}> </td>
    </tr>
    <tr>
      <td> <input type="button" value="" id="t4" onclick={tic} /> </td>
      <td> <input type="button" value="" id="t5" onclick={tic} /> </td>
      <td> <input type="button" value="" id="t6" onclick={tic} /> </td>
    </tr>    
    <tr>
        <td colSpan={3} style={{backgroundColor:"black"}}> </td>
    </tr>
    <tr>
      <td> <input type="button" value="" id="t7" onclick={tic} /> </td>
      <td> <input type="button" value="" id="t8" onclick={tic} /> </td>
      <td> <input type="button" value="" id="t9" onclick={tic} /> </td>
    </tr>
  </table>

  <div className="result"> 
        <input className="display" placeholder="R E S U L T" type="text" readonly id="result" />
  </div>
</div>
</div>

 
    </>
  )
}

export default TicToc
