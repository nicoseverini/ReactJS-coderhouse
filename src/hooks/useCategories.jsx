import { useState, useEffect } from "react";
import { getAllCategories, getSingleCategory } from "../services/ApiProducts";

export const  useAllCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error));
  }, []);

  return { categories };
};

export const useSingleCategory = (categoryId) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getSingleCategory(categoryId)
      .then((res) => setProducts(res.data.products))
      .catch((error) => console.log(error));
  }, [categoryId]);

  return { products };
};