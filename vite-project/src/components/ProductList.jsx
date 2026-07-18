import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ProductList = ({ products, onDelete, onEdit }) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="card">
          <h2>{product.name}</h2>
          <h2>Rs. {product.price}</h2>

          <div>
            <button onClick={() => onEdit(product)}>
              <FaEdit />
            </button>

            <button onClick={() => onDelete(product.id)}>
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductList;