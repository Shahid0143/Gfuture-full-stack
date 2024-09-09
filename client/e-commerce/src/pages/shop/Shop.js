import React, { useState, useEffect } from "react";
import { useCart } from "../../CartContext";
import Navbar from "../../components/navbar/Navbar";
import "../shop/Shop.css";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const { addToCart, cart } = useCart();

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://gfuture-full-stack-1.onrender.com/addallproduct",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const isProductInCart = cart.some((item) => item._id === product._id);

    if (isProductInCart) {
      toast.info(`${product.allTitle} is already in the cart`);
    } else {
      addToCart(product);
      toast.success(`${product.allTitle} added to cart`);
    }
  };

  const filteredProducts = products
    .filter((product) => {
      if (!filter) return true;
      return product.allTitle.toLowerCase().includes(filter.toLowerCase());
    })
    .filter((product) => {
      if (!searchTerm) return true;
      return product.allTitle.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .sort((a, b) => {
      if (sort === "low-to-high") {
        return a.allPrice - b.allPrice;
      } else if (sort === "high-to-low") {
        return b.allPrice - a.allPrice;
      }
      return 0;
    });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      <div className="shop-controls">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="shop-search"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="shop-filter"
        >
          <option value="">Filter by title</option>
          {products.map((product) => (
            <option key={product._id} value={product.allTitle}>
              {product.allTitle}
            </option>
          ))}
        </select>
        <div className="shop-sort">
          <label>
            <input
              type="radio"
              name="sort"
              value="low-to-high"
              checked={sort === "low-to-high"}
              onChange={(e) => setSort(e.target.value)}
            />
            Price: Low to High
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              value="high-to-low"
              checked={sort === "high-to-low"}
              onChange={(e) => setSort(e.target.value)}
            />
            Price: High to Low
          </label>
        </div>
      </div>
      <h1 style={{ marginLeft: "90px", marginTop: "20px" }}>
        Shop All Products
      </h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="shop-container">
            {currentProducts.map((product) => (
              <div key={product._id} className="shop-product-card">
                <img
                  src={product.AllSelectedImage}
                  alt={product.allTitle}
                  className="shop-product-image"
                />
                <h2>{product.allTitle}</h2>
                <p>{product.allDescription}</p>
                <p>Price: ${product.allPrice}</p>
                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <div className="pagination">
            {[...Array(totalPages).keys()].map((number) => (
              <button
                key={number + 1}
                onClick={() => paginate(number + 1)}
                className={`pagination-button ${
                  currentPage === number + 1 ? "active" : ""
                }`}
              >
                {number + 1}
              </button>
            ))}
          </div>
          <div className="page-indicator">
            Showing {indexOfFirstProduct + 1} to{" "}
            {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
            {filteredProducts.length} products
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
