"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";

const AnimateOnViewContext = createContext();

const useAnimateOnViewContext = () => useContext(AnimateOnViewContext);

function AnimateOnView({
  children,
  activeStyle,
  inactiveStyle,
  activeStyleClass,
  inactiveStyleClass,
}) {
  const ref = useRef(null);
  const [isIntersectingNow, setIsIntersecting] = useState(false);
  const [observer, setObserver] = useState(null);
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("isIntersecting");
          setIsIntersecting(true);
          setHasBeenViewed(true);
        } else {
          console.log("not isIntersecting");
          setIsIntersecting(false);
        }
      });
    });

    if (ref.current) {
      obs.observe(ref.current, {
        root: null,
      });
    }

    setObserver(obs);

    return () => {
      if (obs) {
        obs.disconnect();
      }
    };
  }, []);

  return (
    <AnimateOnViewContext.Provider value={{ isIntersectingNow }}>
      <div
        style={isIntersectingNow || hasBeenViewed ? activeStyle : inactiveStyle}
        ref={ref}
        className={
          isIntersectingNow || hasBeenViewed
            ? activeStyleClass
            : inactiveStyleClass
        }
      >
        {children}
      </div>
    </AnimateOnViewContext.Provider>
  );
}

export { AnimateOnView, useAnimateOnViewContext };
