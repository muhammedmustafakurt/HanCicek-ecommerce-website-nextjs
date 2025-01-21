import React from "react";
import Link from "next/link"; // Import the Link component from Next.js
import connectToDB from "../../db";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  url: string;
}

// Define an async function to fetch product data
async function fetchProducts(slug: string): Promise<Product[]> {
  const db = await connectToDB();
  const collection = db.collection(slug); // Fetch collection based on slug

  const products = await collection.find({}).toArray();

  return products.map((product) => ({
    id: product._id.toString(),
    title: product.title,
    description: product.description,
    price: product.price,
    image: product.image,
    url: product.url,
  }));
}
interface PageProps {
  params: Promise<{ slug: string }>;
}
const fiat = async ({ params }: PageProps) => {
  const { slug } = await params;

  const products = await fetchProducts(slug);

  return (
    <>
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
                    <h1>{slug} Ürün Listesi</h1>
                    <ul className="breadcrumb">
                      <li>
                        <a href="index.html">Ana Sayfa</a>
                      </li>
                      <li>
                        <a href="index.html">fiat</a>
                      </li>
                      <li className="current">
                        <a href="#">{slug}</a>
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
          <div className="container container-wide">
            <div className="row">
              <div className="col-lg-3 order-1 order-lg-0">
                <div className="sidebar-area">
                  <div className="sidebar-item">
                    <h4 className="sidebar-title">Kategoriler</h4>
                    <div className="sidebar-body">
                      <ul className="sidebar-list">
                        <li>
                          <Link href="/hazirlanisa-gore/buketler">
                            <a>Buketler</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hazirlanisa-gore/arajmanlar">
                            <a>Arajmanlar</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hazirlanisa-gore/ferforje">
                            <a>Ferforje</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hazirlanisa-gore/teraryumlar">
                            <a>Teraryumlar</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hazirlanisa-gore/yapay-cicekler">
                            <a>Yapay Çiçekler</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hazirlanisa-gore/butik-cicekler">
                            <a>Butik Çiçekler</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hazirlanisa-gore/kutuda-cicek">
                            <a>Kutuda Çiçek</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hazirlanisa-gore/vazoda-cicekler">
                            <a>Vazoda Çiçekler</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hazirlanisa-gore/solmayan-guller">
                            <a>Solmayan Güller</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hazirlanisa-gore/gelin-eli-cicekleri">
                            <a>Gelin Eli Çiçekleri</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 order-0 order-lg-1">
                <div className="action-bar-inner mb-7">
                  <div className="flex items-center justify-end">
                    <div className="w-full sm:w-1/2">
                      <div className="sort-by-wrapper flex justify-end">
                        <label htmlFor="sort" className="sr-only">
                          Sort By
                        </label>
                        <select
                          name="sort"
                          id="sort"
                          className="border border-gray-300 px-3 py-2 rounded-md"
                        >
                          <option value="sbp">Sort By Popularity</option>
                          <option value="sbn">Sort By Newest</option>
                          <option value="sbt">Sort By Trending</option>
                          <option value="sbr">Sort By Rating</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-wrapper product-layout layout-grid">
                  <div className="row mtn-30">
                    {products.map((product) => (
                      <div key={product.id} className="col-sm-6 col-lg-4">
                        <div className="product-item">
                          <div className="product-item__thumb">
                            <Link
                              href={`/hazirlanisa-gore/${slug}/${product.url}`}
                            >
                              <img
                                className="thumb-primary"
                                src={product.image}
                                alt={product.title}
                                style={{
                                  backgroundSize: "contain",
                                  backgroundPosition: "center",
                                  backgroundRepeat: "no-repeat",
                                }}
                              />
                              <img
                                className="thumb-secondary"
                                src={product.image}
                                alt={product.title}
                                style={{
                                  backgroundSize: "contain",
                                  backgroundPosition: "center",
                                  backgroundRepeat: "no-repeat",
                                }}
                              />
                            </Link>
                            <div className="ratting">
                              <span>
                                <i className="ion-android-star" />
                              </span>
                              <span>
                                <i className="ion-android-star" />
                              </span>
                              <span>
                                <i className="ion-android-star" />
                              </span>
                              <span>
                                <i className="ion-android-star" />
                              </span>
                              <span>
                                <i className="ion-android-star-half" />
                              </span>
                            </div>
                          </div>
                          <div className="product-item__content">
                            <div className="product-item__info">
                              <h4 className="title">
                                <Link href={`/hazirlanisa-gore/${slug}/${product.url}`}>
                                  {product.title}
                                </Link>
                              </h4>
                              <span className="price">
                                <strong>Fiyat:</strong> {product.price} TL
                              </span>
                            </div>
                            <div className="product-item__desc">
                              <p>{product.description}</p>
                            </div>
                            <div className="product-item__action">
                              <a
                                href={`https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar ${product.title},+sipari%C5%9F+vermek+istiyorum.WS`}
                                className="btn-add-to-cart"
                              >
                                <i className="ion-bag">&nbsp; Sepete ekle</i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="action-bar-inner mt-30">
                  <div className="row align-items-center">
                    <div className="col-sm-6">
                      <nav className="pagination-wrap mb-10 mb-sm-0">
                        <ul className="pagination">
                          <li className="active">
                            <a href="#">1</a>
                          </li>
                          <li>
                            <a href="#">2</a>
                          </li>
                          <li>
                            <a href="#">3</a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-ios-arrow-thin-right" />
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="col-sm-6 text-center text-sm-end">
                      <p>Showing 1–12 of 26 results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*== End Page Content Wrapper ==*/}
      </div>
    </>
  );
};

export default fiat;
