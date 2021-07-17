import React, {useState} from 'react';
import Login from "./Login";


interface IProps {
  login: string;
  name: string
  setLogin: (login: string) => void;
  setIn: (isIn: boolean) => void;
  setName: (name: string) => void;
}

const LoginContainer = (props: IProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false)
  }

  return(
    <Login
      login={props.login}
      open={open}
      name={props.name}
      setName={props.setName}
      setLogin={props.setLogin}
      setIn={props.setIn}
      handleOpen={handleOpen}
      handleClose={handleClose}
    />
  )
}

export default LoginContainer;