import { State } from "../state";
import { useSelector } from "react-redux";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import "swiper/css";

//MUI

export default function SwipableVievs() {
  const fromRedux = useSelector((state: State) => state);

  const styles = {
    slide: {
      padding: 15,
      minHeight: "100vh",
      color: "#fff",
      marginTop: "48px",
    },
    slide1: {
      background: "#FEA900",
    },
    slide2: {
      background: "#B3DC4A",
    },
    slide3: {
      background: "#6AC0FF",
    },
  };

  return (
    <SwipeableViews>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
        <img src={fromRedux.weather.data?.current.condition.icon} alt="" />
        <p>
          {fromRedux.weather.data?.location.name},
          {fromRedux.weather.data?.location.country}
        </p>
        <p>Lat: {fromRedux.coordinates.lat}</p>
        <p>Lon: {fromRedux.coordinates.lon}</p>
        <p>{fromRedux.weather.data?.current.condition.text}</p>
        <p>
          Wind: {fromRedux.weather.data?.current.wind_kph} km/h, Gust:
          {fromRedux.weather.data?.current.gust_kph} km/h
        </p>
        <p>{fromRedux.weather.data?.forecast?.forecastday[2].day.maxtemp_c}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          fugit animi, aperiam unde nemo corrupti quidem at enim voluptatum nisi
          deserunt ipsa incidunt, voluptate tempora harum cumque iusto
          repudiandae architecto! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eveniet quasi similique modi deserunt libero dicta
          tenetur corporis, quae quam iusto iste exercitationem illo in, rem
          reprehenderit, necessitatibus soluta. Quibusdam, explicabo at ullam
          fugiat possimus molestias!
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          fugit animi, aperiam unde nemo corrupti quidem at enim voluptatum nisi
          deserunt ipsa incidunt, voluptate tempora harum cumque iusto
          repudiandae architecto! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eveniet quasi similique modi deserunt libero dicta
          tenetur corporis, quae quam iusto iste exercitationem illo in, rem
          reprehenderit, necessitatibus soluta. Quibusdam, explicabo at ullam
          fugiat possimus molestias!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          fugit animi, aperiam unde nemo corrupti quidem at enim voluptatum nisi
          deserunt ipsa incidunt, voluptate tempora harum cumque iusto
          repudiandae architecto! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eveniet quasi similique modi deserunt libero dicta
          tenetur corporis, quae quam iusto iste exercitationem illo in, rem
          reprehenderit, necessitatibus soluta. Quibusdam, explicabo at ullam
          fugiat possimus molestias!
        </p>
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          fugit animi, aperiam unde nemo corrupti quidem at enim voluptatum nisi
          deserunt ipsa incidunt, voluptate tempora harum cumque iusto
          repudiandae architecto! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eveniet quasi similique modi deserunt libero dicta
          tenetur corporis, quae quam iusto iste exercitationem illo in, rem
          reprehenderit, necessitatibus soluta. Quibusdam, explicabo at ullam
          fugiat possimus molestias!
        </p>
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          fugit animi, aperiam unde nemo corrupti quidem at enim voluptatum nisi
          deserunt ipsa incidunt, voluptate tempora harum cumque iusto
          repudiandae architecto! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eveniet quasi similique modi deserunt libero dicta
          tenetur corporis, quae quam iusto iste exercitationem illo in, rem
          reprehenderit, necessitatibus soluta. Quibusdam, explicabo at ullam
          fugiat possimus molestias!
        </p>
      </div>
    </SwipeableViews>
  );
}
