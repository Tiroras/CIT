import React from 'react';
import {IFilm} from "../../../../interfaces/Interfaces";
import classes from "./NewItems.module.scss";


const Item = (props: IFilm) => {
  return(
    <div className={classes.item}>
      <div>
        <div className={classes.description}>
          {props.description}
        </div>
        <div>
          <img src={props.img} />
        </div>
      </div>
      <div className={classes.name}>
        {props.header}
      </div>
    </div>
  )
}

export default Item