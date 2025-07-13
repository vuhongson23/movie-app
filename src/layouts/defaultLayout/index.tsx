import classNames from "classnames/bind";

import Footer from "./footer";
import Header from "./header";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className={cx("wrapper")}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
