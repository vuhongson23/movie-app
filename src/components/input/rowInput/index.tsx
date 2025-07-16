import classNames from "classnames/bind";
import styles from "./RowInput.module.scss";

interface RowInputProps {
  children?: React.ReactNode;
}

const cx = classNames.bind(styles);

const RowInput = ({ children }: RowInputProps) => {
  return <div className={cx("group-input-row")}>{children}</div>;
};

export default RowInput;
