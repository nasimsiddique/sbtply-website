import { useEffect, useState } from "react";
import { db, storage } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export default function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null); // 🔥 NEW
  const [preview, setPreview] = useState(null); // 🔥 PREVIEW
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔥 ADD PRODUCT WITH IMAGE
  const handleAdd = async () => {
    if (!name || !price || !image) return alert("Fill all fields");

    // upload image
    const imageRef = ref(storage, "products/" + image.name);
    await uploadBytes(imageRef, image);

    const imageUrl = await getDownloadURL(imageRef);

    // save to firestore
    await addDoc(collection(db, "products"), {
      name,
      price: Number(price),
      image: imageUrl,
    });

    setName("");
    setPrice("");
    setImage(null);
    setPreview(null);

    fetchProducts();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  const handleUpdate = async (id) => {
    const newPrice = prompt("Enter new price:");
    if (!newPrice) return;

    await updateDoc(doc(db, "products", id), {
      price: Number(newPrice),
    });

    fetchProducts();
  };

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ marginBottom: "20px" }}>Admin Panel</h1>

      {/* FORM */}
      <div style={{ marginBottom: "30px" }}>
        <input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        />

        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        />

        {/* 🔥 IMAGE INPUT */}
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            setImage(file);
            setPreview(URL.createObjectURL(file)); // preview
          }}
          style={{ marginBottom: "10px" }}
        />

        {/* 🔥 PREVIEW */}
        {preview && (
          <img
            src={preview}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          />
        )}

        <button
          onClick={handleAdd}
          style={{
            background: "#c40000",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Product
        </button>
      </div>

      {/* LIST */}
      <h2>All Products</h2>

      {products.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #eee",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          {/* 🔥 IMAGE SHOW */}
          {item.image && (
            <img
              src={item.image}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                marginBottom: "10px",
                borderRadius: "6px",
              }}
            />
          )}

          <h3>{item.name}</h3>
          <p>₹ {item.price}</p>

          <button
            onClick={() => handleUpdate(item.id)}
            style={{
              background: "#000",
              color: "#fff",
              border: "none",
              padding: "6px 12px",
              marginRight: "10px",
              cursor: "pointer",
            }}
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(item.id)}
            style={{
              background: "red",
              color: "#fff",
              border: "none",
              padding: "6px 12px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}