import { useAtom } from "jotai";
import { useEffect } from "react";
import { darkModeAtom } from "../lib/atoms";

const useDarkMode = () => {
  const [enabled, setEnabled] = useAtom(darkModeAtom);

  useEffect(() => {
    const className = "dark";
    const bodyClass = document.body.classList;
    enabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled]);

  return [enabled, setEnabled];
};

export default useDarkMode;
