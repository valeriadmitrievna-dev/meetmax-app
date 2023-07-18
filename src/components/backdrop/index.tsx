import { FC, MouseEvent, ReactNode } from "react";
import * as S from "./styles";

interface Props {
  visible?: boolean;
  children?: ReactNode;
  onClose?: () => void;
  className?: string;
}

const Backdrop: FC<Props> = ({
  visible = true,
  children,
  onClose,
  className,
}) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();

    if (onClose) onClose();
  };

  return (
    <S.Wrapper
      className={className}
      onClick={handleClick}
      visible={visible.toString()}
    >
      {children}
    </S.Wrapper>
  );
};

export default Backdrop;
