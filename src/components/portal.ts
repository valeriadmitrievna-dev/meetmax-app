import React, { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const createWrapperAndAppendToBody = (id: string, className: string) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", id);
  wrapperElement.classList.add(className);
  document.body.appendChild(wrapperElement);

  return wrapperElement;
};

const Portal = ({
  children,
  id = "react-portal-wrapper",
  className = "portal",
}: PortalProps) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    let element = document.getElementById(id);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(id, className);
    }
    setWrapperElement(element);

    return () => {
      if (element && systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [id, className]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

export default Portal;
