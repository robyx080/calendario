import React from 'react';
import { format, isAfter,isBefore } from 'date-fns';
import './style.css'

function CalendarDay({week,days,monthStart,monthEnd}) {
    //console.log(days)
    //console.log(monthStart)
    //console.log(monthEnd)
    //console.log(isAfter(days[6],monthEnd))
    //console.log(isBefore(days[0],monthStart))

    return (
        <tr key={week}>
            {days.map((day) => (
                <td key={day}>
                        {(isAfter(day,monthEnd) || isBefore(day,monthStart)) ? (    //se il giorno della settimana non è del mese corrente lo setto in grigio altrimenti no
                            <div className='calendar-cell-g'>
                                {format(day, 'd')}  
                            </div>
                            ) : (
                                <div className='calendar-cell-b'>
                                    {format(day, 'd')}
                                </div> 
                            )
                        }
                </td>
            )
            )}
        </tr>
    );
}

export default CalendarDay;