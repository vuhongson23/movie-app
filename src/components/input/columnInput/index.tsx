import classNames from "classnames/bind";
import styles from "./ColumnInput.module.scss";

interface ColumnInputProps {
  children: React.ReactNode;
}

const cx = classNames.bind(styles);

const ColumnInput = ({ children }: ColumnInputProps) => {
  return <div className={cx("group-input-column")}>{children}</div>;
};

export default ColumnInput;
