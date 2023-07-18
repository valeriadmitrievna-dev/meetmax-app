import { FC } from "react";
import { Option } from "types/common";
import * as S from "./styles";

interface Props {
  name: string;
  value?: number | string;
  onChange?: (value: number | string) => void;
  options?: Option[];
  className?: string;
}

const ToggleGroup: FC<Props> = ({
  name,
  value,
  onChange,
  options = [],
  className,
}) => {
  return (
    <>
      {options.map(({ value, label, icon }) => (
        <div key={value}>
          <S.Radio id={`${name}-${value}`} type='radio' name={name} />
          <S.Toggle
            htmlFor={`${name}-${value}`}
            className={className}
            centered={!icon}
          >
            {!!icon && <S.Icon>{icon}</S.Icon>}
            <S.Text>{label}</S.Text>
          </S.Toggle>
        </div>
      ))}
    </>
  );
};

export default ToggleGroup;
