import React from 'react';
import classes from "./Footer.module.scss";
import image from "../../assets/img/footer/footer.png"


const Footer = () => {
  return(
    <footer className={classes.footer}>
      <div>
        <img src={image} height="120px"/>
      </div>
      <div className={classes.info}>
        <div>
          426057, Россия, Удмуртская республика, г.Ижевск, ул Карла Маркса, 246 (ДК "Металлург")
        </div>
        <div>
          +7(3412)93-88-61, 43-29-29
        </div>
        <div className={classes.link}>
          htc-cs.ru
        </div>
      </div>
    </footer>
  )
}

export default Footer;