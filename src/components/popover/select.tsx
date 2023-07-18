import { FC, MouseEvent, memo, useEffect, useMemo, useState } from "react";
import Popover, { PopoverProps } from ".";
import { Option } from "../../types/common";
import * as S from "./styles";

interface Props extends Omit<PopoverProps, "title" | "children"> {
  value?: number | string;
  onChange?: (value: number | string) => void;
  options?: Option[];
  placeholder?: string;
}

const Select: FC<Props> = ({
  value,
  onChange,
  options = [],
  placeholder = "Select option",
  ...props
}) => {
  const [checked, setChecked] = useState<number | string>("");

  const option = useMemo(() => {
    return options?.find((opt) => opt.value === checked) || null;
  }, [options, checked]);

  const preventClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleChange = (value: number | string) => {
    if (value === checked) {
      setChecked("");
    } else setChecked(value);
  };

  useEffect(() => {
    if (onChange) onChange(checked);
  }, [checked, onChange]);

  return (
    <Popover title={option?.label || placeholder} {...props}>
      {(styles) => (
        <S.Options style={styles} onClick={preventClick}>
          {options.map(({ value, label }) => (
            <S.Option
              key={value}
              selected={value === option?.value}
              onClick={() => handleChange(value)}
            >
              {label}
            </S.Option>
          ))}
        </S.Options>
      )}
    </Popover>
  );
};

export default memo(Select);
