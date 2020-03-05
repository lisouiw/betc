import { ReactComponent as Fleche } from "../icon/Fleche.svg";
import { ReactComponent as FlecheFleche } from "../icon/FlecheFleche.svg";
import { ReactComponent as Pluie } from "../icon/Pluie.svg";
import { ReactComponent as PluieFleche } from "../icon/PluieFleche.svg";

export const cities = ["PARIS", "LONDON", "BANGKOK"];
export const data = [
  { type: "temp", text: "Température", unit: "°C", icon: FlecheFleche },
  { type: "humidity", text: "Humidité", unit: "%", icon: Pluie },
  {
    type: "speed",
    text: "Direction et vitesse du vent",
    unit: "km/h",
    icon: Fleche
  },
  {
    type: "pressure",
    text: "Pression atmosphérique",
    unit: "hPa",
    icon: PluieFleche
  }
];

export const initWeather = {
  location: {
    temp: 0,
    coord: {
      lon: 0,
      lat: 0
    }
  },
  info: {
    temp: 0,
    speed: 0,
    deg: 0,
    humidity: 0,
    pressure: 0
  },
  weather: "sun"
};

export const day = [
  { show: "Dim", hidden: "anche", full: "Dimanche" },
  { show: "Lun", hidden: "di", full: "Lundi" },
  { show: "Mar", hidden: "di", full: "Mardi" },
  { show: "Mer", hidden: "credi", full: "Mercredi" },
  { show: "Jeu", hidden: "di", full: "Jeudi" },
  { show: "Ven", hidden: "dredi", full: "Vendredi" },
  { show: "Sam", hidden: "edi", full: "Samedi" },
  { show: "Dim", hidden: "anche", full: "Dimanche" }
];

export const month = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre"
];

export const timeZone = {
  Paris: "Europe/Paris",
  London: "Europe/London",
  Bangkok: "Asia/Bangkok"
};
