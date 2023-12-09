import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./styles/PasssCommande.css";
import visa from "../assets/visa.jpg";
import paypol from "../assets/paypol.jpg";
import masterCard from "../assets/mastercard .png";
const PassCommande = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    email: "",
    creditCard: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const HandleSubmit=(e)=>{
    e.preventDefault();
    setSubmitSuccess(true);
  }

  return (
    <div className="custom-container">
      <div className="custom-container-header">
        <h2>Order Information</h2>
        <Row md={2} xs={1} lg={3} className="row mt-7">
            <Col className="visa "><img src={visa} alt="card visa" /></Col>
            <Col className="paypol "><img src={paypol} alt="card paypol" /></Col>
            <Col className="mastercard  "><img src={masterCard} alt="master card" /></Col>
        </Row>

      </div>
      <div className="custom-container-body">
        <div className="custom-inputs">
        {submitSuccess ? (
            <h3 className="success-message">Votre commande a été soumise avec succès</h3>
          ) : (
          <form onSubmit={HandleSubmit}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
            <label>Credit Card</label>
            <input
              type="text"
              name="creditCard"
              value={formData.creditCard}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn">Submit Order</button>
          </form>
        )}
        </div>
      </div>
    </div>
  );
};

export default PassCommande;
