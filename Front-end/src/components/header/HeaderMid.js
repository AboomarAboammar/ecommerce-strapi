import { Dropdown } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Navbar from "react-bootstrap/Navbar";

import "./header.css";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useState } from "react";

const HeaderMid = () => {
  const [selectedItem, setSelectedItem] = useState("Category");

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };
  return (
    <Navbar expand="lg">
      <Container>
        <div
          className="d-flex align-items-center justify-content-between py-2"
          style={{ width: "100%" }}
        >
          <div className="header-mid-left">
            <FaShoppingCart className="icon" />
            <Navbar.Brand href="#" className="header-mid-left-brand">
              ecommerce
            </Navbar.Brand>
          </div>

          <div className=" header-mid-center">
            <Form className="d-flex search-form">
              <div className="search-input-container">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="search-input"
                />
                <div className="search-icon">
                  <FaSearch />
                </div>
              </div>
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="category-dropdown"
                >
                  {selectedItem}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Action" href="#/action-1">
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Another action" href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Something else" href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form>
          </div>

          <div
            className="d-flex gap-3 align-items-center"
            style={{ position: "relative" }}
          >
            <div>
              <FaShoppingCart className="icon" />
              <span
                style={{
                  position: "absolute",
                  top: "-15px",
                  right: "30px",
                  background: "red",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  textAlign: "center",
                }}
              >
                5
              </span>
            </div>

            <FaUser className="icon" />
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default HeaderMid;
