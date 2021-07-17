import React from 'react';
import NewItems from "./NewItems";
import {IFilm} from "../../../../interfaces/Interfaces";
import mult from "../../../../assets/img/films/mult-kino.jpg";
import batman from "../../../../assets/img/films/batman.jpg";
import hollywood from "../../../../assets/img/films/hollywood.jpg";
import LotR from "../../../../assets/img/films/lord-of-the-ring.jpg";


const NewItemsContainer = () => {
  const films: IFilm[] = [
    {
      header: "Мульт в кино. Выпуск №103. Некогда грустить!",
      description: "В новом выпуске ми-ми-мишки изобретут машину сна, а Дракоша Тоша научит завязывать шнурки. Также зрители увидят новые серии мультфильмов «Четверо в кубе», «Лео и Тиг» и совершенно новый мультсериал «Снежная королева: Хранители чудес». «МУЛЬТ в кино. Выпуск 103. Некогда грустить!» — в кинотеатрах с 28 сентября!",
      img: mult
    },
    {
      header: "Новый бэтмен",
      description: "В раннем детстве юный наследник Брюс Уэйн стал свидетелем убийства своих родителей и после этого стал ненавидеть преступность. В Готэме все чаще случались насилия, ограбления и убийства. В трудное для города время появляется герой, способный укротить любого преступника и заставить его бежать в страхе. Таинственный мститель, герой по прозвищу «Бэтмен», встал на защиту слабых и начал свою борьбу с преступниками. Раскрыть таинственность героя, узнать кто скрывается за маской героя хотят журналистка Вики Вейл и репортер Нокс. Тем временем один из преступников уходя от полицейской погони упал в чан с химикатами и превратился в Джокера, который стал угрозой для города. Только Бэтмен может ему помешать…\n",
      img: batman
    },
    {
      header: "Однажды в Голливуде",
      description: "История фильма разворачивается в 1969 году, в Голливуде. Рынок киноиндустрии переполнен актёрами, фильмами. Знающие люди говорят, что Голливуду приходит конец. Известный актёр Рик Далтон со своим дублёром Клиффом Бутом планируют остаться в своей профессии, для этого они должны быстро подстроиться под новые правила игры.",
      img: hollywood
    },
    {
      header: "Властелин колец. Возвращение короля",
      description: "Заключительная часть кинотрилогии, снятой по роману Дж.Р.Р.Толкиена «Властелин колец». Хоббиты Фродо и Сэм, используя Голлума в качестве проводника, продолжают путь к вулкану Ородруину, где им предстоит уничтожить Кольцо Всевластия. Фродо верит поклявшемуся в верности Голлуму. Но тот строит козни и всячески пытается поссорить хоббитов и уничтожить их при первой возможности потому, что Голлум находится под властью Кольца и мечтает его вернуть себе. В то же время, огромная армия Саурона готовится к решительной битве под стенами Гондора. Белый маг Гэндальф убеждает людей, что противостоять силам зла можно только объединившись.",
      img: LotR
    },
  ]

  return(
    <NewItems films={films} />
  )
}

export default NewItemsContainer;