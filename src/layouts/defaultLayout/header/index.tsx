import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Button from "~/components/button";
import routes from "~/config/routes";
import { DownArrowIcon } from "~/assets/icon";
import Search from "~/components/search";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    to: "/",
    title: "Trang chủ",
  },
  {
    to: "/movies",
    title: "Phim bộ",
  },
  {
    to: "/series",
    title: "Phim lẻ",
  },
  {
    to: "/actor",
    title: "Diễn viên",
  },
];

const Header = () => {
  return (
    <div className={cx("wrapper")}>
      {/*Create button log in, log out */}
      <div className={cx("action")}>
        <Button type="primary" to={routes.signUp}>
          Đăng ký
        </Button>
        <Button type="outlined" to={routes.signIn}>
          Đăng nhập
        </Button>
      </div>
      {/**Create search bar */}
      <Search classNameIcon={cx("icon")} />
      {/**Navigation Bar */}
      <div className={cx("nav")}>
        {MENU_ITEMS.map((item) => (
          <Button
            key={item.title}
            type="text"
            size="medium"
            to={item.to}
            iconLeft={<DownArrowIcon />}
          >
            {item.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Header;
