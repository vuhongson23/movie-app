import classNames from "classnames/bind";
import styles from "./Search.module.scss";

import { GlassIcon } from "~/assets/icon";
import Button from "../button";

interface SearchProps {
  isShowButton?: boolean;
  variant?: "search-bar";
  classNameInput?: string;
  classNameIcon?: string;
}

const cx = classNames.bind(styles);

const Search = ({
  isShowButton,
  variant,
  classNameInput,
  classNameIcon,
}: SearchProps) => {
  return (
    <div className={cx("search", `search--${variant}`)}>
      {isShowButton && (
        <Button type="primary" size="small" className={cx("search-btn")}>
          Tìm kiếm
        </Button>
      )}
      <input
        type="text"
        className={cx("search-input", {
          [classNameInput || ""]: classNameInput,
        })}
        placeholder="Nhập tên phim..."
      />
      <button
        className={cx("search-icon", {
          [classNameIcon || ""]: classNameIcon,
        })}
      >
        <GlassIcon />
      </button>
    </div>
  );
};

export default Search;
