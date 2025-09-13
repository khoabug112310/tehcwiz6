import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import "../../css/Products.css";
import productsData from "../../data/products.json";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Load products from JSON file
  useEffect(() => {
    // Add additional properties to match the mock data
    const enhancedProducts = productsData.map((product) => ({
      ...product,
      rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3.0-5.0
      reviews: Math.floor(Math.random() * 150 + 10), // Random reviews between 10-160
      features: ["High Quality", "Durable", "Pet Safe"],
    }));

    setProducts(enhancedProducts);
    setFilteredProducts(enhancedProducts);
  }, []);

  // Filter and sort products
  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
      default:
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedCategory, sortBy, products]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleAddToCart = (product) => {
    // Add to cart logic here
    Swal.fire({
      title: 'Added to Cart!',
      text: `${product.name} added to cart!`,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  const handleBuyNow = (product) => {
    Swal.fire({
      title: 'Product Purchased!',
      text: `Thank you for purchasing ${product.name}! This is a demo, so no actual transaction occurred.`,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  const getUniqueCategories = () => {
    const categories = [
      ...new Set(products.map((product) => product.category)),
    ];
    return categories;
  };

  const getCategoryName = (categoryKey) => {
    const categoryMap = {
      "dog-food": "Dog Food",
      "cat-food": "Cat Food",
      "toys": "Toys",
      "grooming": "Grooming",
      "bedding": "Bedding",
      "health": "Health",
    };
    return categoryMap[categoryKey] || categoryKey;
  };

  const getCategoryIcon = (categoryKey) => {
    const iconMap = {
      "dog-food": "🍖",
      "cat-food": "🐟",
      "toys": "🎾",
      "grooming": "🛁",
      "bedding": "🛏️",
      "health": "💊",
    };
    return iconMap[categoryKey] || "📦";
  };

  const renderRating = (rating) => {
    return (
      <div className="product-rating">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < Math.floor(rating) ? "star filled" : "star"}
          >
            ★
          </span>
        ))}
        <span className="rating-text">({rating})</span>
      </div>
    );
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="pagination">
        <button
          onClick={() =>
            handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
          }
          disabled={currentPage === 1}
          className="pagination-btn pagination-nav"
        >
          Previous
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`pagination-btn ${
              currentPage === number ? "active" : ""
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() =>
            handlePageChange(
              currentPage < totalPages ? currentPage + 1 : totalPages
            )
          }
          disabled={currentPage === totalPages}
          className="pagination-btn pagination-nav"
        >
          Next
        </button>

        <div className="total-pages">
          Page {currentPage} of {totalPages}
        </div>
      </div>
    );
  };

  return (
    <div className="products-container w-100">
      <div className="products-header">
        <h2 className="fw-bold">Pet Product Showcase</h2>
        <p>Find the best products for your furry friends</p>
      </div>

      <div className="products-controls w-100">
        <div className="search-box w-100">
          <input
            className="w-100"
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="filters-container">
          <div className="category-filters-container">
            <div className="category-dropdown">
              <label htmlFor="category">Filter by:</label>
              <select
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="all">All Categories</option>
                {getUniqueCategories().map((category) => (
                  <option key={category} value={category}>
                    {getCategoryIcon(category)} {getCategoryName(category)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="sort-container">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" value={sortBy} onChange={handleSortChange}>
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>

      <div className="products-info">
        <p>{filteredProducts.length} products found</p>
      </div>

      <div className="product-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
              <div className="product-badge">
                {getCategoryIcon(product.category)}{" "}
                {product.category.includes("food")
                  ? "Food"
                  : getCategoryName(product.category)}
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              {renderRating(product.rating)}
              <p className="product-description">{product.description}</p>
              <div className="product-price">${product.price.toFixed(2)}</div>
              <div className="product-actions d-flex justify-content-center">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="button1 w-50 p-0"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleBuyNow(product)}
                  className="button2 w-50"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          <h3>No products found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}

      {filteredProducts.length > 0 && totalPages > 1 && renderPagination()}
    </div>
  );
};

export default Products;