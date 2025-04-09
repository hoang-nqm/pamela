// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';


function Navbar() {
  return (
    <nav>
      <ul id="menu">
        <li>
          <Link to="/" id="logo">
            <img
              src="Logo.svg"
              width="194px"
              height="50px"
              alt="Programing"
              style={{ paddingTop: '5px' }} // Corrected style
            />
          </Link>
        </li>
        <li className="dropdown">
          <Link
            to="/"
            style={{ fontFamily: 'NotoSerifDisplay-Condensed', color: '#ab5c72' }}
          >
            <strong>Trang chủ</strong>
          </Link>
        </li>
        <DropdownMenu /> {/* Skincare Dropdown */}
        <li className="dropdown">
          <Link
            to="/chuyen-muc-makeup"
            style={{ fontFamily: 'NotoSerifDisplay-Condensed', color: '#ab5c72' }}
          >
            <strong>Chuyên mục Makeup</strong>
          </Link>
          <div className="dropdown-content">
            <Link to="/bai-viet-6-cac-buoc-trang-diem-co-ban">Các bước trang điểm cơ bản</Link>
            <Link to="/bai-viet-7-trang-diem-mat">Trang điểm mặt</Link>
            <Link to="/bai-viet-8-trang-diem-mat">Trang điểm mắt</Link>
            <Link to="/bai-viet-9-trang-diem-moi">Trang điểm môi</Link>
          </div>
        </li>
        <li className="dropdown">
          <Link
            to="/san-pham"
            style={{ fontFamily: 'NotoSerifDisplay-Condensed', color: '#ab5c72' }}
          >
            <strong>Sản phẩm</strong>
          </Link>
          <div className="dropdown-content">
            <div className="dropdown-content11">
              <Link to="/bai-viet-13-beauty-skin">Beauty Skin</Link>
            </div>
            <div className="dropdown-content22">
              <Link to="#">Beauty Face</Link>
              <div className="dropdown-content2">
                <Link to="/bai-viet-10-beauty-face-trang-diem-mat">Trang điểm mặt</Link>
                <Link to="/bai-viet-11-beauty-face-trang-diem-mat">Trang điểm mắt</Link>
                <Link to="/bai-viet-12-beauty-face-trang-diem-moi">Trang điểm môi</Link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
