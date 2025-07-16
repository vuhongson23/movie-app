import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
} from "~/assets/icon";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("footer-left")}>
        <div className={cx("footer-left-content")}>
          <div className={cx("term-list")}>
            <div className={cx("term-item")}>Privacy Policy</div>
            <div className={cx("term-item")}>Terms & Conditions</div>
            <div className={cx("term-item")}>Privacy Policy</div>
          </div>
          <div className={cx("nav-list")}>
            <div className={cx("nav-item")}>
              <p className={cx("nav-item--title")}>Privacy Policy</p>
              <span>Phim bộ</span>
              <span>Series</span>
              <span>Hoạt hình</span>
              <span>Phiêu lưu</span>
              <span>Loại</span>
              <span>Khoa học</span>
            </div>
            <div className={cx("nav-item")}>
              <p className={cx("nav-item--title")}>Privacy Policy</p>
              <span>Phim bộ</span>
              <span>Series</span>
              <span>Hoạt hình</span>
              <span>Phiêu lưu</span>
              <span>Loại</span>
              <span>Khoa học</span>
            </div>
            <div className={cx("nav-item")}>
              <p className={cx("nav-item--title")}>Privacy Policy</p>
              <span>Phim bộ</span>
              <span>Series</span>
              <span>Hoạt hình</span>
              <span>Phiêu lưu</span>
              <span>Loại</span>
              <span>Khoa học</span>
            </div>
          </div>
        </div>
        <div className={cx("overlay-tr")}></div>
      </div>
      <div className={cx("footer-right")}>
        <div className={cx("overlay-bl")}></div>
        <div className={cx("footer-right-content")}>
          <div className={cx("desc")}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            consectetur repellendus provident quasi minus facere reprehenderit
            nam, non aut itaque sapiente, sunt maiores dolores deleniti deserunt
            excepturi labore fuga minima.
          </div>
          <div className={cx("contact")}>
            <div className={cx("phone")}>Liên hệ: 0862261402</div>
            <div className={cx("social")}>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <TelegramIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
