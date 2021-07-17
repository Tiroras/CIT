import React from 'react';
import {IChannel, ISchedule} from "../../../interfaces/Interfaces";
import classes from "./Channels.module.scss";


const Channel = (props: IChannel) => {
  return(
    <div className={classes.channel}>
      <div className={classes.logo}>
        <img src={props.logo} />
      </div>
      <div className={classes.info}>
        <div className={classes.name}>
          {props.name}
        </div>
        <div>
          {props.schedule.map((show: ISchedule) => (
            <div key={show.time} className={Number(show.time[1]) === 3 ? classes.scheduleNow : classes.schedule}>
              <span className={classes.time}>{show.time}</span>
              <span className={classes.show}>{show.TVshow}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Channel;