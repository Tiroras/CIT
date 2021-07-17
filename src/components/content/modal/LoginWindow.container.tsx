import React, {useState} from 'react';
import LoginWindow from "./LoginWindow";


interface IProps {
  login: string;
  name: string;
  setLogin: (login: string) => void;
  setIn: (isIn: boolean) => void;
  setName: (name: string) => void;
  handleClose: () => void;
}

const LoginWindowContainer = (props: IProps) => {
  const [password, setPassword] = useState<string>("")
  const [checked, setChecked] = useState<boolean>(false)

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.setName(props.login);
    if(checked){
      sessionStorage.setItem("login", props.login)
    }
    props.setIn(true);
    props.handleClose();
  }

  return(
    <LoginWindow
      login={props.login}
      password={password}
      checked={checked}
      setLogin={props.setLogin}
      setPassword={setPassword}
      handleCheck={handleCheck}
      handleSubmit={handleSubmit}
    />
  )
}

export default LoginWindowContainer;