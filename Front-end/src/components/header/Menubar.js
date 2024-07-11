import React, { useEffect, useState, useContext } from "react";
import { Offcanvas, Accordion, ListGroup } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import "./header.css";
import { ColorModeContext } from "../../mode/ThemeContext";

function Menubar() {
  const colorMode = useContext(ColorModeContext);

  useEffect(() => {
    document.body.className = colorMode.mode;
  }, [colorMode.mode]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Accordion array
  const AccordionArr = [
    { mainLink: "Home", subLink: ["link1", "link2", "link3"], eventKey: "0" },
    {
      mainLink: "Mega Menu",
      subLink: ["link1", "link2", "link3"],
      eventKey: "1",
    },
    {
      mainLink: "Full Screen Menu",
      subLink: ["link1", "link2", "link3"],
      eventKey: "2",
    },
    { mainLink: "Pages", subLink: ["link1", "link2", "link3"], eventKey: "3" },
    {
      mainLink: "User Account",
      subLink: ["link1", "link2", "link3"],
      eventKey: "4",
    },
  ];

  return (
    <div>
      <FaBars size={20} className="me-2 icon" onClick={handleShow} />
      <Offcanvas
        placement="top"
        show={show}
        onHide={handleClose}
        className={colorMode.mode}
        style={{ height: "100%" }}
      >
        <Offcanvas.Body
          className={`d-flex justify-content-center flex-column align-items-center  gap-4 ${colorMode.mode}`}
        >
          <div
            style={{
              width: "550px",
              position: "relative",
              marginTop: "20px",
            }}
          >
            <Offcanvas.Header
              closeButton
              style={{
                position: "absolute",
                top: 0,
                right: 0,
              }}
            ></Offcanvas.Header>
            <div>
              <Accordion
                className="d-flex justify-content-center flex-column gap-1"
                style={{ marginTop: "70px" }}
              >
                {AccordionArr.map((item, key) => (
                  <Accordion.Item
                    eventKey={item.eventKey}
                    key={key}
                    className={`category-dropdown ${colorMode.mode}`}
                  >
                    <Accordion.Header
                      className={`category-dropdown ${colorMode.mode}`}
                    >
                      {item.mainLink}
                    </Accordion.Header>
                    <Accordion.Body
                      className={`category-dropdown ${colorMode.mode}`}
                    >
                      <ListGroup defaultActiveKey="#link1">
                        {item.subLink.map((link) => (
                          <ListGroup.Item
                            action
                            key={link}
                            className={colorMode.mode}
                          >
                            {link}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Menubar;
