import ProductCard from "../../components/ProductCard/ProductCard";

function Wishlist() {

  const wishlistProducts = [
    {
      id: 1,
      name: "Royal Banarasi Silk Saree",
      category: "Sarees",
      price: 3499,
      oldPrice: 4999,
      rating: 4.8
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
    }
  ];

  return (
    <section className="page-section">

      <div className="container">

        <div className="page-heading">

          <p>Your Favourite Styles</p>

          <h1>
            My Wishlist
          </h1>

        </div>

        <div className="row g-4">

          {wishlistProducts.map((product) => (

            <div
              className="col-lg-4 col-md-6"
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

export default Wishlist;
