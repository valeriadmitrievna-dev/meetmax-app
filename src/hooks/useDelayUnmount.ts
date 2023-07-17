import { useState, useEffect, useRef } from "react";

const useDelayUnmount = (isMounted: boolean, delayTime: number) => {
  const [shouldRender, setShouldRender] = useState<boolean>(isMounted);
  const timeoutIdRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutIdRef.current = setTimeout(() => {
        setShouldRender(false);
      }, delayTime);
    }

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [isMounted, shouldRender, delayTime]);

  return shouldRender;
};

export default useDelayUnmount;
