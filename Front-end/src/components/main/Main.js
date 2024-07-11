import React, { useState, useEffect } from "react";
import {
  Container,
  ToggleButton,
  ButtonGroup,
  Card,
  Button,
} from "react-bootstrap";
import MyVerticallyCenteredModal from "./Modal/Modal";
import { FaShoppingCart } from "react-icons/fa";
import "./main.css";
import StarRating from "./Rating";
import { useGetproductByNameQuery } from "../../redux/product";

const Main = () => {
  const [radioValue, setRadioValue] = useState("1");
  const [modalShow, setModalShow] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const { data, error, isLoading } = useGetproductByNameQuery("products?populate=*");

  useEffect(() => {
    if (data) {
      if (radioValue === "1") {
        setFilteredData(data.data);
      } else if (radioValue === "2") {
        setFilteredData(data.data.filter(item => item.attributes.category === "men"));
      } else if (radioValue === "3") {
        setFilteredData(data.data.filter(item => item.attributes.category === "women"));
      }
    }
  }, [radioValue, data]);

  const radios = [
    { name: "All Products", value: "1" },
    { name: "Men Category", value: "2" },
    { name: "Women Category", value: "3" },
  ];

  console.log('Data:', data?.data);
  console.log('Base URL:', process.env.REACT_APP_BASE_URL);

  return (
    <Container style={{ marginTop: "20px" }}>
      <div className="main-top">
        <div className="main-top-left">
          <h4>Selected products</h4>
          <p>All our new arrivals in an exclusive brand section</p>
        </div>
        <div className="main-top-right">
          <ButtonGroup style={{ gap: "1.5" }}>
            {radios.map((radio, idx) => (
              <ToggleButton
                style={{ marginRight: "15px", padding: "10px" }}
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? "outline-success" : "outline-danger"}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
      </div>
      <div className="main-card">
        {isLoading
          ? "Loading..."
          : error
          ? "Error loading data"
          : filteredData.map((item, key) => (
              <Card
                key={key}
                style={{ width: "19rem", marginBottom: "1rem" }}
              >
                <div className="card-img">
                  <Card.Img
                    variant="center"
                    src={`${item.attributes.productImage.data[0].attributes.url}`}
                    alt="product"
                  />
                </div>
                <div className="card-details">
                  <h3>{item.attributes.productTitle}</h3>
                  <span style={{ color: "red" }}>
                    ${item.attributes.productPrice}
                  </span>
                </div>
                <div className="card-description">
                  {item.attributes.productDescription}
                </div>
                <div className="card-details">
                  <Button onClick={() => setModalShow(true)}>
                    <FaShoppingCart size={17} style={{ marginRight: "10px" }} />
                    Buy Now
                  </Button>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                  <StarRating value={item.attributes.productRating} />
                </div>
              </Card>
            ))}
      </div>
    </Container>
  );
};

export default Main;
