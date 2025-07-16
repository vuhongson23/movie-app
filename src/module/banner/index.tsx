import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import { ImDbIcon } from "~/assets/icon";
import Button from "~/components/button";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface BannerProps {
  variant?: "" | "secondary";
}

const cx = classNames.bind(styles);

const Banner = ({ variant }: BannerProps) => {
  return (
    <Swiper
      cssMode={true}
      centeredSlides={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      allowTouchMove={true}
      mousewheel={{
        invert: false,
        forceToAxis: false,
        thresholdDelta: 50,
        sensitivity: 1,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className={cx(`mySwiper--${variant}`)}
    >
      <SwiperSlide>
        <div className={cx("wrapper", `wrapper--${variant}`)}>
          <div className={cx("overlay")}></div>
          <img
            src="https://images.alphacoders.com/100/1002901.jpg"
            alt="banner"
            className={cx("banner-img")}
          />
          <div className={cx("card-info", `card-info--${variant}`)}>
            <h2>Avenger: End Game</h2>
            <span className={cx("card-info-tag")}>Khoa học-viễn tưởng</span>
            <h3 className={cx("card-info-sum")}>Tóm tắt</h3>
            <p className={cx("card-info-desc")}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              harum, natus id quas laborum voluptatibus, nisi voluptates vitae
              quidem obcaecati deserunt ex, quis atque reiciendis ut quos
              laboriosam sit voluptate. Quia, harum modi, ea at itaque sit
              voluptatibus, debitis alias maiores ipsa fugiat aspernatur
              reiciendis. Sapiente, exercitationem laborum dolor, pariatur dicta
              magni, nisi explicabo esse debitis quibusdam excepturi facilis
              possimus.
            </p>
            <div className={cx("card-info-rate")}>
              <ImDbIcon /> <span>8.3</span>/10
            </div>
            <Button type="primary" size="large" fullWidth>
              Xem và tải xuống
            </Button>
          </div>
          <div className={cx("pagination")}></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={cx("wrapper", `wrapper--${variant}`)}>
          <div className={cx("overlay")}></div>
          <img
            src="https://images.alphacoders.com/100/1002901.jpg"
            alt="banner"
            className={cx("banner-img")}
          />
          <div className={cx("card-info", `card-info--${variant}`)}>
            <h2>Avenger: End Game</h2>
            <span className={cx("card-info-tag")}>Khoa học-viễn tưởng</span>
            <h3 className={cx("card-info-sum")}>Tóm tắt</h3>
            <p className={cx("card-info-desc")}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              harum, natus id quas laborum voluptatibus, nisi voluptates vitae
              quidem obcaecati deserunt ex, quis atque reiciendis ut quos
              laboriosam sit voluptate. Quia, harum modi, ea at itaque sit
              voluptatibus, debitis alias maiores ipsa fugiat aspernatur
              reiciendis. Sapiente, exercitationem laborum dolor, pariatur dicta
              magni, nisi explicabo esse debitis quibusdam excepturi facilis
              possimus.
            </p>
            <div className={cx("card-info-rate")}>
              <ImDbIcon /> <span>8.3</span>/10
            </div>
            <Button type="primary" size="large" fullWidth>
              Xem và tải xuống
            </Button>
          </div>
          <div className={cx("pagination")}></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={cx("wrapper", `wrapper--${variant}`)}>
          <div className={cx("overlay")}></div>
          <img
            src="https://images.alphacoders.com/100/1002901.jpg"
            alt="banner"
            className={cx("banner-img")}
          />
          <div className={cx("card-info", `card-info--${variant}`)}>
            <h2>Avenger: End Game</h2>
            <span className={cx("card-info-tag")}>Khoa học-viễn tưởng</span>
            <h3 className={cx("card-info-sum")}>Tóm tắt</h3>
            <p className={cx("card-info-desc")}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              harum, natus id quas laborum voluptatibus, nisi voluptates vitae
              quidem obcaecati deserunt ex, quis atque reiciendis ut quos
              laboriosam sit voluptate. Quia, harum modi, ea at itaque sit
              voluptatibus, debitis alias maiores ipsa fugiat aspernatur
              reiciendis. Sapiente, exercitationem laborum dolor, pariatur dicta
              magni, nisi explicabo esse debitis quibusdam excepturi facilis
              possimus.
            </p>
            <div className={cx("card-info-rate")}>
              <ImDbIcon /> <span>8.3</span>/10
            </div>
            <Button type="primary" size="large" fullWidth>
              Xem và tải xuống
            </Button>
          </div>
          <div className={cx("pagination")}></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
