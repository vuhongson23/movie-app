import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
  placeholder?: string;
}

const Input = ({ leftIcon, rightIcon, label, placeholder }: InputProps) => {
  return (
    <div className={cx("wrapper")}>
      <label htmlFor="1">{label}</label>
      <div className={cx("wrapper-input")}>
        {leftIcon}
        <input
          id="1"
          type="text"
          className={cx("input-cus")}
          placeholder={placeholder}
        />
        {rightIcon}
      </div>
    </div>
  );
};

export default Input;
