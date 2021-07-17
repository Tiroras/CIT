import React, {useState} from 'react';
import Content from "./Content";


const ContentContainer = () => {
  const [tab, setTab] = useState<boolean>(true);

  return(
    <Content
      tab={tab}
      setTab={setTab}
    />
  )
}

export default ContentContainer;