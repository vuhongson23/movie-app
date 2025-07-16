import classNames from "classnames/bind";

import styles from "./Secondary.module.scss";

interface SecondaryProps {
  children: React.ReactNode;
}

const cx = classNames.bind(styles);

const SecondaryLayout = ({ children }: SecondaryProps) => {
  return <div className={cx("wrapper")}>{children}</div>;
};

export default SecondaryLayout;
