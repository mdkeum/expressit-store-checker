// src/pages/Products.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://glore-bd-backend-node-mongo.vercel.app/api/product");
        const data = await res.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Failed to load products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center text-lg mt-10">Loading products...</p>;

  return (
    <div className="p-4 sm:p-6 md:p-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            onClick={() => navigate(`/products/${product._id}`, { state: { product } })}
            className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={product.images?.[0] || "https://via.placeholder.com/300"}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="mt-2 text-sm text-gray-400">{product.category?.name || "Uncategorized"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

/*import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /*useEffect(() => {
    fetch("https://glore-bd-backend-node-mongo.vercel.app/api/product")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);*/
  /*useEffect(() => {
  fetch("https://glore-bd-backend-node-mongo.vercel.app/api/product")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      return res.json();
    })
    .then((data) => {
      console.log("Fetched products:", data);
      console.log("Each product:", data.data);
      setProducts(data.data); // ✅ fix applied here
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, []);
useEffect(() => {
  const dummyProducts = [
    {
      _id: "1",
      name: "Test Product 1",
      category: "Test Category",
      price: 100,
      images: ["https://via.placeholder.com/150"],
    },
    {
      _id: "2",
      name: "Test Product 2",
      category: "Another Category",
      price: 200,
      images: ["https://via.placeholder.com/150"],
    },
  ];
  setProducts(dummyProducts);
  setLoading(false);
}, []);




  if (loading) return <p className="p-6">Loading products...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link to={`/products/${product._id}`} key={product._id}>
            <div className="border rounded-xl shadow hover:shadow-lg p-4 transition">
              {/*<img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />*/
             /* <img
              src={product.images?.[0] || "https://via.placeholder.com/150"}
              alt={product.name}
              className="w-full h-40 object-cover rounded"
              />

              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-md font-bold">৳ {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
*/