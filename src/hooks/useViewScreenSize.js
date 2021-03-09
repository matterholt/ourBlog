import {useState, useEffect} from "react";

function useViewScreenSize() {
  const [screenWidth, setScreenWidth] = useState(undefined);
  const mobileBreak = 768;

  // make custom hook
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
    return null;
  }, []);

  return {mobileBreak, screenWidth};
}
export {useViewScreenSize};
