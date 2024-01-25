import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Loan() {

    // const [GetValue , SetGetValue] = useState();
    const [TotalLoan , SetTotalLoan] = useState();

    // const [GetMonth , SetGetMonth] = useState();
    const [TotalMonth , SetTotalMonth] = useState();

    // const [GetInterest, SetGetInterest] = useState();
    const [TotalRate , SetTotalRate] = useState();

    const [MonthlyInterest , SetMonthlyInterest] = useState("0");

    const [MonthlyEMI , SetMonthlyEMI] = useState("0");

    const [TotalLoanAmount , SetTotalLoanAmount] = useState("0");

    const [TotalInterestPayable , SetTotalInterestPayable] = useState("0");

    const LoanAns =()=>{

        SetTotalLoan(TotalLoan)

        SetTotalMonth(TotalMonth)

        SetTotalRate(TotalRate)

        SetMonthlyInterest( (TotalLoan * TotalMonth * TotalRate) / 100)
      
         const monthlyInterestRate = TotalRate / 100 / 12;
         const numberOfPayments = TotalMonth ;
         const powerFactor = Math.pow(1 + monthlyInterestRate, numberOfPayments);
         const monthlyPaymentValue =(TotalLoan * monthlyInterestRate * powerFactor) / (powerFactor - 1);
        SetMonthlyEMI(monthlyPaymentValue);


        const interest = (TotalLoan * (TotalRate * 0.01)) / TotalMonth; 
        var total = ((TotalLoan/TotalMonth) + interest).toFixed(2);
        SetTotalLoanAmount(total)
        
    SetTotalInterestPayable(TotalLoan * TotalMonth * TotalRate)


    }

  return (
    <>

<Card style={{ width: '45rem' ,backgroundColor:"#d651cb"}}  className='mt-5 text-dark'>
            <Card.Body>
              <Card.Title className='text-center'> <h3>EMI Calculator</h3> </Card.Title>
              <hr />
              <Card.Title>
                <span>Loan Amount: -:</span>
                <input type="text" value={TotalLoan} onChange={(e)=>{SetTotalLoan(e.target.value)}} />              
            </Card.Title>
            <hr />
              <Card.Title>
                <span><small>Total Number of EMI <br /> Payments (in Months):</small></span>
                <input type="text" value={TotalMonth} id="" onChange={(e)=>{SetTotalMonth(e.target.value)}}  />
              </Card.Title>
                <hr />
              <Card.Title>
                <span>Annual Interest Rate: <br /><small>(ex. 8.5% = 8.5)</small></span>
                <input type="text" value={TotalRate} id="" onChange={(e)=>{SetTotalRate(e.target.value)}} />
              </Card.Title>
              <hr />
              <Card.Text>
              <h5>()Loan Amount: {TotalLoan}</h5>
              <h5>()Number of EMIs Month -: {TotalMonth}</h5>
              <h5>()Annual Interest Rate -: {TotalRate}</h5>
              <h5>Monthly Interest Rate -: {MonthlyInterest}</h5>
              <h5>()Monthly EMI Payment	 -: {MonthlyEMI}</h5>
              <h5>Total Loan Amount Payable -: {TotalLoanAmount}</h5>
              <h5>Total Interest Payable -: {TotalInterestPayable}</h5>
              </Card.Text>
              <Button variant="primary" onClick={LoanAns}>Submit </Button>
            </Card.Body>
          </Card>
    </>
  )
}

export default Loan
