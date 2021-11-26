import React, { useEffect, useState, useContext } from "react";
import "../styles/Filter.css";
import { CategoryContext } from "../store/category-context";
import { ProductContext } from "../store/product-context";

function Filter(props) {
  let inputType;
  const [categories, setCategories] = useState([]);

  const CategoryCtx = useContext(CategoryContext);
  const ProductCtx = useContext(ProductContext);
  console.log(CategoryCtx);
  console.log(ProductCtx);

  const productSearchHandler = (event) => {
    console.log(event.target.value);
    ProductCtx.setProductResult(event.target.value);
  };

  const categorySearchHandler = (event) => {
    console.log(event.target.value);
    CategoryCtx.setCategoryResult(event.target.value);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
        res.json().then((data) => {
          console.log("hey");
          console.log(data);
          setCategories(data);
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  if (props.search === "category") {
    inputType = (
      <select className="filter__select" onChange={categorySearchHandler}>
        <option value="">Select Category</option>
        {categories.map((element) => (
          <option key={element}>{element}</option>
        ))}
      </select>
    );
  } else if (props.search === "product") {
    inputType = (
      <input
        onChange={productSearchHandler}
        className="filter__input"
        type="text"
        placeholder="Search Products..."
      />
    );
  }
  return <div className="filter">{inputType}</div>;
}

export default Filter;
