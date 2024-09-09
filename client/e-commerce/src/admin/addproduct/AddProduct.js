import React, { useState } from "react";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [addProductData, setAddProductData] = useState({
    title: "",
    description: "",
    price: Number,
  });

  const [selectedImage, setSelectedImage] = useState("");

  const navigate = useNavigate();

  let name, value;
  const hadleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setAddProductData({ ...addProductData, [name]: value });
  };

  const handleBase64 = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.onerror = (err) => {
      console.log("Error : ", err);
    };
  };

  const addProduct = async (event) => {
    event.preventDefault();

    const { title, description, price } = addProductData;
    const res = await fetch(
      "https://gfuture-full-stack-1.onrender.com/addproduct",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          price,
          selectedImage,
        }),
      }
    );

    await res.json();

    if (title && description && price && selectedImage) {
      alert("Data Successfully Added");
      setAddProductData({ title: "", description: "", price: "" });
      setSelectedImage("");
      navigate("/");
    } else {
      alert("Plz Fill the Data");
    }
  };

  return (
    <div>
      <div className="addProductContainer">
        <div className="addProduct">
          <div className="add">
            <p>Add Product</p>
            <div className="formContainer">
              <form>
                <div className="inputArea">
                  <input
                    type="text"
                    placeholder="Add Title"
                    name="title"
                    value={addProductData.title}
                    onChange={hadleChange}
                  />
                  <input
                    type="text"
                    placeholder="Add Description"
                    name="description"
                    value={addProductData.description}
                    onChange={hadleChange}
                  />
                  <input
                    type="number"
                    placeholder="Add Price"
                    id="price"
                    name="price"
                    value={addProductData.price}
                    onChange={hadleChange}
                  />
                </div>
                <div className="upload-box">
                  <div class="upload-container">
                    <p>Drag and drop an image or click here to upload</p>
                    <input
                      accept="/image"
                      type="file"
                      id="image-upload"
                      name="selectedImage"
                      onChange={handleBase64}
                    />
                  </div>
                </div>
                <div className="addBtnContainer">
                  <div className="addBtn">
                    <button onClick={addProduct}>Add Product</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
