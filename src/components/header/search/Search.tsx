import React from 'react';
import classes from "./Search.module.scss";
import {TextField} from "@material-ui/core";


interface IProps {
  value: string;
  setValue: (value: string) => void;
}

const Search = (props: IProps) => {
  return (
    <form className={classes.search}>
      <div>
        <TextField
          color={"secondary"}
          placeholder="Поиск..."
          value={props.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.setValue(e.target.value)}
          name="search"
        />
      </div>
      <div>
        <button className={classes.find}>
          Найти
        </button>
      </div>
    </form>
  )
};

export default Search;