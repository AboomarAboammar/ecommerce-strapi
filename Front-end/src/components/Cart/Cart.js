import React from "react";
import { Modal, Button, ListGroup, Form } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useCart } from "./CartContext";
import "./Cart.css";

const Cart = ({ show, onHide }) => {
  const { cart, total, dispatch } = useCart();

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: parseInt(quantity) } });
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant="flush">
          {cart.map(item => (
            <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
              <div>
                <img src={item.selectedImg} alt={item.attributes.productTitle} width={50} />
                <span>{item.attributes.productTitle}</span>
              </div>
              <div className="d-flex align-items-center">
                <Form.Control
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  style={{ width: "60px", marginRight: "10px" }}
                />
                <span>${item.attributes.productPrice * item.quantity}</span>
                <Button variant="danger" onClick={() => handleRemove(item.id)}>
                  <FaTrash />
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="mt-3 d-flex justify-content-between align-items-center ">
        <Button variant="danger">Total: ${total}</Button>
          <Button variant="success">Checkout</Button>
         
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Cart;
