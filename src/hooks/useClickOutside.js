import {useEffect} from "react";

function useClickOutside(ref, menuDispatch) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        menuDispatch({type: "closeMenus"});
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
export {useClickOutside};
