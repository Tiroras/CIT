import React from 'react';
import UserContainer from "./user/User.container";
import LoginContainer from "./login/Login.container";


interface IProps {
  isIn: boolean;
  login: string;
  name: string
  setIn: (isIn: boolean) => void;
  setLogin: (login: string) => void;
  setName: (name: string) => void;
}

const Profile = (props: IProps) => {
  return(
    <div>
      {props.isIn ?
        <UserContainer
          login={props.login}
          name={props.name}
          setLogin={props.setLogin}
          setIn={props.setIn}
          setName={props.setName}
        /> :
        <LoginContainer
          login={props.login}
          name={props.name}
          setIn={props.setIn}
          setLogin={props.setLogin}
          setName={props.setName}
        />}
    </div>
  )
}

export default Profile;