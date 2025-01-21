"use client";
import { useState } from "react";
import Link from "next/link"; // Import the Link component from Next.js
import "../sidebar/sidebar.css";
import {
  FaUser,
  FaAngleRight,
  FaAngleDown,
  FaSignOutAlt,
} from "react-icons/fa"; // Import slim arrow icons

export default function Sidebar() {
  const [openOrders, setOpenOrders] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openProductList, setOpenProductList] = useState(false);
  const [openRenaultModels, setOpenRenaultModels] = useState(false); // State for Renault models dropdown
  const [openDaciaModels, setOpenDaciaModels] = useState(false); // State for Dacia models dropdown
  const [openFiatModels, setOpenFiatModels] = useState(false); // State for Fiat models dropdown
  const [userMenuOpen, setUserMenuOpen] = useState(false); // State for user dropdown

  const toggleOrders = () => {
    setOpenOrders(!openOrders);
  };

  const toggleProducts = () => {
    setOpenProducts(!openProducts);
  };

  const toggleProductList = () => {
    setOpenProductList(!openProductList);
  };

  const toggleRenaultModels = () => {
    setOpenRenaultModels(!openRenaultModels);
  };

  const toggleDaciaModels = () => {
    setOpenDaciaModels(!openDaciaModels);
  };

  const toggleFiatModels = () => {
    setOpenFiatModels(!openFiatModels);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen); // Toggle the user menu
  };

  return (
    <div className="dashboard-container">
      {/* Top Bar */}
      <div className="topbar">
        <div className="logo">
          <Link href="/admin">
            <h2 className="admin-panel-link">HAN ÇİÇEKÇİLİK YÖNETİM PANELİ</h2>
          </Link>
        </div>
        <div className="topbar-items">
          <span className="user-icon" onClick={toggleUserMenu}>
            <FaUser /> Cihat
          </span>
          {/* User Dropdown Menu */}
          {userMenuOpen && (
            <div className="user-dropdown">
              <ul>
                <li>
                  <Link href="/logout">
                    <FaSignOutAlt /> Çıkış Yap
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li>
            <Link href="/admin">Anasayfa</Link>
          </li>

          {/* Siparişlerim Dropdown */}
          <li onClick={toggleOrders}>
            <a href="#">Siparişlerim</a>
            {openOrders ? <FaAngleDown /> : <FaAngleRight />}
          </li>
          {openOrders && (
            <ul className="dropdown">
              <li>
                <Link href="/orders/new">Yeni Siparişler</Link>
              </li>
              <li>
                <Link href="/orders/completed">Tamamlanmış Siparişler</Link>
              </li>
              <li>
                <Link href="/orders/returns">İade Talepleri</Link>
              </li>
            </ul>
          )}

          {/* Ürünler Dropdown */}
          <li onClick={toggleProducts}>
            <a href="#">Ürünler</a>
            {openProducts ? <FaAngleDown /> : <FaAngleRight />}
          </li>
          {openProducts && (
            <ul className="dropdown">
              <li onClick={toggleProductList}>
                <a href="#">Ürün Listesi</a>
                {openProductList ? <FaAngleDown /> : <FaAngleRight />}
              </li>
              {openProductList && (
                <ul className="nested-dropdown">
                  <li>
                    <Link href="/admin/products/IndirimdekiUrunler">
                      Indirimdeki Urunler
                    </Link>
                  </li>
                  {/* Renault Models */}
                  <li onClick={toggleRenaultModels}>
                    <a href="#">Doğum Günü Çiçekleri</a>
                    {openRenaultModels ? <FaAngleDown /> : <FaAngleRight />}
                  </li>
                  {openRenaultModels && (
                    <ul className="nested-dropdown">
                      <li>
                        <Link href="/admin/products/cicekler">
                          Doğum Günü Çiçekleri
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/products/hediyeler">
                          Doğum Günü Hediyeleri
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/products/kadina-hediye">
                          Kadına Hediye
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/products/erkege-hediye">
                          Erkeğe Hediye
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/products/ayni-gun-hediye-seti">
                          Aynı Gün Hediye Seti
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/products/orkide">Orkide</Link>
                      </li>
                      <li>
                        <Link href="/admin/products/papatya-gerbera">
                          Papatya - Gerbera
                        </Link>
                      </li>
                    </ul>
                  )}

                  {/* Dacia Models */}
                  <li onClick={toggleDaciaModels}>
                    <a href="#">Gönderime Göre</a>
                    {openDaciaModels ? <FaAngleDown /> : <FaAngleRight />}
                  </li>
                  {openDaciaModels && (
                    <ul className="nested-dropdown">
                      <li>
                        <Link href="/admin/products/dogum-ve-bebek">
                          Doğum & Bebek
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/products/anneler-gunu-ozel">
                          Anneler Günü Özel
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/products/pelus-ayiciklar">
                          Peluş Ayıcıklar
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/products/yeni-is-terfi">
                          Yeni İş / Terfi
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/products/sevgiliye">Sevgiliye</Link>
                      </li>
                      <li>
                        <Link href="/admin/products/yildonumu">Yıldönümü</Link>
                      </li>
                      <li>
                        <Link href="/admin/products/arkadasa">Arkadaşa</Link>
                      </li>
                      <li>
                        <Link href="/admin/products/gecmis-olsun">
                          Geçmiş Olsun
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/products/ozur-dilerim">
                          Özür Dilerim
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/products/tesekkur-ederim">
                          Teşekkür Ederim
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/products/acilis-ve-dugun">
                          Açılış & Düğün
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/products/cenaze">Cenaze</Link>
                      </li>
                    </ul>
                  )}

                  {/* Fiat Models */}
                  <li onClick={toggleFiatModels}>
                    <a href="#">Hazırlanışa göre</a>
                    {openFiatModels ? <FaAngleDown /> : <FaAngleRight />}
                  </li>
                  {openFiatModels && (
                    <ul className="nested-dropdown">
                      <li>
                        <Link href="/hazirlanisa-gore/buketler">Buketler</Link>
                      </li>
                      <li>
                        <Link href="/hazirlanisa-gore/arajmanlar">
                          Arajmanlar
                        </Link>
                      </li>
                      <li>
                        <Link href="/hazirlanisa-gore/ferforje">Ferforje</Link>
                      </li>
                      <li>
                        <Link href="/hazirlanisa-gore/teraryumlar">
                          Teraryumlar
                        </Link>
                      </li>
                      <li>
                        <Link href="/hazirlanisa-gore/yapay-cicekler">
                          Yapay Çiçekler
                        </Link>
                      </li>
                      <li>
                        <Link href="/hazirlanisa-gore/butik-cicekler">
                          Butik Çiçekler
                        </Link>
                      </li>
                      <li>
                        <Link href="/hazirlanisa-gore/kutuda-cicek">
                          Kutuda Çiçek
                        </Link>
                      </li>
                      <li>
                        <Link href="/hazirlanisa-gore/vazoda-cicekler">
                          Vazoda Çiçekler
                        </Link>
                      </li>
                      <li>
                        <Link href="/hazirlanisa-gore/solmayan-guller">
                          Solmayan Güller
                        </Link>
                      </li>
                      <li>
                        <Link href="/hazirlanisa-gore/gelin-eli-cicekleri">
                          Gelin Eli Çiçekleri
                        </Link>
                      </li>
                    </ul>
                  )}
                </ul>
              )}

              <li>
                <Link href="/admin/products/add">Yeni Ürün Ekle</Link>
              </li>
              <li>
                <Link href="/products/stock">Stok Yönetimi</Link>
              </li>
              <li>
                <Link href="/admin/products/IndirimdekiUrunler">
                  İndirimdeki Ürünler
                </Link>
              </li>
            </ul>
          )}

          <li>
            <Link href="/users">Kullanıcılar</Link>
          </li>
          <li>
            <Link href="/statistics">İstatistik</Link>
          </li>
          <li>
            <Link href="/coupons">Kuponlar</Link>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Add your dashboard cards, graphs, and other widgets here */}
      </div>
    </div>
  );
}
