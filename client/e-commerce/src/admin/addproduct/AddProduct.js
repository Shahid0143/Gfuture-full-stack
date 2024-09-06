import React, { useState } from "react";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [addProductData, setAddProductData] = useState({
    title: "",
    description: "",
    price: Number,
  });

  const [addAllProductData, setAddAllProductData] = useState({
    allTitle: "",
    allDescription: "",
    allPrice: Number,
  });

  const [addblogProductData, setAddblogProductData] = useState({
    blogTitle: "",
    blogDes: "",
    blogPrice: Number,
  });

  const [selectedImage, setSelectedImage] = useState("");
  const [AllSelectedImage, setAllSelectedImage] = useState("");
  const [blogSelectedImage, setBlogSelectedImage] = useState("");
  const navigate = useNavigate();

  let name, value;
  const hadleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setAddProductData({ ...addProductData, [name]: value });
  };

  const hadleAllChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setAddAllProductData({ ...addAllProductData, [name]: value });
  };

  const hadleBlogChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setAddblogProductData({ ...addblogProductData, [name]: value });
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

  const handleAllBase64 = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setAllSelectedImage(reader.result);
    };
    reader.onerror = (err) => {
      console.log("Error : ", err);
    };
  };

  const handleBlogBase64 = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setBlogSelectedImage(reader.result);
    };
    reader.onerror = (err) => {
      console.log("Error : ", err);
    };
  };

  const addProduct = async (event) => {
    event.preventDefault();

    const { title, description, price } = addProductData;
    const res = await fetch("/addproduct", {
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
    });

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

  const addallProduct = async (event) => {
    event.preventDefault();

    const { allTitle, allDescription, allPrice } = addAllProductData;
    const response = await fetch("/addallproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        allTitle,
        allDescription,
        allPrice,
        AllSelectedImage,
      }),
    });

    await response.json();

    if (allTitle && allDescription && allPrice && AllSelectedImage) {
      alert("Data Successfully Added");
      setAddAllProductData({ allTitle: "", allDescription: "", allPrice: "" });
      setAllSelectedImage("");
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

      <div className="addallProductContainer">
        <div className="addallProduct">
          <div className="addall">
            <p>Add All Product</p>
            <div className="formContainer">
              <form>
                <div className="inputAreaall">
                  <input
                    type="text"
                    placeholder="Add Title"
                    name="allTitle"
                    value={addAllProductData.allTitle}
                    onChange={hadleAllChange}
                  />
                  <input
                    type="text"
                    placeholder="Add Description"
                    name="allDescription"
                    value={addAllProductData.allDescription}
                    onChange={hadleAllChange}
                  />
                  <input
                    type="number"
                    placeholder="Add Price"
                    id="allprice"
                    name="allPrice"
                    value={addAllProductData.allPrice}
                    onChange={hadleAllChange}
                  />
                </div>
                <div className="upload-box">
                  <div class="upload-container">
                    <p>Drag and drop an image or click here to upload</p>
                    <input
                      accept="/image"
                      type="file"
                      id="image-upload"
                      name="AllSelectedImage"
                      onChange={handleAllBase64}
                    />
                  </div>
                </div>
                <div className="addBtnContainer">
                  <div className="addBtn">
                    <button onClick={addallProduct}>Add Product</button>
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
