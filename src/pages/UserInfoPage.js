import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserInfoPage = () => {
  const navigate = useNavigate();
  const goToHomePage = () => { navigate('/'); };
  return (
    <div>
      <button onClick={goToHomePage}>Go to Home</button>
    </div>
  )
}

export default UserInfoPage