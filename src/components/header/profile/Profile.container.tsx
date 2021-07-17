import React, {useEffect, useState} from 'react';
import Profile from "./Profile";


const ProfileContainer = () => {
  const [isIn, setIn] = useState<boolean>(false);
  const [login, setLogin] = useState<string>("")
  const [name, setName] = useState<string>("")

  useEffect(() => {
    if(sessionStorage.getItem("login")){
      setName(sessionStorage.getItem("login") || "");
      setLogin(sessionStorage.getItem("login") || "");
      setIn(true);
    }
  }, []);

  return(
    <Profile
      login={login}
      isIn={isIn}
      name={name}
      setLogin={setLogin}
      setIn={setIn}
      setName={setName}
    />
  )
}

export default ProfileContainer;