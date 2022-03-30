import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleRight,
  faMoneyCheckAlt,
  faShoppingBasket,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

library.add(faShoppingBasket, faShoppingCart, faMoneyCheckAlt, faAngleRight);
const Shop = () => {
  return (
    <div className="st-dropdown-section">
      <div className="st-dropdown-content">
        <div className="st-dropdown-content-group">
          <Link className="dropdown-item mb-4" to="/shop/index">
            <div className="d-flex align-items-center">
              <div className="bg-success text-contrast icon-md center-flex rounded-circle me-2">
                <FontAwesomeIcon icon="fas fa-shopping-basket" />
              </div>
              <div className="flex-fill">
                <h3 className="link-title m-0">Home</h3>
                <p className="m-0 text-secondary">
                  Online store home with an outstanding UX
                </p>
              </div>
            </div>
          </Link>
          <Link className="dropdown-item" to="/shop/cart">
            <div className="d-flex align-items-center">
              <div className="bg-info text-contrast icon-md center-flex rounded-circle me-2">
                <FontAwesomeIcon icon="fas fa-shopping-cart" />
              </div>
              <div className="flex-fill">
                <h3 className="link-title m-0">Cart</h3>
                <p className="m-0 text-secondary">Online store shopping cart</p>
              </div>
            </div>
          </Link>
        </div>
        <div
          className="st-dropdown-content-group"
          style={{ background: "#f1f4f8" }}
        >
          <h3 className="link-title">
            <FontAwesomeIcon icon="fas fa-money-check-alt" className="icon" />
            Checkout
          </h3>
          <div className="ms-5">
            <Link
              className="dropdown-item text-secondary"
              to="/shop/checkout-customer"
            >
              Customer
              <FontAwesomeIcon icon="fas fa-angle-right" className="ms-2" />
            </Link>
            <Link
              className="dropdown-item text-secondary"
              to="/shop/checkout-shipping"
            >
              Shipping Information
              <FontAwesomeIcon icon="fas fa-angle-right" className="ms-2" />
            </Link>
            <Link
              className="dropdown-item text-secondary"
              to="/shop/checkout-payment"
            >
              Payment Methods
              <FontAwesomeIcon icon="fas fa-angle-right" className="ms-2" />
            </Link>
            <Link
              className="dropdown-item text-secondary"
              to="/shop/checkout-confirmation"
            >
              Order Review
              <FontAwesomeIcon icon="fas fa-angle-right" className="ms-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
