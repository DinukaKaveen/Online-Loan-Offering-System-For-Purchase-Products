import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import FooterCus from "./FooterCus";

export default function HomeCus() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/Products")
      .then((response) => setImages(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <img
              src={`data:image/png;base64,${image.image}`}
              alt={`${index}`}
              style={{ width: "200px", height: "200px" }}
            />
            {image.product_code} {image.product_name}
          </li>
        ))}
      </ul>

      <FooterCus />
    </div>
  );
}
