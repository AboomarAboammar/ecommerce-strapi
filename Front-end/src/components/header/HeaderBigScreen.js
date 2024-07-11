import React, { useContext } from "react";
import "../../../src/mode/mode.css";
import { Dropdown, ListGroup } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { ColorModeContext } from "../../mode/ThemeContext";

const HeaderBigScreen = ({ title }) => {
  const colorMode = useContext(ColorModeContext);

  return (
    <div className="dropdown-container">
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-autoclose-true"
          className={`header-menu-bigscreen ${colorMode.mode}`}
        >
          {title}
        </Dropdown.Toggle>
        <Dropdown.Menu className={colorMode.mode}>
          <Dropdown.Item href="#" className={colorMode.mode}>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item href="#" className={`dropdown-item ${colorMode.mode}`}>
            Products <FaArrowRight style={{ marginLeft: "20px" }} />
            <ListGroup
              className={`product-menu header-menu-bigscreen ${colorMode.mode}`}
              defaultActiveKey="#link1"
            >
              <ListGroup.Item action href="#link1" className={colorMode.mode}>
                Add Product
              </ListGroup.Item>
              <ListGroup.Item action href="#link2" className={colorMode.mode}>
                Edit Product
              </ListGroup.Item>
            </ListGroup>
          </Dropdown.Item>
          <Dropdown.Item href="#" className={colorMode.mode}>
            Orders
          </Dropdown.Item>
          <Dropdown.Item href="#" className={colorMode.mode}>
            Profile
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default HeaderBigScreen;
