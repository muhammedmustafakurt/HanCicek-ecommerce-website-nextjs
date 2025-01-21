"use client";
import React, { useState } from "react";
import { addProduct } from "./actions";
import "./products.css"; // CSS dosyasını uygun şekilde güncelleyin.

const tableOptions = [
  "cicekler",
  "hediyeler",
  "kadina-hediye",
  "erkege-hediye",
  "ayni-gun-hediye-seti",
  "orkide",
  "papatya-gerbera",
  "dogum-ve-bebek",
  "anneler-gunu-ozel",
  "pelus-ayiciklar",
  "yeni-is-terfi",
  "sevgiliye",
  "yildonumu",
  "arkadasa",
  "gecmis-olsun",
  "ozur-dilerim",
  "tesekkur-ederim",
  "acilis-ve-dugun",
  "cenaze",
  "buketler",
  "arajmanlar",
  "ferforje",
  "teraryumlar",
  "yapay-cicekler",
  "butik-cicekler",
  "kutuda-cicek",
  "vazoda-cicekler",
  "solmayan-guller",
  "gelin-eli-cicekleri",
  "IndirimdekiUrunler",
];

const slugify = (text: string) => {
  return text
    .toString() // Convert to string (in case of anything weird)
    .normalize("NFD") // Normalize to separate accents
    .replace(/[\u0300-\u036f]/g, "") // Remove all accents
    .toLowerCase() // Convert to lower case
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with a single one
};

const AddProductPage = () => {
  const [table, setTable] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [slug, setSlug] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("table", table);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("slug", slug); // Add slug to formData
    try {
      await addProduct(formData);
      alert("Ürün başarıyla eklendi!");
    } catch {
      alert(`Hata: `);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setSlug(slugify(newTitle)); // Update slug when title changes
  };

  return (
    <div className="add-product-container">
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label htmlFor="table">Tablo Seç:</label>
          <select
            id="table"
            name="table"
            value={table}
            onChange={(e) => setTable(e.target.value)}
            required
          >
            <option value="">Bir tablo seçin</option>
            {tableOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="title">Başlık:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Açıklama:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Fiyat:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Resim URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ürün Ekle</button>
      </form>
    </div>
  );
};

export default AddProductPage;
