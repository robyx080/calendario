import React from "react";
import {format} from 'date-fns'
import './style.css'

function CalendarHeader({date,prevMonth,nextMonth}){

    return(
        <div className="calendar-header">
            <button onClick={prevMonth}>&lt;</button>
            <h2>{format(date, 'MMMM yyyy')}</h2>
            <button onClick={nextMonth}>&gt;</button>
        </div>
    );
}

export default CalendarHeader;