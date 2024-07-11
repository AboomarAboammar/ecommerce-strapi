import React, { useState, useEffect, useContext } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import {
  FaArrowAltCircleRight,
  FaWindows,
  FaBicycle,
  FaBook,
  FaGamepad,
} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import "./header.css";
import Menubar from "./Menubar.js";
import HeaderBigScreen from "./HeaderBigScreen.js";
import { ColorModeContext } from "../../mode/ThemeContext.js";

const HeaderBottom = () => {
  const [selectedItem, setSelectedItem] = useState("Category");
  const colorMode = useContext(ColorModeContext);

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };

  // screen width
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // mode effect
  useEffect(() => {
    document.body.className = colorMode.mode;
  }, [colorMode.mode]);

  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <FaWindows size={20} />
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="category-dropdown"
                >
                  {selectedItem}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="bikes" href="#bikes">
                    <FaBicycle size={20} style={{ marginRight: "10px" }} />{" "}
                    Bikes
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="Electronics"
                    href="#Electronicsccount"
                  >
                    <FaComputer size={20} style={{ marginRight: "10px" }} />
                    Electronics
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Books" href="#Books">
                    <FaBook size={20} style={{ marginRight: "10px" }} />
                    Books
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Games" href="#Games">
                    <FaGamepad size={20} style={{ marginRight: "10px" }} />
                    Games
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <FaArrowAltCircleRight size={20} className="icon" />
            </div>
            {width <= 1000 ? (
              <Menubar />
            ) : (
              <div
                className={` d-flex align-items-start justify-content-between gap-1 ${colorMode.mode}`}
              >
                <HeaderBigScreen title="Home" />
                <HeaderBigScreen title="Mega Menu" />
                <HeaderBigScreen title="Full Screen Menu" />
                <HeaderBigScreen title="Pages" />
                <HeaderBigScreen title="User Account" />
                <HeaderBigScreen title="Vendor Account" />
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderBottom;
