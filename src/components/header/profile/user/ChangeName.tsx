import React from 'react';
import {TextField} from "@material-ui/core";


interface IProps {
  login: string;
  setLogin: (login: string) => void;
  blurHandler: () => void;
}

const ChangeName = (props: IProps) => {
  return(
    <TextField
      name="name"
      value={props.login}
      autoFocus={true}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setLogin(e.target.value)}
      onBlur={() => props.blurHandler()}
    />
  )
}

export default ChangeName;