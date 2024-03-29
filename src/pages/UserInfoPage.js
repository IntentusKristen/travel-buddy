import React, { useState } from 'react';
import '../UserInfoPage.css';

import { useNavigate } from 'react-router-dom';

const UserInfoPage = () => {
  const navigate = useNavigate();
  const goToHomePage = () => { navigate('/'); };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [transportationOne, setTransportationOne] = useState('');
  const [transportationTwo, setTransportationTwo] = useState('');
  const [transportationThree, setTransportationThree] = useState('');
  const [transportationFour, setTransportationFour] = useState('');
  const[isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  
  return (
    <div class = "bigDiv">
    <div
      style={{
        position: 'absolute',
        top: "10px",
        right: "10px",
      }}
    >
      <button onClick={goToHomePage} className="gpt-btn">Go to Home</button>
    </div>
      <div class = "topDiv" style={{
      marginTop: "3rem",
    }}> 
      <h1> Personal Information</h1>
      <p style={{textAlign: 'left'}}> This information will be stored and used for the webapp </p>
      </div>

      <div class = "infoDiv" >
        <div>
       
      <form >
        <label for = "fname" class = "firstName"> First name </label>
        <input className="personal-info-input" type = "text" name = "fname" id = "fname" value = {firstName} onChange={ (e) => setFirstName(e.target.value)}/> <br></br>

        <label for = "lname" class = "lastName"> Last name </label>
        <input className="personal-info-input" type = "text" name = "lname" id = "lname" value = {lastName} onChange={ (e) => setLastName(e.target.value)}/> <br></br>

        <label for = "pnumber" class = "phoneNumber"> Phone number </label>
        <input className="personal-info-input" type = "tel" name = "pnumber" id = "pnumber" value = {phoneNumber} onChange={ (e) => setPhoneNumber(e.target.value)}/><br></br>
        Emergency contact <input type = "tel" className="personal-info-input"  name = "econtact" id = "econtact" value = {emergencyContact} onChange={ (e) => setEmergencyContact(e.target.value)}/>

        <p style={{textAlign: 'left'}}> Rank your transportation preference </p>

        <label for="transportation-methods" class = "first"> First </label> 
        <select name="transportation-methods" id="transportation-methods" value = {transportationOne} onChange={ (e) => setTransportationOne(e.target.value)}> 
        <option value="" disabled selected>Select an option</option>
        <option value="walking">Walking</option> 
        <option value="bussing">Bussing</option> 
        <option value="biking">Biking</option> 
        <option value="driving">Driving</option> 
        </select>

        <br></br>
        <label for="transportation-methods"> Second </label> 
        <select name="transportation-methods" id="transportation-methods" value = {transportationTwo} onChange={ (e) => setTransportationTwo(e.target.value)}> 
        <option value="" disabled selected>Select an option</option>
        <option value="walking">Walking</option> 
        <option value="bussing">Bussing</option> 
        <option value="biking">Biking</option> 
        <option value="driving">Driving</option> 
        </select>

        <br></br>
        <label for="transportation-methods" class = "third"> Third </label> 
        <select name="transportation-methods" id="transportation-methods" value = {transportationThree} onChange={ (e) => setTransportationThree(e.target.value)}> 
        <option value="" disabled selected>Select an option</option>
        <option value="walking">Walking</option> 
        <option value="bussing">Bussing</option> 
        <option value="biking">Biking</option> 
        <option value="driving">Driving</option> 
        </select>

        <br></br>
        <label for="transportation-methods" class = "fourth"> Fourth </label> 
        <select name="transportation-methods" id="transportation-methods" value = {transportationFour} onChange={ (e) => setTransportationFour(e.target.value)}> 
        <option value="" disabled selected>Select an option</option>
        <option value="walking">Walking</option> 
        <option value="bussing">Bussing</option> 
        <option value="biking">Biking</option> 
        <option value="driving">Driving</option> 
        </select>
        <br></br>
  
        <button type="button" class = "button" onClick={handleSubmit} className="gpt-btn">Confirm</button>
      </form>
      </div>
      {isSubmitted && (<div id="displayArea" style={{position: 'absolute', top: '60%', right: '5%'}}>
        {isSubmitted && firstName && lastName && <p> Hi, {firstName} {lastName} </p>}

        {isSubmitted && phoneNumber && emergencyContact && <p> Welcome to travel buddy! We will store your phone number {phoneNumber} to send text updates and keep the number {emergencyContact} for emergency contact purposes only</p>}

        {isSubmitted && transportationOne && transportationTwo && transportationThree && transportationFour && <p> You have selected your transportation priority in the following order: {transportationOne}, {transportationTwo}, {transportationThree} and {transportationFour}</p>}

      </div>
      )}
      </div>
      
      
    </div>
  )


}


export default UserInfoPage