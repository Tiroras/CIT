export interface IFilm {
  header: string;
  description: string;
  img: any;
}

export interface IGenre {
  header: string;
  img: any;
  genre: string
}

export interface ISchedule {
  time: string;
  TVshow: string;
}

export interface IChannel{
  logo: string;
  name: string;
  schedule: ISchedule[]
}