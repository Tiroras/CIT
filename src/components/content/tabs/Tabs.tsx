import React from 'react';
import classes from "./Tabs.module.scss";


interface IProps {
  tab: boolean;
  setTab: (tab: boolean) => void;
}

const Tabs = (props: IProps) => {
  return(
    <div className={classes.tabs}>
      <span
        className={props.tab ? classes.active : classes.tab}
        onClick={e => props.setTab(true)}
      >
        Фильмы
      </span>
      <span
        className={props.tab ? classes.tab : classes.active}
        onClick={e => props.setTab(false)}
      >
        Телеканалы
      </span>
    </div>
  )
}

export default Tabs;