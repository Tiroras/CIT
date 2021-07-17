import React from 'react';
import classes from "./User.module.scss";
import ChangeName from "./ChangeName";


interface IProps {
  login: string;
  redact: boolean;
  name: string;
  setLogin: (login: string) => void;
  setRedact: (redact: boolean) => void;
  clickHandler: () => void;
  blurHandler: () => void;
}

const User = (props: IProps) => {
  return(
    <div className={classes.user}>
      {props.redact ?
        <ChangeName
          login={props.login}
          setLogin={props.setLogin}
          blurHandler={props.blurHandler}
        />
        : <div className={classes.name} onClick={() => props.setRedact(true)}>
          {props.name}
        </div>
      }
      <div>
        <button onClick={() => props.clickHandler()}>
          Выйти
        </button>
      </div>
    </div>
  )
}

export default User;