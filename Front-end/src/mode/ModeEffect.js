import { React, useContext } from "react";
import { ColorModeContext } from "./ThemeContext";
import Button from "react-bootstrap/Button";
import {
  FaSun,
  FaMoon,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import LangMode from "./LangMode";

const ModeEffect = () => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);

  return (
    <div className="d-flex align-items-center justify-content-center gap-3">
      <div className="d-flex gap-3 ">
        <FaFacebook color="#fff" />
        <FaInstagram color="#fff" />
        <FaTwitter color="#fff" />
      </div>

      <LangMode />

      <Button variant="light" className="icon-button" onClick={toggleColorMode}>
        {mode === "light" ? (
          <FaMoon size={20} color="#fff" />
        ) : (
          <FaSun size={20} color="orange" />
        )}
      </Button>
    </div>
  );
};

export default ModeEffect;
