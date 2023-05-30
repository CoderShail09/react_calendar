// import React, { useState } from "react";
// import "./Calender.css";

// function CalendarHeader() {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

//   const handleNextYearClick = () => {
//     setCurrentYear(currentYear + 1);
//   };
//   const handlePreviousYearClick = () => {
//     setCurrentYear(currentYear - 1);
//     console.log(selectedDate);
//   };

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//   };

//   const renderCalendar = () => {
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear();
//     const currentMonth = currentDate.getMonth();

//     const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//     const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

//     const calendar = [];
//     let dayCount = 1;

//     for (let i = 0; i < 6; i++) {
//       const week = [];

//       for (let j = 0; j < 7; j++) {
//         if ((i === 0 && j < firstDayOfMonth) || dayCount > daysInMonth) {
//           week.push(<td key={`${i}-${j}`} />);
//         } else {
//           const date = new Date(currentYear, currentMonth, dayCount);
//           const isSelected =
//             selectedDate && date.toDateString() === selectedDate.toDateString();
//           week.push(
//             <td
//               key={`${i}-${j}`}
//               className={isSelected ? "selected" : ""}
//               onClick={() => handleDateClick(date)}
//             >
//               {dayCount}
//             </td>
//           );
//           dayCount++;
//         }
//       }

//       calendar.push(<tr key={i}>{week}</tr>);
//     }

//     return calendar;
//   };

//   return (
//     <div className="date-picker">
//       <div className="icon">
//       {selectedDate && <h3>{selectedDate.toDateString()}</h3>}
//         <button onClick={handlePreviousYearClick}>Previous</button>
//         {currentYear}

//         <button onClick={handleNextYearClick}>Next</button>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>Sun</th>
//             <th>Mon</th>
//             <th>Tue</th>
//             <th>Wed</th>
//             <th>Thu</th>
//             <th>Fri</th>
//             <th>Sat</th>
//           </tr>
//         </thead>
//         <tbody>{renderCalendar()}</tbody>
//       </table>
//     </div>
//   );
// }

// export default CalendarHeader;

//second way//

import React, { useState } from "react";


function CalendarHeader() {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePrevMonth = () => {
    setDate((prevDate) => {
      const prevMonth = prevDate.getMonth() - 1;
      return new Date(prevDate.getFullYear(), prevMonth, 1);
    });
  };

  const handleNextMonth = () => {
    setDate((prevDate) => {
      const nextMonth = prevDate.getMonth() + 1;
      return new Date(prevDate.getFullYear(), nextMonth, 1);
    });
  };
  const handleDateClick = (date) => {
        setSelectedDate(date);
        console.log({date})
      };
  const renderCalendar = () => {
   
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    
   
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    // console.log(daysInMonth)


    const calendar = [];
    let dayCount = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];

      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth) || dayCount > daysInMonth) {
          week.push(<td key={`${i}-${j}`} />);
        } else {
          const date = new Date(currentYear, currentMonth, dayCount);
          const isSelected =
          selectedDate && date.toDateString() === selectedDate.toDateString();
          week.push(
          <td key={`${i}-${j}`}
           className={isSelected ? "selected" : ""}
           onClick={() => handleDateClick(date)}
          >
            {dayCount}
          </td>);
          dayCount++;
        }
        
      }
      calendar.push(<tr key={i}>{week}</tr>);
      
      
    }
    
    return calendar;
  };

  return (
    <div className="calendar">
      <div className="selectdate">
      {selectedDate && <h3>{selectedDate.toDateString()}</h3>}
      </div>
      <div className="header">
        <button className="arrow" onClick={handlePrevMonth}>
        {'<'}
        </button>
        <h2>
          {date.toLocaleString("default", { month: "short", year: "numeric" })}
        </h2>
        <button className="arrow" onClick={handleNextMonth}>
       {'>'}
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
          </tr>
        </thead>
        <tbody>{renderCalendar()}</tbody>
      </table>
    </div>
  );
}

export default CalendarHeader;
