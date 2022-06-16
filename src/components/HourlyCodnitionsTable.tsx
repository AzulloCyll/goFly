import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//MUI
import Paper from "@mui/material/Paper";

export default function HourlyCodnitionsTable(props: any) {
  const { items } = props;

  return (
    <div style={{ width: "100%" }}>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items?.map((item: any, index: number) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                display: "inline-block",
                color: "red",
                overflow: "hidden",
              }}
            >
              <Paper
                sx={{
                  borderRadius: "0",
                  height: "50px",
                  backgroundColor: "#151B54",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {new Date(item.dt * 1000).toLocaleTimeString().split(":")[0] +
                  ":" +
                  new Date(item.dt * 1000).toLocaleTimeString().split(":")[1]}
              </Paper>
              <Paper
                sx={{
                  borderBottom: "1px solid grey",
                  borderRight: "1px solid grey",

                  borderRadius: "0",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                {Math.floor(item.wind_speed)}
              </Paper>
              <Paper
                sx={{
                  borderBottom: "1px solid grey",
                  borderRight: "1px solid grey",
                  borderRadius: "0",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                {Math.floor(item.wind_gust)}
              </Paper>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

//
