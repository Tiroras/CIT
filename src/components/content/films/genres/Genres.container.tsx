import React from 'react';
import Genres from "./Genres";
import {IGenre} from "../../../../interfaces/Interfaces";
import comedy from "../../../../assets/img/emojis/beaming-face-with-smiling-eyes.png";
import fantasy from "../../../../assets/img/emojis/alien.png";
import drama from "../../../../assets/img/emojis/loudly-crying-face.png";
import horrors from "../../../../assets/img/emojis/ghost.png";


const GenresContainer = () => {
  const genres: IGenre[] = [
    {header: "Комедии", img: comedy, genre: "comedy"},
    {header: "Драмы", img: drama, genre: "drama"},
    {header: "Фантастика", img: fantasy, genre: "fantasy"},
    {header: "Ужасы", img: horrors, genre: "horrors"}
  ]

  return(
    <Genres
      genres={genres}
    />
  )
}

export default GenresContainer;