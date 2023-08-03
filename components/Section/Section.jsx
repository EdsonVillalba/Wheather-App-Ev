import Hightlights from "../Hightlights/Hightlights";
import Week from "../Weeks/Week";
import classes from "./Section.module.css";
import ForecastStore from "../Forecast/Forecast";
import { useContext } from "react";

const Section = () => {
  const { degree, setDegree } = useContext(ForecastStore);
  return (
    <div className={classes.container}>
      <div className={classes.conversion}>
        <button
          className={`${degree === "℃" ? classes.active : ""}`}
          onClick={() => setDegree("℃")}
        >
          ℃
        </button>
        <button
          className={`${degree === "℉" ? classes.active : ""}`}
          onClick={() => setDegree("℉")}
        >
          ℉
        </button>
      </div>
      <Week />
      <Hightlights />
    </div>
  );
};

export default Section;
