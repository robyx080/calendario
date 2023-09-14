import React from "react";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from 'date-fns';
import CalendarDay from "./CalendarDay";
import './style.css'

function CalendarTable({date}) {
    const monthStart = startOfMonth(date);     //restituisce la data del giorno di inizio mese
    const monthEnd = endOfMonth(monthStart);   //restituisce la data del giorno di fine mese
    const startDate = startOfWeek(monthStart); //restituisce la data del primo giorno della prima settima 
    const endDate = endOfWeek(monthEnd);       //restituisce la data dell'ultimo giorno dell'ultima settimana 

    //console.log("monthStart: " + monthStart)
    //console.log("monthEnd: " + monthEnd)
    //console.log("startDate: " + startDate)
    //console.log("endDate: " + endDate)

    const rows = [];  //array che mi conterra le singole settimane del mese
    const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]  //headers tabella con i giorni della settimana

    let days = [];
    let day = startDate;

    //inserisco le singole settimaneP
    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            days.push(day);
            day = addDays(day, 1); //passo al giorno successivo
        }
        rows.push(days)
        days = [];
    }
    
    //console.log(rows)
    
    return(
        <table className="calendar-table">
            <thead>
                <tr>
                    {WEEK_DAYS.map((day,index) => ( //headers tabella
                        <th key={index}>{day}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row,index)=>( //righe tabella
                    <CalendarDay key={index} week={index} days={row} monthStart={monthStart} monthEnd={monthEnd}/>
                ))}
            </tbody>
        </table>
    );
}

export default CalendarTable