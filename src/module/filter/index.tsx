import classNames from "classnames/bind";
import styles from "./Filter.module.scss";
import { useState } from "react";

import { DownArrowIcon, UpArrowIcon } from "~/assets/icon";
import RowInput from "~/components/input/rowInput";
import ColumnInput from "~/components/input/columnInput";
import Input from "~/components/input";

const cx = classNames.bind(styles);

const Filter = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setIsShowDropdown(!isShowDropdown);
  };
  return (
    <div className={cx("filter-wrapper", "dropdown")}>
      <span onClick={handleToggleDropdown}>
        {isShowDropdown ? (
          <DownArrowIcon width="40" height="40" />
        ) : (
          <UpArrowIcon width="40" height="40" />
        )}
      </span>
      <p>Bộ lọc tìm kiếm</p>
      {isShowDropdown && (
        <div className={cx("dropdown-content")}>
          <RowInput>
            <ColumnInput>
              <Input
                leftIcon={<DownArrowIcon />}
                label="Năm phát hành"
                placeholder="Chưa nhập"
              />
              <Input
                leftIcon={<DownArrowIcon />}
                label="Năm phát hành"
                placeholder="Chưa nhập"
              />
              <Input
                leftIcon={<DownArrowIcon />}
                label="Năm phát hành"
                placeholder="Chưa nhập"
              />
            </ColumnInput>
            <ColumnInput>
              <Input
                leftIcon={<DownArrowIcon />}
                label="Năm phát hành"
                placeholder="Chưa nhập"
              />
              <Input
                leftIcon={<DownArrowIcon />}
                label="Năm phát hành"
                placeholder="Chưa nhập"
              />
              <Input
                leftIcon={<DownArrowIcon />}
                label="Năm phát hành"
                placeholder="Chưa nhập"
              />
            </ColumnInput>
            <ColumnInput>
              <Input
                leftIcon={<DownArrowIcon />}
                label="Năm phát hành"
                placeholder="Chưa nhập"
              />
              <Input
                leftIcon={<DownArrowIcon />}
                label="Năm phát hành"
                placeholder="Chưa nhập"
              />
              <Input
                leftIcon={<DownArrowIcon />}
                label="Năm phát hành"
                placeholder="Chưa nhập"
              />
            </ColumnInput>
          </RowInput>
        </div>
      )}
    </div>
  );
};

export default Filter;
