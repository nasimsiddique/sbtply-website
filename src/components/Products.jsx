import plywood from "../assets/images/plywood.jpg";
import boards from "../assets/images/boards.jpg";
import doors from "../assets/images/doors.jpg";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));

      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setProducts(data);
    };

    fetchData();
  }, []);

  // fallback images (optional)
  const getImage = (name) => {
    if (name === "Plywood") return plywood;
    if (name === "Boards") return boards;
    if (name === "Decorative Doors") return doors;
    return plywood;
  };

  return (
    <section id="products" className="products">
      <p style={{ color: "#c40000", letterSpacing: "3px" }}>
        OUR COLLECTION
      </p>

      <h1>Premium Products</h1>

      <div className="products-grid">
        {products.map((item) => (
          <div key={item.id} className="card">
            <img src={getImage(item.name)} />

            <div className="card-content">
              <h3>{item.name}</h3>
              <p>₹ {item.price}</p>
              <span className="learn">Learn More →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}