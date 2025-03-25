import React from "react";
import { Link } from "react-router";
const products = [
  { id: 1, name: "Iphone 16ProMax", price: "$999" },
  { id: 2, name: "Iphone 16Pro", price: "$900" },
  { id: 3, name: "Iphone 16Plus", price: "$800" },
  { id: 4, name: "Iphone 16", price: "$700" },
];

const ProductList = () => {
  return (
    <>
      <h1>Danh sach san pham</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
