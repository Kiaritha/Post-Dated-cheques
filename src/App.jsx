import { useState, useEffect } from "react";
import './pd.css';
import './myFunc.js';
//import myFunc from "./myFunc.js";
//import homePage from './Home.jsx';

export default function PdApp() {
  const [inputs, setInputs] = useState({});
  const [cheques, setCheques] = useState([]);
  const [upcomingCheques, setUpcomingCheques] = useState([]);
  const [clearedCheques, setClearedCheques] = useState([]);
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const storedCheques = localStorage.getItem("cheques");
  
    if (storedCheques) {
      setCheques(JSON.parse(storedCheques)); 
      console.log("Loaded cheques from localStorage:", JSON.parse(storedCheques));
    } else {
      console.log("No cheques found in localStorage.");
    }
  }, []);

  useEffect(() => {
    console.log("Saving cheques to local storage", cheques);
    localStorage.setItem("cheques", JSON.stringify(cheques));
  }, [cheques]);

  useEffect(() => {
    console.log("Upcoming cheques:", upcomingCheques);
    console.log("Cleared cheques:", clearedCheques);
   console.log("Reminders:", reminders);
   }, [upcomingCheques, clearedCheques, reminders]);

  useEffect (() => {
  const today = new Date();

  const upcoming =  cheques.filter(
   (cheque) => new Date(cheque.date1) > today
  );
  setUpcomingCheques(upcoming);

  const cleared = cheques.filter(
   (cheque) => new Date(cheque.date1) <= today
  );
  setClearedCheques(cleared);

  const reminderList = cheques.filter(
   (cheque) => new Date(cheque.date1) > today &&
  (new Date(cheque.date1) - today) / (1000 * 60 * 60 *24) <=7 
  );
  setReminders(reminderList);
 }, [cheques]);


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) =>({...values, [name]: value}));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Current inputs:", inputs);

    setCheques((prevCheques) =>{
      const updatedCheques = [...prevCheques, inputs];
      console.log("Updated cheques:", updatedCheques);
      return updatedCheques;
  });
    setInputs({}); 
  };
  
   return (
    <div className="App">
       <form onSubmit = {handleSubmit}>
      <table className="pdtable">
        <tbody>
          <tr>
            <th>Cheque details</th>
            <th>Upcoming cheques</th>
            <th>Cleared cheques</th>
          </tr>
          <tr>
            <td>
              <label> 
                Acc name:
                <input
                type="text"
                name="username"
                value={inputs.username || ""}
                required
                onChange= {handleChange}
                />
                </label><br></br>
              <label>
                Acc number:
                <input type="text"
                name = "cheque1"
                value = {inputs.cheque1 || ""}
                required
                onChange = {handleChange}
                />
              </label><br></br>
              <label>
               Amount:<br></br>
               <input
               type="number"
               name="amt1"
               value={inputs.amt1 || ""}
               required
               onChange= {handleChange}
               />
              </label><br></br>

              <label>
                Date payable:
                <input
                type="date"
                name="date1"
                value={inputs.date1 || ""}
                required
                onChange= {handleChange}
                />
              </label>
              </td>
              <td>
              {upcomingCheques.length > 0 ? (
            <ul>
              {upcomingCheques.map((cheque,index) => (
                <li key={index}>
                  {cheque.username} | {cheque.cheque1} | {cheque.amt1} | {cheque.date1}
                </li>
              )
            )}
            </ul>
          ) : (<p> There are no upcoming cheques</p>)
        }
              </td>
              <td>
              {clearedCheques.length > 0 ? (
          <ul>
        {clearedCheques.map((cheque,index)=>(
          <li key={index}>
          {cheque.username} | {cheque.cheque1} | {cheque.date1}
          </li>
        ))}
          </ul>
        ) : (<p>No cleared cheques</p>)
        }
              </td>
              </tr>
              </tbody>
      </table>
      <input type="submit" value="Add cheque" />
            </form>  
            
        <h2> <u>Reminders</u></h2>
        {reminders.length > 0 ? (
          <ul>
        {reminders.map((cheque, index) => (
          <li key={index}>
          Cheque for {cheque.username} | account number: {cheque.cheque1} | is payable on:
          {cheque.date1}
          </li>
        ))}
         </ul>
          ) : (
            <p> There are no upcoming cheques in the next 7 days </p>
          )}
          <h2><u>Upcoming cheques</u></h2>
          {upcomingCheques.length > 0 ? (
            <ul>
              {upcomingCheques.map((cheque,index) => (
                <li key={index}>
                  {cheque.username} | {cheque.cheque1} | {cheque.amt1} | Due on : {cheque.date1}
                </li>
              )
            )}
            </ul>
          ) : (<p> There are no upcoming cheques</p>)
        }
        <h2><u>Cleared cheques</u></h2>
        {clearedCheques.length > 0 ? (
          <ul>
        {clearedCheques.map((cheque,index)=>(
          <li key={index}>
           These cheques have been cleared: {cheque.username} | {cheque.cheque1} | cleared: {cheque.date1}
          </li>
        ))}
          </ul>
        ) : (<p>No cleared cheques</p>)
        }
        
    </div>
  );
};


