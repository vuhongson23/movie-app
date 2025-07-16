import classNames from "classnames/bind";
import styles from "./MovieCard.module.scss";
import { ClockIcon, ImDbIcon } from "~/assets/icon";

const cx = classNames.bind(styles);

const MovieCard = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("movie-content")}>
        <img
          className={cx("movie-image")}
          src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/z/x/x/medium-poster-design-no-3366-ironman-poster-ironman-posters-for-original-imaggby9s83dgghy.jpeg?q=20&crop=false"
          alt="poster"
        />
        <div className={cx("movie-info")}>
          <span>
            <ImDbIcon width="16" height="16" /> 7.5
          </span>
          <span>
            <ClockIcon /> 1h 55m
          </span>
        </div>
      </div>
      <p>Iron man: Avengers</p>
    </div>
  );
};

export default MovieCard;
