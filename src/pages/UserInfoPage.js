import React from 'react'
import '../UserInfoPage.css';

const UserInfoPage = () => {
  return (
    <div class = "bigDiv">
      <div class = "topDiv"> 
      <h1> Personal Information</h1>
      <p> This information will be stored and used for the webapp </p>
      </div>

      <div class = "infoDiv">
      <form>
        <label for = "fname" class = "firstName"> First name </label>
        <input type = "text" name = "fname" id = "fname"/>

        <label for = "lname" class = "lastName"> Last name </label>
        <input type = "text" name = "lname" id = "lname"/> <br></br>

        <label for = "pnumber" class = "phoneNumber"> Phone number </label>
        <input type = "tel" name = "pnumber" id = "pnumber"/><br></br>
        Emergency contact: <input type = "tel" name = "econtact" id = "econtact"/>

        <p> Rank your transportation preference </p>

        <label for="transportation-methods" class = "first"> First </label> 
        <select name="transportation-methods" id="transportation-methods"> 
        <option value="" disabled selected>Select an option</option>
        <option value="walking">Walking</option> 
        <option value="bussing">Bussing</option> 
        <option value="biking">Biking</option> 
        <option value="driving">Driving</option> 
        </select>

        <br></br>
        <label for="transportation-methods"> Second </label> 
        <select name="transportation-methods" id="transportation-methods"> 
        <option value="" disabled selected>Select an option</option>
        <option value="walking">Walking</option> 
        <option value="bussing">Bussing</option> 
        <option value="biking">Biking</option> 
        <option value="driving">Driving</option> 
        </select>

        <br></br>
        <label for="transportation-methods" class = "third"> Third </label> 
        <select name="transportation-methods" id="transportation-methods"> 
        <option value="" disabled selected>Select an option</option>
        <option value="walking">Walking</option> 
        <option value="bussing">Bussing</option> 
        <option value="biking">Biking</option> 
        <option value="driving">Driving</option> 
        </select>

        <br></br>
        <label for="transportation-methods" class = "fourth"> Fourth </label> 
        <select name="transportation-methods" id="transportation-methods"> 
        <option value="" disabled selected>Select an option</option>
        <option value="walking">Walking</option> 
        <option value="bussing">Bussing</option> 
        <option value="biking">Biking</option> 
        <option value="driving">Driving</option> 
        </select>
        <br></br>
  
        <button type="submit" class = "button">Confirm</button>
      </form>
        
      </div>
    </div>
  )


}


export default UserInfoPage