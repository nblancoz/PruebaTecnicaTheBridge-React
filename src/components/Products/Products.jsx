import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/products/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <div>
      <p>Aqui va la tabla</p>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.id}</p>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
