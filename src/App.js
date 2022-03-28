import logo from './logo.svg';
import './App.css';
// import writers from './writers';
import ProfileCard  from './ProfileCard';
import {useEffect, useState} from "react";
import ProfileForm from './component/ProfileForm';

function App() {
  const [allProfile, setAllProfile] = useState([
    {
      firstName: "Hannah",
      lastName: "Montana",
      email: "hannah.montana@email.com",
      phone: "+233 244 550 000",
    },
  ]);
  const submit = (profile) => {
    const array = allProfile;
    array.push(profile);
    setAllProfile(array);
  };



  return (
    <div>
      <h1>WRITER PROFILES</h1>
      <div className="container">
        <ProfileForm />
          {allProfile.map((writer) => (
            <ProfileCard key={writer.id} writer={writer}/>
          ))}
      </div>    
    </div>
  );
}

export default App;
