import "./header.css";
import ModeEffect from "../../mode/ModeEffect";

import { Col, Container, Row } from "react-bootstrap";
const HeaderTop = () => {
  return (
    <div
      style={{
        background: "#0d1038de",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
      }}
    >
      <Container>
        <Row className="header-one align-items-center">
          <Col xs="auto">
            <div className="d-flex gap-4 align-items-center">
              <span className="hot">Hot</span>
              <span
                style={{ fontSize: "12px", fontWeight: "600", color: "#fff" }}
              >
                free express shipping
              </span>
            </div>
          </Col>

          <Col xs="auto ">
            <ModeEffect />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderTop;
