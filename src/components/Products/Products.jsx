import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/products/productsSlice";
import { Table } from "antd";
import "./Products.scss";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    onFilter: (value, record) => record.title.indexOf(value) === 0,
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
    render: (value) => `$${value.toFixed(2)}`,
  },
  {
    title: "Category",
    dataIndex: "category",
    filters: [
      {
        text: "men's clothing",
        value: "men's clothing",
      },
      {
        text: "jewelery",
        value: "jewelery",
      },
      {
        text: "electronics",
        value: "electronics",
      },
      {
        text: "women's clothing",
        value: "women's clothing",
      },
    ],
    onFilter: (value, record) => record.category.indexOf(value) === 0,
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const data = products.map((product) => ({
    key: product.id,
    title: product.title,
    category: product.category,
    price: product.price,
  }));

  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

export default Products;
