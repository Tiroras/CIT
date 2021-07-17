import React from 'react';
import {IFilm} from "../../../../interfaces/Interfaces";
import Item from "./Item";
import classes from "./NewItems.module.scss";


interface IProps {
  films: IFilm[];
}

const NewItems = (props: IProps) => {
  return(
    <div className={classes.newItems}>
      <div className={classes.header}>
        Новинки
      </div>
      <div className={classes.items}>
        {props.films.map((film: IFilm) => (
          <Item
            header={film.header}
            description={film.description}
            img={film.img}
          />
        ))}
      </div>
    </div>
  )
}

export default NewItems;