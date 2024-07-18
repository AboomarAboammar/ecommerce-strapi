import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaShoppingCart } from "react-icons/fa";
import { ColorModeContext } from "../../../mode/ThemeContext.js";
import { useCart } from "../../Cart/CartContext"; // استيراد سياق السلة
import "./productDetail.css";

export default function ProductDetails({ show, onHide, item }) {
  const colorMode = useContext(ColorModeContext);
  const { dispatch } = useCart();
  const [selectedImg, setSelectedImg] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    document.body.className = colorMode.mode;
  }, [colorMode.mode]);

  if (
    !item ||
    !item.attributes ||
    !item.attributes.productImage ||
    !item.attributes.productImage.data[0]
  ) {
    return null;
  }

  const handleAddToCart = () => {
    const productToAdd = {
      ...item,
      selectedImg: item.attributes.productImage.data[selectedImg].attributes.url,
    };
    dispatch({ type: "ADD_TO_CART", payload: productToAdd });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // إعادة تعيين الحالة بعد 2 ثانية
  };

  return (
    <Modal
      className={colorMode.mode}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={colorMode.mode} closeButton />
      <Modal.Body className="model-container border">
        <img
          width={300}
          src={item.attributes.productImage.data[selectedImg].attributes.url}
          alt={item.attributes.productTitle}
        />
        <div className="model-desc">
          <div className="title-pric">
            <h4>{item.attributes.productTitle}</h4>
            <span>${item.attributes.productPrice}</span>
          </div>
          <div className="footer-model">
            <p>{item.attributes.productDescription}</p>
            <div className="footer-model-img">
              {item.attributes.productImage.data.map((imgPro, index) => {
                return (
                  <img
                    key={index}
                    width={90}
                    src={imgPro.attributes.url}
                    onClick={() => setSelectedImg(index)}
                    alt=""
                  />
                );
              })}
            </div>
            <Button onClick={handleAddToCart}>
              <FaShoppingCart size={17} style={{ marginRight: "10px" }} />
              {added ? "Added" : "Add to Cart"}
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
