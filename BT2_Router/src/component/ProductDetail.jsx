import React from "react";
import { useParams } from "react-router";

const products = [
  {
    id: 1,
    name: "Iphone 16ProMax",
    price: "$999",
    description: "Apple flagship phone.",
  },
  {
    id: 2,
    name: "Iphone 16Pro",
    price: "$900",
    description: "Apple flagship phone.",
  },
  {
    id: 3,
    name: "Iphone 16Plus",
    price: "$800",
    description: "Apple flagship phone.",
  },
  {
    id: 4,
    name: "Iphone 16",
    price: "$700",
    description: "Apple flagship phone.",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Không tìm thấy sản phẩm!</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Giá: {product.price}</p>
      <p>Mô tả: {product.description}</p>
    </div>
  );
};

export default ProductDetail;
