import React, { useState } from 'react'

const ProfileForm = ({submit}) => {
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

const handleChange = (event) => {
    const {name, value} = event.target;
    setProfile(prevState => ({...prevState, [name]: value}));
    
}
const handleSubmit = (event) => {
    event.preventDefault();
}

  return <form>
      <fieldset>
          <legend>Personal Information</legend>
          <input type="text" name='firstName' onChange={handleChange} value={profile.firstName}/>
          <input type="text" name='lastName' onChange={handleChange} value={profile.lastName}/>
          <input type="email" name='email' onChange={handleChange} value={profile.email}/>
          <input type="tel" name='phone' onChange={handleChange} value={profile.phone}/>
      </fieldset>
      <button className='form' onClick={handleSubmit}>Add Writer</button>
  </form>;
  
}

export default ProfileForm;