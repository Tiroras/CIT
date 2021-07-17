import React from 'react';
import {IChannel} from "../../../interfaces/Interfaces";
import Channel from "./Channel";
import classes from "./Channels.module.scss";
import Scrollbar from "../../../assets/scrollbar/Scrollbar";


interface IProps {
  channels: IChannel[];
}

const Channels = (props: IProps) => {
  return (
    <div className={classes.channels}>
      <Scrollbar>
        {props.channels.map((channel: IChannel) => (
          <Channel logo={channel.logo} name={channel.name} schedule={channel.schedule}/>
        ))}
      </Scrollbar>
    </div>
  );
}

export default Channels;