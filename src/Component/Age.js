import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const  Age = () => {


    const [birthDate, setBirthDate] = useState("0");
    const [TodayDate, setTodayDate] = useState("0");
    const [years, setYears] = useState("0");
    const [months, setMonths] = useState("0");
    const [days, setDays] = useState("0");
    const [WeekDay , SetWeekDay ] = useState("0");
    const [TotalMonth , SetTotalMonth] = useState("0");
    const [TotalWeek , SetTotalWeek] = useState("0");
    const [TotalDate , SetTotalDate] = useState("0");
    const [TotalHour , SetTotalHour] = useState("0");
    const [TotalMinute , SetTotalMinute] = useState("0");
    const [TotalSecond , SetTotalSecond] = useState("0");


    const calculateAge = () => {

        // calculates the time difference in milliseconds between two dates
        const diffTime = new Date(TodayDate) - new Date(birthDate);

        // (24 hours * 60 minutes * 60 seconds * 1000 milliseconds
        const totalDays = Math.floor(diffTime / (24 * 60 * 60 * 1000));

        setYears(Math.floor(totalDays / 365.25));

        setMonths(Math.floor((totalDays % 365.25) / 30.4375));

        setDays(Math.floor((totalDays % 365.25) % 30.4375));

        // ============================================================
        const d = new Date();
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        SetWeekDay("(" + d.getDay() + ")" + weekday[d.getDay()])
        

        // SetTotalMonth(Math.floor(years*12) + (months*4));
        SetTotalMonth(Math.floor((years*12)+(months)));

        SetTotalWeek(Math.ceil(((years*365)+(months*30.4375)) / 7  ));

        SetTotalDate(Math.floor((years*365.25)+(months*30.4375)+(days)));

        SetTotalHour(Math.ceil((years*365.25)+(months*30.4375)+(days)) * 24);

        SetTotalMinute((Math.ceil((years*365.25)+(months*30.4375)+(days)) * 24 ) * 60);

        SetTotalSecond((Math.ceil((years*365.25)+(months*30.4375)+(days)) * 24 ) * 3600);

          console.log("Year :" + years)
          console.log("Month :" + months)
          console.log("Day :" + days)

    };

    
  return (
    <>


          <Card style={{ width: '25rem' }}  className='mt-5 bg-info' >
            <Card.Body>
              <Card.Title className='text-center'> <h3>Age Calculator</h3> </Card.Title>
              <hr />
              <Card.Title>
                <span>Date Of Birth -:</span>
                <input type="date"  value={birthDate} onChange={(e) => setBirthDate(e.target.value)} title='Birth of date'/>
              </Card.Title>
                <Card.Title>
                <span>Today's Date -:</span>
              <input type="date" name="" id="" onChange={(e) => setTodayDate(e.target.value)}/>
              </Card.Title>
              <hr />
            <h5>Birthday Date -:{birthDate}</h5>
            <h5>Current' Date -:{TodayDate}</h5>
            <hr />
            <h5>{years}years {months} Months  {days} days </h5>
            <h5>{TotalMonth} months {days} days</h5>
            <h5>{TotalWeek} weeks {WeekDay}</h5>
            <h5>{TotalDate} days</h5>
            <h5>{TotalHour} Hour</h5>
            <h5>{TotalMinute} minutes</h5>
            <h5>{TotalSecond} minutes</h5>
              <Card.Text>
                
              </Card.Text>
              <Button variant="primary" onClick={calculateAge}>Submit </Button>
            </Card.Body>
          </Card>
    </>
  )
}

export default Age
