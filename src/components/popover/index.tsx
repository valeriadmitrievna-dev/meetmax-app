import { CSSProperties, FC, ReactNode, useCallback, useState } from "react";
import * as S from "./styles";
import useDelayUnmount from "../../hooks/useDelayUnmount";
import Portal from "../portal";

export interface PopoverProps {
  title: ReactNode;
  children?: (styles: CSSProperties) => ReactNode;
  autoWidth?: boolean;
  disabled?: boolean;
  space?: number;
  className?: string;
}

const Popover: FC<PopoverProps> = ({
  title,
  children,
  autoWidth,
  disabled,
  space = 4,
  className,
}) => {
  const [opened, setOpened] = useState(false);
  const mounted = useDelayUnmount(opened, 200);
  const [styles, setStyles] = useState<CSSProperties>({});

  const open = () => setOpened(true);
  const close = () => setOpened(false);

  const titleRef = useCallback(
    (node: HTMLButtonElement | null) => {
      if (opened && node) {
        const middleWidth = window.innerWidth / 2;
        const middleHeight = window.innerHeight / 2;
        const bounds = node.getBoundingClientRect();

        const object: CSSProperties = {
          minWidth: bounds.width,
          width: autoWidth ? "fit-content" : bounds.width,
          right: "auto",
          bottom: "auto",
          top: "auto",
          left: "auto",
        };

        if (bounds.top < middleHeight && bounds.left < middleWidth) {
          object.top = bounds.top + bounds.height + space;
          object.left = bounds.left;
        }

        if (bounds.top < middleHeight && bounds.left > middleWidth) {
          object.top = bounds.top + bounds.height + space;
          object.right = window.innerWidth - bounds.right;
        }

        if (bounds.top > middleHeight && bounds.left < middleWidth) {
          object.bottom = -bounds.bottom + bounds.height + space;
          object.left = bounds.left;
        }

        if (bounds.top > middleHeight && bounds.left > middleWidth) {
          object.bottom = -bounds.bottom + bounds.height + space;
          object.right = -bounds.right;
        }

        setStyles(object);
      }
    },
    [opened, space, autoWidth]
  );

  return (
    <>
      <S.Title
        ref={titleRef}
        opened={opened.toString()}
        className={className}
        onClick={open}
        disabled={disabled}
      >
        {title}
        <S.Chevron />
      </S.Title>
      {mounted && (
        <Portal>
          <S.Overlay visible={opened} onClose={close}>
            {children && children(styles)}
          </S.Overlay>
        </Portal>
      )}
    </>
  );
};

export default Popover;
