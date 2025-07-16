import classNames from "classnames/bind";
import styles from "./MovieList.module.scss";
import MovieCard from "~/components/movieCard";

interface MovieListProps {
  title?: string;
}

const cx = classNames.bind(styles);

const MovieList = ({ title }: MovieListProps) => {
  return (
    <div className={cx("wrapper")}>
      <h2>{title}</h2>
      <div className={cx("item-list")}>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
      </div>
    </div>
  );
};

export default MovieList;
