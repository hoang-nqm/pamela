// src/components/DropdownMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown} style={{ fontFamily: 'NotoSerifDisplay-Condensed', color: '#ab5c72' }}>
        <strong>Chuyên mục Skincare</strong>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <Link to="/bai-viet-1-nhan-biet-cac-loai-da">Nhận biết các loại da</Link>
          <Link to="/bai-viet-2-skincare-cho-da-mun">Skincare cho da mụn</Link>
          <Link to="/bai-viet-3-skincare-cho-da-dau">Skincare cho da dầu</Link>
          <Link to="/bai-viet-4-skincare-cho-da-kho">Skincare cho da khô</Link>
          <Link to="/bai-viet-5-skincare-cho-da-thuong">Skincare cho da thường</Link>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
