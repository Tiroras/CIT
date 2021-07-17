import React from 'react';
import {Button, Checkbox, FormControlLabel, TextField} from "@material-ui/core";
import classes from "./LoginWindow.module.scss";


interface IProps {
  login: string;
  password: string
  checked: boolean;
  setLogin: (login: string) => void;
  setPassword: (password: string) => void;
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginWindow = (props: IProps) => {
  return(
    <div className={classes.login}>
      <div className={classes.header}>
        Вход
      </div>
      <div>
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => props.handleSubmit(e)}>
          <div className={classes.field}>
            <TextField
              placeholder="Логин"
              name="login"
              color="secondary"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setLogin(e.target.value)}
            />
          </div>
          <div className={classes.field}>
            <TextField
              placeholder="Пароль"
              name="password"
              type="password"
              color="secondary"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setPassword(e.target.value)}
            />
          </div>
          <div className={classes.checkbox}>
            <FormControlLabel
              control={
                <Checkbox
                  color={"secondary"}
                  checked={props.checked}
                  name="rememberMe"
                  onChange={(e) => props.handleCheck(e)}
                />
              }
              label="Запомнить"
            />
          </div>
          <div>
            <Button type="submit">
              Войти
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginWindow;