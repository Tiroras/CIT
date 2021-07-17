import React, {useState} from 'react';
import User from "./User";


interface IProps {
  login: string;
  name: string;
  setLogin: (login: string) => void;
  setIn: (isIn: boolean) => void;
  setName: (name: string) => void
}

const UserContainer = (props: IProps) => {
  const [redact, setRedact] = useState<boolean>(false);

  const clickHandler = () => {
    props.setIn(false);
    props.setName("")
    sessionStorage.removeItem("login");
  }

  const blurHandler = () => {
    setRedact(false);
    props.setName(props.login);
  }

  return(
    <User
      login={props.login}
      name={props.name}
      redact={redact}
      setRedact={setRedact}
      setLogin={props.setLogin}
      clickHandler={clickHandler}
      blurHandler={blurHandler}
    />
  )
}

export default UserContainer;