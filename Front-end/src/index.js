import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { store } from "./redux/store.js";
import { CartProvider } from "../src/components/Cart/CartContext.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <Provider store={store}>
     <CartProvider>
    <App />
    </CartProvider>
   
   
    </Provider>
  </React.StrictMode>
);
