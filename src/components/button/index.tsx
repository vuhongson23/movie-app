import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  disabled?: boolean;
  type?: "primary" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  className?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
  [key: string]: any;
} & Record<string, any>;

const Button = ({
  children,
  to,
  disabled,
  type = "primary",
  size = "large",
  className,
  iconLeft,
  iconRight,
  onClick,
  ...rest
}: ButtonProps) => {
  const props: Record<string, any> = {
    onClick,
    ...rest,
  };

  // remove event listener when button disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  const classes = cx("btn", {
    [className || ""]: !!className,
    [type]: type,
    [size]: size,
    disabled,
  });

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {iconLeft && <span className={cx("icon")}>{iconLeft}</span>}
        <span className={cx("title")}>{children}</span>
        {iconRight && <span className={cx("icon")}>{iconRight}</span>}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
