import classNames from "classnames/bind";

import Banner from "~/module/banner";
import styles from "./Home.module.scss";
import Search from "~/components/search";
import SecondaryLayout from "~/layouts/secondaryLayout";
import Filter from "~/module/filter";
import MovieList from "~/module/movieList";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx("wrapper")}>
      <Banner />
      <SecondaryLayout>
        <div className={cx("search-wrapper")}>
          <Search isShowButton variant="search-bar" />
          <p>Tìm kiếm phim mà bạn muốn</p>
        </div>
        <Filter />
        <MovieList title="Đang chiếu" />
        <MovieList title="Đề xuất" />
        <Banner variant="secondary" />
        <MovieList title="Đang chiếu" />
        <MovieList title="Đề xuất" />
        <Banner variant="secondary" />
        <MovieList title="Đang chiếu" />
        <MovieList title="Đề xuất" />
      </SecondaryLayout>
    </div>
  );
};

export default Home;
