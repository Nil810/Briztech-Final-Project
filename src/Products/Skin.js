import React from "react";
import "../CSS-Files/Products.css";
import Marquee from "react-fast-marquee";
import { ToastContainer, toast } from "react-toastify";

const Skin = ({ productItems6, handleAddProduct }) => {
  return (
    <>
      <a href="https://wa.me/918102774475" target="">
        <img
          src="/Briztech-Final-Project/images/chatbot.gif"
          alt="chatbot"
          className="chat-gif"
        />
      </a>

      <Marquee direction={"right"} scrollAmount={"12"} className="marquee">
        Order now of to get free delievery and 20% off on any product...
      </Marquee>

      <div className="box">
        {productItems6.map((productItem) => (
          <div className="pic-div">
            <img src={productItem.image} alt="skin pic" />
            <p>{productItem.names}</p>
            <br />

            <h4>
              <i className="fa-solid fa-star" style={{ color: "#b8961c" }}></i>
              &nbsp;{productItem.rating} |{" "}
              <i
                className="fa-solid fa-square-check"
                style={{ color: "#511019" }}
              ></i>
              &nbsp;{productItem.reviews}
            </h4>
            <br />
            <div className="price">
              <h4>
                <u>MRP: ₹{productItem.price}</u>
              </h4>
              &nbsp;
              <h4 className="price-cross">₹{productItem.mrp}</h4>
              <h3>{productItem.discount} off</h3>
            </div>

            <button
              onClick={(e) => {
                toast.success("Item added to cart!");
                handleAddProduct(productItem);
              }}
            >
              <b>ADD TO CART</b>
            </button>
          </div>
        ))}
        ;
      </div>
      <br />

      <div className="prev-arrow">
        <i className="fa-sharp fa-solid fa-angle-left fa-beat-fade arrow"></i>
      </div>
      <div className=" nxt-arrow">
        <i className="fa-sharp fa-solid fa-angle-right fa-beat-fade arrow arrow1"></i>
      </div>
      <ToastContainer />
    </>
  );
};

export default Skin;
