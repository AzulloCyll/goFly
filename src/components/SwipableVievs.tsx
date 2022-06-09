import { actionCreators, State } from "../state";
import { useDispatch, useSelector } from "react-redux";

import SwipeableViews from "react-swipeable-views";
import "swiper/css";
import { bindActionCreators } from "@reduxjs/toolkit";

export default function SwipableVievs() {
  const dispatch = useDispatch();
  const { setCurrentActiveView } = bindActionCreators(actionCreators, dispatch);
  const fromRedux = useSelector((state: State) => state);

  const { activeValue } = fromRedux.tabControls;

  const handleChangeIndex = (value: number) => {
    setCurrentActiveView(value);
  };

  const styles = {
    slide: {
      padding: 15,
      minHeight: "100vh",
      color: "#fff",
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

  const { weather } = fromRedux;
  const { data } = weather;

  return (
    <SwipeableViews
      index={activeValue}
      onChangeIndex={(value: number) => handleChangeIndex(value)}
    >
      <div style={{ ...styles.slide, ...styles.slide1 }}>
        <img src={data?.current.condition.icon} alt="" />
      </div>
      <div style={{ ...styles.slide, ...styles.slide2 }}>
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
      <div style={{ ...styles.slide, ...styles.slide3 }}>
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
