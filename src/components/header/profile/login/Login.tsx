import React from 'react';
import classes from "./Login.module.scss";
import {Modal} from "@material-ui/core";
import LoginWindowContainer from "../../../content/modal/LoginWindow.container";


interface IProps {
  open: boolean;
  login: string
  name: string;
  setLogin: (login: string) => void;
  setIn: (isIn: boolean) => void;
  setName: (name: string) => void;
  handleOpen: () => void;
  handleClose: () => void;
}

const Login = (props: IProps) => {
  return(
    <div>
      <button className={classes.login} onClick={props.handleOpen}>
        Войти
      </button>
      <Modal open={props.open} onClose={props.handleClose}>
        <LoginWindowContainer
          name={props.name}
          login={props.login}
          setLogin={props.setLogin}
          setIn={props.setIn}
          setName={props.setName}
          handleClose={props.handleClose}
        />
      </Modal>
    </div>
  )
}

export default Login;