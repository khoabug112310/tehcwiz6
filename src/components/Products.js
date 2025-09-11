import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Load products from JSON file
  useEffect(() => {
    // In a real app, we would fetch from a JSON file
    // For now, we'll use mock data
    const mockProducts = [
      {
        id: 1,
        category: "dog-food",
        name: "Premium Dog Food",
        image: "https://images.unsplash.com/photo-1589924671690-7c1d4ce9718d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        description: "High-quality nutrition for adult dogs with real chicken and vegetables",
        price: 24.99
      },
      {
        id: 2,
        category: "cat-food",
        name: "Organic Cat Food",
        image: "https://images.unsplash.com/photo-1589924671690-7c1d4ce9718d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        description: "Grain-free formula with salmon and sweet potatoes",
        price: 19.99
      },
      {
        id: 3,
        category: "toys",
        name: "Interactive Dog Toy",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        description: "Keeps your dog entertained for hours with treat dispensing feature",
        price: 14.99
      },
      {
        id: 4,
        category: "grooming",
        name: "Pet Grooming Kit",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        description: "Complete grooming set with brush, nail clippers, and shampoo",
        price: 29.99
      }
    ];
    
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  // Filter products based on search term and category
  useEffect(() => {
    let result = products;
    
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, products]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBuyNow = (product) => {
    alert(`You selected to buy: ${product.name}\nNote: This is a demonstration. No actual purchase will be made.`);
  };

  return (
    <div>
      <h2>Pet Product Showcase</h2>
      
      <div className="product-filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        
        <div className="category-filters">
          <button 
            className={selectedCategory === 'all' ? 'active' : ''}
            onClick={() => handleCategoryChange('all')}
          >
            All Products
          </button>
          <button 
            className={selectedCategory === 'dog-food' ? 'active' : ''}
            onClick={() => handleCategoryChange('dog-food')}
          >
            Dog Food
          </button>
          <button 
            className={selectedCategory === 'cat-food' ? 'active' : ''}
            onClick={() => handleCategoryChange('cat-food')}
          >
            Cat Food
          </button>
          <button 
            className={selectedCategory === 'toys' ? 'active' : ''}
            onClick={() => handleCategoryChange('toys')}
          >
            Toys
          </button>
          <button 
            className={selectedCategory === 'grooming' ? 'active' : ''}
            onClick={() => handleCategoryChange('grooming')}
          >
            Grooming
          </button>
        </div>
      </div>
      
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-price">${product.price.toFixed(2)}</div>
            <button onClick={() => handleBuyNow(product)} className="buy-now-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;