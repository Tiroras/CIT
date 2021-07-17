import React from 'react';
import NewItemsContainer from "./new-items/NewItems.container";
import GenresContainer from "./genres/Genres.container";
import classes from "./Films.module.scss";


const Films = () => {
  return(
    <div className={classes.films}>
      <NewItemsContainer/>
      <GenresContainer />
    </div>
  )
}

export default Films;