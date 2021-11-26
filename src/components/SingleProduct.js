import React from "react";
import "../styles/SingleProduct.css";

function SingleProduct(props) {
  const desc1 = props.data.description.slice(0, 130);
  const desc2 = props.data.description.slice(0, 90);
  const desc3 = props.data.description.slice(0, 40);
  return (
    <div className="singleproduct">
      <div className="singleproduct__image">
        <img src={props.data.image} alt={props.data.category} />
        <div className="singleproduct__category">{props.data.category}</div>
      </div>
      <hr className="singleproduct__line" />
      <div className="singleproduct__info">
        <h3>{props.data.title}</h3>
        <p className="singleproduct__info__desc1">{desc1}...</p>
        <p className="singleproduct__info__desc2">{desc2}...</p>
        <p className="singleproduct__info__desc3">{desc3}...</p>
      </div>
    </div>
  );
}

export default SingleProduct;
