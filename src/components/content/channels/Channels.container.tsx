import React from 'react';
import Channels from "./Channels";
import {IChannel} from "../../../interfaces/Interfaces";
import x2 from "../../../assets/img/channels/2x2.jpg";
import first from "../../../assets/img/channels/first.png";
import amedia from "../../../assets/img/channels/Amedia.jpg";
import rbk from "../../../assets/img/channels/RBK.png";
import russia24 from "../../../assets/img/channels/russia24.png";



const ChannelsContainer = () => {
  const channels: IChannel[] = [
    {
      logo: first,
      name: "Первый канал",
      schedule:[
        {time: "13:00", TVshow: "Новости (с субтитрами)"},
        {time: "14:00", TVshow: "Давай поженимся"},
        {time: "15:00", TVshow: "Другие новости"}
      ]
    },
    {
      logo: x2,
      name: "2x2",
      schedule:[
        {time: "13:00", TVshow: "МУЛЬТ ТВ. Сезон 4, 7 серия"},
        {time: "14:00", TVshow: "ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия"},
        {time: "15:00", TVshow: "БУРДАШЕВ. Сезон 1, 20 серия"}
      ]
    },
    {
      logo: rbk,
      name: "РБК",
      schedule:[
        {time: "13:00", TVshow: "ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЭС"},
        {time: "14:00", TVshow: "ДЕНЬ. Главные темы"},
        {time: "15:00", TVshow: "Главные новости"}
      ]
    },
    {
      logo: amedia,
      name: "AMEDIA PREMIUM",
      schedule:[
        {time: "13:00", TVshow: "Клиент всегда мертв"},
        {time: "14:00", TVshow: "Давай поженимся"},
        {time: "15:00", TVshow: "Другие новости"}
      ]
    },
    {
      logo: russia24,
      name: "Россия 24",
      schedule:[
        {time: "13:00", TVshow: "Вести"},
        {time: "14:00", TVshow: "Вести"},
        {time: "15:00", TVshow: "Вести"}
      ]
    }
  ]


  return(
    <Channels channels={channels} />
  )
}

export default ChannelsContainer