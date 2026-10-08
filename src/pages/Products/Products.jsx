import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

function Products() {

  const products = [
    {
      id: 1,
      name: "Royal Banarasi Silk Saree",
      category: "Sarees",
      price: 3499,
      oldPrice: 4999,
      rating: 4.8
    },
    {
      id: 2,
      name: "Elegant Silk Saree",
      category: "Sarees",
      price: 2899,
      oldPrice: 3999,
      rating: 4.7
    },
    {
      id: 3,
      name: "Traditional Half Saree",
      category: "Half Sarees",
      price: 4299,
      oldPrice: 5999,
      rating: 4.9
    },
    {
      id: 4,
      name: "Festive Designer Lehenga",
      category: "Lehengas",
      price: 5499,
      oldPrice: 6999,
      rating: 4.9
    },
    {
      id: 5,
      name: "Classic Embroidered Kurti",
      category: "Kurtis",
      price: 1499,
      oldPrice: 1999,
      rating: 4.6
    },
    {
      id: 6,
      name: "Pastel Wedding Saree",
      category: "Sarees",
      price: 3799,
      oldPrice: 4999,
      rating: 4.8
    },
    {
      id: 7,
      name: "Royal Bridal Lehenga",
      category: "Lehengas",
      price: 7999,
      oldPrice: 9999,
      rating: 5
    },
    {
      id: 8,
      name: "Cotton Printed Kurti",
      category: "Kurtis",
      price: 999,
      oldPrice: 1499,
      rating: 4.5
      
    }
  ];

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const categories = [
    "All",
    "Sarees",
    "Half Sarees",
    "Lehengas",
    "Kurtis"
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );

  return (
    <section className="page-section">

      <div className="container">

        <div className="page-heading">

          <p>Our Collection</p>

          <h1>
            Shop Ethnic Wear
          </h1>

          <span>
            Discover timeless traditional fashion.
          </span>

        </div>


        {/* Categories */}

        <div className="category-buttons">

          {categories.map((category) => (

            <button
              key={category}
              type="button"
              className={
                selectedCategory === category
                  ? "active"
                  : ""
              }
              onClick={() =>
                setSelectedCategory(category)
              }
            >
              {category}
            </button>

          ))}

        </div>


        {/* Products */}

        <div className="row g-4">

          {filteredProducts.map((product) => (

            <div
              className="col-lg-3 col-md-6"
              key={product.id}
            >

              <ProductCard
                product={product}
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Products;