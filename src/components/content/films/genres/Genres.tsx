import React from 'react';
import {IGenre} from "../../../../interfaces/Interfaces";
import Genre from "./Genre";
import classes from "./Genres.module.scss";


interface IProps {
  genres: IGenre[];
}

const Genres = (props: IProps) => {
  return(
    <div>
      <div className={classes.header}>
        Жанры
      </div>
      <div className={classes.genres}>
        {props.genres.map((genre: IGenre) => (
          <Genre
            header={genre.header}
            img={genre.img}
            genre={genre.genre}
          />
        ))}
      </div>
    </div>
  )
}

export default Genres;