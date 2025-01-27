import React from "react";

import "./chqs.css";
export default function ChequesPage({upcomingCheques, reminders, clearedCheques}){
    return (
        <div className="headings">
        <h1>Cheques overview</h1>

        <h2>Upcoming Cheques</h2>
        {upcomingCheques.length > 0 ? (
          <ul>
            {upcomingCheques.map((cheque, index) => (
              <li key={index}>
                {cheque.username} | {cheque.cheque1} | {cheque.amt1} | Due on: {cheque.date1}
              </li>
            ))}
          </ul>
        ) : (
          <p>There are no upcoming cheques</p>
        )}
  
        <h2>Reminders</h2>
        {reminders.length > 0 ? (
          <ul>
            {reminders.map((cheque, index) => (
              <li key={index}>
                Cheque for {cheque.username} | Account: {cheque.cheque1} | Payable on: {cheque.date1}
              </li>
            ))}
          </ul>
        ) : (
          <p>There are no upcoming cheques in the next 7 days</p>
        )}
  
        <h2>Cleared Cheques</h2>
        {clearedCheques.length > 0 ? (
          <ul>
            {clearedCheques.map((cheque, index) => (
              <li key={index}>
                Cleared Cheque: {cheque.username} | {cheque.cheque1} | Cleared on: {cheque.date1}
              </li>
            ))}
          </ul>
        ) : (
          <p>No cleared cheques</p>
        )}
      </div>
    );
  }
    
