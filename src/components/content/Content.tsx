import React from 'react';
import Films from "./films/Films";
import Tabs from "./tabs/Tabs";
import ChannelsContainer from "./channels/Channels.container";


interface IProps {
  tab: boolean;
  setTab: (tab: boolean) => void;
}

const Content = (props: IProps) => {
  return(
    <main>
      <Tabs tab={props.tab} setTab={props.setTab} />
      {props.tab ? <Films /> : <ChannelsContainer />}
    </main>
  )
}

export default Content;