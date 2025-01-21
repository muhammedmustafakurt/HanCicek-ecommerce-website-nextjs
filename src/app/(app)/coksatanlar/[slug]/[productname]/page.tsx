import React from "react";
import connectToDB from "../../../db"; // Adjust the path to your db.js file
import "../../../../../../public/assets/css/leaflet.min.css";
import "../../../../../../public/assets/css/nice-select.min.css";
import "../../../../../../public/assets/css/slick.min.css";
import "../../../../../../public/assets/css/magnific-popup.min.css";
import "../../../../../../public/assets/css/slicknav.min.css";
import "../../../../../../public/assets/css/animate.min.css";
import "../../../../../../public/assets/css/ionicons.min.css";
import "../../../../../../public/assets/css/font-awesome.min.css";
import "../../../../../../public/assets/css/bootstrap.min.css";
import "../../../../../../public/assets/css/style.css";
import "../../../../../../public/assets/css/helper.min.css";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string; // Added field
  brand: string; // Added field
  stockCode: string; // Added field
}

// Fetch the product details based on slug and productname
const fetchProductDetails = async (
  slug: string,
  productname: string
): Promise<Product | null> => {
  const db = await connectToDB();
  const collection = db.collection(slug);

  // Find the product based on the slug and productname
  const product = await collection.findOne({
    url: { $regex: new RegExp(`^${productname}`) },
  });

  if (!product) {
    return null;
  }

  return {
    id: product._id.toString(),
    title: product.title,
    description: product.description,
    price: product.price,
    image: product.image,
    category: product.category, // Fetching category
    brand: product.brand, // Fetching brand
    stockCode: product.stockCode, // Fetching stock code
  };
};

interface PageProps {
  params: Promise<{ slug: string; productname: string }>;
}

const ProductDetails = async ({ params }: PageProps) => {
  // Resolve the params promise
  const { slug, productname } = await params;

  const product = await fetchProductDetails(slug, productname);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {/*== Start Page Header Area ==*/}
      <div
        className="page-header-wrap bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737389258/Ads%C4%B1z_tasar%C4%B1m_33_er0ycq.jpg')",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="page-header-content">
                <div className="page-header-content-inner">
                  <h1>{product.title} Ürünü</h1>
                  <ul className="breadcrumb">
                    <li>
                      <a href="index.html">Ana Sayfa</a>
                    </li>
                    <li>
                      <a href="index.html">coksatanlar</a>
                    </li>
                    <li>
                      <a href="#">{slug}</a>
                    </li>
                    <li className="current">
                      <a href="#">{product.title}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*== End Page Header Area ==*/}

      {/*== Start Page Content Wrapper ==*/}
      <div className="page-content-wrapper sp-y">
        <div className="product-details-page-content">
          <div className="container container-wide">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  {/* Start Product Thumbnail Area */}
                  <div className="col-md-5">
                    <div className="product-thumb-area">
                      <div className="product-details-thumbnail">
                        <div
                          className="product-thumbnail-slider"
                          id="thumb-gallery"
                        >
                          <figure
                            className="pro-thumb-item"
                            data-mfp-src={product.image}
                          >
                            <img src={product.image} alt="Product Details" />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Product Thumbnail Area */}

                  {/* Start Product Info Area */}
                  <div className="col-md-7">
                    <div className="product-details-info-content-wrap">
                      <div className="prod-details-info-content">
                        <h2>{product.title}</h2>
                        <h5 className="price">
                          <strong>Fiyat:</strong>{" "}
                          <span className="price-amount">
                            {product.price} TL
                          </span>
                        </h5>
                        <p>{product.description}</p>
                        <div className="product-action">
                          <div className="action-top d-sm-flex">
                          <a
                              href={`https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar ${product.title},+sipari%C5%9F+vermek+istiyorum.WS`}
                              className="btn btn-bordered"
                            >
                              Sipariş Ver
                            </a>
                          </div>
                        </div>
                        <div className="product-meta">
                          <span className="sku_wrapper">
                            SKU: <span className="sku">N/A</span>
                          </span>
                          <span className="posted_in">
                            Categories:
                            <a href="#">Best Seller,</a>
                            <a href="#">Parts,</a>
                            <a href="#">Shop</a>
                          </span>
                          <span className="tagged_as">
                            Tags:
                            <a href="#">Seller,</a>
                            <a href="#">Modern,</a>
                            <a href="#">Parts</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Product Info Area */}
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="product-description-review">
                      {/* Product Description Tab Menu */}
                      <ul
                        className="nav nav-tabs desc-review-tab-menu"
                        id="desc-review-tab"
                        role="tablist"
                      >
                        <li>
                          <button
                            className="active"
                            id="desc-tab"
                            type="button"
                            data-bs-toggle="tab"
                            data-bs-target="#descriptionContent"
                            role="tab"
                            aria-controls="descriptionContent"
                            aria-selected="true"
                          >
                            Açıklama
                          </button>
                        </li>
                      </ul>
                      {/* Product Description Tab Content */}
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="descriptionContent"
                          role="tabpanel"
                          aria-labelledby="desc-tab"
                        >
                          <div className="description-content">
                            <p>{product.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*== End Page Content Wrapper ==*/}
    </div>
  );
};

export default ProductDetails;
