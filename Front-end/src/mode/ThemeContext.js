import React, { createContext, useState, useMemo, useEffect } from "react";

// إنشاء سياق مخصص
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "light",
});

export const useMode = () => {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  return colorMode;
};
