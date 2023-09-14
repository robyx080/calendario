import {React, useState} from 'react'
import CalendarHeader from '../components/CalendarHeader'
import CalendarTable from '../components/CalendarTable'
import './style.css'

function Calendar(){
    const [date,setDate]=useState(new Date());

    //funzione che mi permette di andare al mese precedente
    const handlePrevMonth=()=>{
        const newDate=new Date(date.getFullYear(),date.getMonth()-1,1)
        setDate(newDate)
    }

    //funzione che mi permette di andare al mese successivo 
    const handleNextMonth=()=>{
        const newDate=new Date(date.getFullYear(),date.getMonth()+1,1)
        setDate(newDate)
    }

    return(
        <div className='calendar'>
            <CalendarHeader date={date} prevMonth={handlePrevMonth} nextMonth={handleNextMonth}/>
            <CalendarTable date={date}/>
        </div>
    );
}

export default Calendar