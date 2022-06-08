import { Swiper, SwiperSlide } from "swiper/react";
import { State } from "../state";
import { useSelector } from "react-redux";
import "swiper/css";

//MUI
import Container from "@mui/material/Container";

export default function SwipableVievs() {
  const fromRedux = useSelector((state: State) => state);

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={(e) => console.log("slide change", e.activeIndex, e)}
      onSwiper={(swiper: any) => console.log(swiper)}
      style={{
        marginTop: "48px",
        marginBottom: "56px",
        zIndex: 0,
        overflow: "hidden",
        paddingBottom: "16px",
      }}
    >
      <SwiperSlide style={{ paddingTop: "16px", zIndex: 0 }}>
        <Container maxWidth="xs">
          <img src={fromRedux.weather.data?.current.condition.icon} alt="" />
          <p>
            {fromRedux.weather.data?.location.name},
            {fromRedux.weather.data?.location.country}
          </p>
          <p>Lat: {fromRedux.coordinates.lat}</p>
          <p>Lon: {fromRedux.coordinates.lon}</p>
          <p>{fromRedux.weather.data?.current.condition.text}</p>
          <p>
            Wind: {fromRedux.weather.data?.current.wind_kph} km/h, Gust:{" "}
            {fromRedux.weather.data?.current.gust_kph} km/h
          </p>
          <p>
            {fromRedux.weather.data?.forecast?.forecastday[2].day.maxtemp_c}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            fugit animi, aperiam unde nemo corrupti quidem at enim voluptatum
            nisi deserunt ipsa incidunt, voluptate tempora harum cumque iusto
            repudiandae architecto! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet quasi similique modi deserunt libero dicta
            tenetur corporis, quae quam iusto iste exercitationem illo in, rem
            reprehenderit, necessitatibus soluta. Quibusdam, explicabo at ullam
            fugiat possimus molestias!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            fugit animi, aperiam unde nemo corrupti quidem at enim voluptatum
            nisi deserunt ipsa incidunt, voluptate tempora harum cumque iusto
            repudiandae architecto! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet quasi similique modi deserunt libero dicta
            tenetur corporis, quae quam iusto iste exercitationem illo in, rem
            reprehenderit, necessitatibus soluta. Quibusdam, explicabo at ullam
            fugiat possimus molestias!
          </p>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container maxWidth="xs" sx={{ backgroundColor: "blue" }}>
          <img src={fromRedux.weather.data?.current.condition.icon} alt="" />
          <p>
            {fromRedux.weather.data?.location.name},
            {fromRedux.weather.data?.location.country}
          </p>
          <p>Lat: {fromRedux.coordinates.lat}</p>
          <p>Lon: {fromRedux.coordinates.lon}</p>
          <p>{fromRedux.weather.data?.current.condition.text}</p>
          <p>
            Wind: {fromRedux.weather.data?.current.wind_kph} km/h, Gust:{" "}
            {fromRedux.weather.data?.current.gust_kph} km/h
          </p>
          <p>
            {fromRedux.weather.data?.forecast?.forecastday[2].day.maxtemp_c}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            fugit animi, aperiam unde nemo corrupti quidem at enim voluptatum
            nisi deserunt ipsa incidunt, voluptate tempora harum cumque iusto
            repudiandae architecto! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet quasi similique modi deserunt libero dicta
            tenetur corporis, quae quam iusto iste exercitationem illo in, rem
            reprehenderit, necessitatibus soluta. Quibusdam, explicabo at ullam
            fugiat possimus molestias!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            fugit animi, aperiam unde nemo corrupti quidem at enim voluptatum
            nisi deserunt ipsa incidunt, voluptate tempora harum cumque iusto
            repudiandae architecto! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet quasi similique modi deserunt libero dicta
            tenetur corporis, quae quam iusto iste exercitationem illo in, rem
            reprehenderit, necessitatibus soluta. Quibusdam, explicabo at ullam
            fugiat possimus molestias!
          </p>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container maxWidth="xs" sx={{ backgroundColor: "red" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            fugit animi, aperiam unde nemo corrupti quidem at enim voluptatum
            nisi deserunt ipsa incidunt, voluptate tempora harum cumque iusto
            repudiandae architecto! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet quasi similique modi deserunt libero dicta
            tenetur corporis, quae quam iusto iste exercitationem illo in, rem
            reprehenderit, necessitatibus soluta. Quibusdam, explicabo at ullam
            fugiat possimus molestias!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            fugit animi, aperiam unde nemo corrupti quidem at enim voluptatum
            nisi deserunt ipsa incidunt, voluptate tempora harum cumque iusto
            repudiandae architecto! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet quasi similique modi deserunt libero dicta
            tenetur corporis, quae quam iusto iste exercitationem illo in, rem
            reprehenderit, necessitatibus soluta. Quibusdam, explicabo at ullam
            fugiat possimus molestias!
          </p>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container maxWidth="xs" sx={{ backgroundColor: "green" }}>
          <img src={fromRedux.weather.data?.current.condition.icon} alt="" />
          <p>
            {fromRedux.weather.data?.location.name},
            {fromRedux.weather.data?.location.country}
          </p>
          <p>Lat: {fromRedux.coordinates.lat}</p>
          <p>Lon: {fromRedux.coordinates.lon}</p>
          <p>{fromRedux.weather.data?.current.condition.text}</p>
          <p>
            Wind: {fromRedux.weather.data?.current.wind_kph} km/h, Gust:{" "}
            {fromRedux.weather.data?.current.gust_kph} km/h
          </p>
          <p>
            {fromRedux.weather.data?.forecast?.forecastday[2].day.maxtemp_c}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            fugit animi, aperiam unde nemo corrupti quidem at enim voluptatum
            nisi deserunt ipsa incidunt, voluptate tempora harum cumque iusto
            repudiandae architecto! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet quasi similique modi deserunt libero dicta
            tenetur corporis, quae quam iusto iste exercitationem illo in, rem
            reprehenderit, necessitatibus soluta. Quibusdam, explicabo at ullam
            fugiat possimus molestias!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            fugit animi, aperiam unde nemo corrupti quidem at enim voluptatum
            nisi deserunt ipsa incidunt, voluptate tempora harum cumque iusto
            repudiandae architecto! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet quasi similique modi deserunt libero dicta
            tenetur corporis, quae quam iusto iste exercitationem illo in, rem
            reprehenderit, necessitatibus soluta. Quibusdam, explicabo at ullam
            fugiat possimus molestias!
          </p>
        </Container>
      </SwiperSlide>
    </Swiper>
  );
}
