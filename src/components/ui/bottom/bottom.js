import React, { useState, useEffect } from 'react';
import { GoClockFill } from 'react-icons/go';
import '../Sidebar.css'

export const Third = () => {
    const CurrentDateTime = () => {
        const [currentDateTime, setCurrentDateTime] = useState(new Date());
    
        useEffect(() => {
          // Update the current date and time every second
          const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
          }, 1000);
    
          // Clear the interval when the component unmounts
          return () => clearInterval(intervalId);
        }, []);
    
        // Format the date and time as per your requirement
        const formattedDateTime = `${currentDateTime.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })}, ${currentDateTime.toLocaleDateString([], {
          month: 'long',
          day: 'numeric',
        })}`;
    
        return formattedDateTime; // Return the formattedDateTime
      };
    
      // Call CurrentDateTime function to get the formattedDateTime
      const formattedDateTime = CurrentDateTime();
  return (
    <div class="nav" style={{
        marginTop: '150px',
        marginBottom:'20px'
    }}>
    <div style={{
         width: '162px',
         height: '42.5px',
         borderRadius: '10px',
         position: 'relative',
         background: '#F0F2F5',
         left: '70px',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center'
    }}>
      <span style={{
        color: '#828D99',
        fontSize: '12px',
        fontWeight: '800'
      }}>  Show More</span>
    </div>
    <div class="relative left-[70px] mt-[20px] w-[160px] h-[42.5px] bg-white rounded-[10px] shadow-md flex justify-center items-center gap-[10px]">

      <span>
        <GoClockFill color='#B8C1CC'/>
      </span>
      <span style={{
        fontSize: '12px',
        fontWeight: '700',
        color: '#98A1B3'
      }}>{formattedDateTime}</span>
    </div>
  </div>
  )
}
