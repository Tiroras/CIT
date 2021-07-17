import React from 'react';
import {IGenre} from "../../../../interfaces/Interfaces";
import classes from "./Genres.module.scss";
import "./Genres.scss"


const Genre = (props: IGenre) => {
  return(
    <div className={`${classes.genre} ${props.genre}`}>
      <div>
        <img src={props.img} />
      </div>
      <div>
        {props.header}
      </div>
    </div>
  )
}

export default Genre;