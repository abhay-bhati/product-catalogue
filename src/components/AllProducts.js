import React, { useState, useEffect, useContext } from "react";
import SingleProduct from "./SingleProduct";
import "../styles/AllProducts.css";
import { CategoryContext } from "../store/category-context";
import { ProductContext } from "../store/product-context";
import { PieContext } from "../store/pie-context";

function AllProducts(props) {
  let newPieChart = [];
  let filteredCategory;
  let filteredProducts;
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const CategoryCtx = useContext(CategoryContext);
  const ProductCtx = useContext(ProductContext);
  const PieCtx = useContext(PieContext);
  console.log(CategoryCtx);
  console.log(ProductCtx);
  console.log(PieCtx);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        res.json().then((data) => {
          console.log("2");
          console.log(data);
          setProducts(data);
          setIsLoading(false);
          newPieChart.push(
            data.filter((element) => element.category === "electronics").length
          );
          newPieChart.push(
            data.filter((element) => element.category === "men's clothing")
              .length
          );
          newPieChart.push(
            data.filter((element) => element.category === "women's clothing")
              .length
          );
          newPieChart.push(
            data.filter((element) => element.category === "jewelery").length
          );
          console.log("ehre");
          console.log(newPieChart);
          props.chart(newPieChart);
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);
  console.log(products);

  if (CategoryCtx.categoryresult === "") {
    filteredCategory = products;
    console.log("asdlfasdfsd");
  } else {
    filteredCategory = products.filter(
      (element) => element.category === CategoryCtx.categoryresult
    );
  }
  filteredProducts = filteredCategory.filter((element) =>
    element.title.toLowerCase().includes(ProductCtx.productresult.toLowerCase())
  );
  console.log(filteredProducts);

  return (
    <>
      {!isLoading && (
        <div className="allproducts">
          {filteredProducts.map((element) => (
            <SingleProduct id={element.id} key={element.id} data={element} />
          ))}
        </div>
      )}
      {!isLoading && filteredProducts.length === 0 && (
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>
          No Products Found
        </h2>
      )}
      {isLoading && <p style={{ textAlign: "center" }}>Loading...</p>}
    </>
  );
}

export default AllProducts;
