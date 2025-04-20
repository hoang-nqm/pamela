import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

function Header() {
  const styles = {
    header: {
      width: "100%",
    },
    logoImage: {
      paddingTop: "5px",
    },
    linkText: {
      fontFamily: "NotoSerifDisplay-Condensed",
      color: "white",
    },
    container: {
      width: "100%",
      fontFamily: "NotoSerifDisplay-Condensed",
      fontSize: "25px",
      color: "#502d25",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    introText: {
      fontFamily: "NotoSerifDisplay-Condensed",
      fontSize: "20px",
      color: "#502d25",
      textAlign: "justify",
    },
    introContent: {
      display: "flex",
      justifyContent: "center",
    },
    introImage: {
      width: "300px",
      height: "300px",
    },
    footer: {
      width: "100%",
      textAlign: "center",
    },
  };
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  useEffect(() => {
    // Get the username from localStorage when the component mounts
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const Logout = () => {
    localStorage.removeItem("username"); // Remove the username from localStorage
    setUsername(""); // Clear the state
    navigate("/"); // Redirect to the login page
  };
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 1001 }}>
      <nav
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          backgroundColor: "#ab5c72",
          display: "flex",
        }}
      >
        <li style={{ padding: 10 }}>
          <Link to="/" style={styles.linkText}>
            <img
              src="Logo1.svg"
              width="194"
              height="50"
              alt="Programing"
              style={{ paddingTop: 5 }}
            />
          </Link>
        </li>
        <li style={{ paddingLeft: 100, paddingTop: 30 }}>
          <Link to="/" style={styles.linkText}>
            <strong>Trang chủ</strong>
          </Link>
        </li>
        <li style={{ marginTop: 10 }} className="dropdown">
          <Link to="/chuyen-muc-skincare" style={styles.linkText}>
            <strong>Chuyên mục Skincare</strong>
          </Link>
          <div className="dropdown-content">
            <Link to="/page1">Nhận biết các loại da</Link>
            <Link to="/page2">Skincare cho da mụn</Link>
            <Link to="/bai-viet-3-skincare-cho-da-dau">
              Skincare cho da dầu
            </Link>
            <Link to="/bai-viet-4-skincare-cho-da-kho">
              Skincare cho da khô
            </Link>
            <Link to="/bai-viet-5-skincare-cho-da-thuong">
              Skincare cho da thường
            </Link>
          </div>
        </li>

        <li style={{ marginTop: 10 }} className="dropdown">
          <Link to="/chuyen-muc-makeup" style={styles.linkText}>
            <strong>Chuyên mục Makeup</strong>
          </Link>
          <div className="dropdown-content">
            <Link to="/bai-viet-6-cac-buoc-trang-diem-co-ban">
              Các bước trang điểm cơ bản
            </Link>
            <Link to="/bai-viet-7-trang-diem-mat">Trang điểm mặt</Link>
            <Link to="/bai-viet-8-trang-diem-mat">Trang điểm mắt</Link>
            <Link to="/bai-viet-9-trang-diem-moi">Trang điểm môi</Link>
          </div>
        </li>

        <li style={{ marginTop: 10 }} className="dropdown">
          <Link to="/san-pham" style={styles.linkText}>
            <strong>Sản phẩm</strong>
          </Link>
          <div className="dropdown-content">
            <div className="dropdown-content11">
              <Link to="/bai-viet-13-beauty-skin">Beauty Skin</Link>
            </div>
            <div className="dropdown-content22">
              <Link to="#">Beauty Face</Link>
              <div className="dropdown-content2">
                <Link to="/bai-viet-10-beauty-face-trang-diem-mat">
                  Trang điểm mặt
                </Link>
                <Link to="/bai-viet-11-beauty-face-trang-diem-mat">
                  Trang điểm mắt
                </Link>
                <Link to="/bai-viet-12-beauty-face-trang-diem-moi">
                  Trang điểm môi
                </Link>
              </div>
            </div>
          </div>
        </li>
        <li style={{ marginTop: 10 }} className="dropdown">
          <div className="dropdown-content11">
            {username ? (
              <div>
                {" "}
                <Link style={styles.linkText}>Xin chào, {username}!</Link>
                <button onClick={Logout} style={styles.linkText}>
                  Đăng xuất
                </button>{" "}
              </div>
            ) : (
              <Link style={styles.linkText} to="/login">
                Đăng Nhập
              </Link> // If username doesn't exist, show "Login" link
            )}
          </div>
        </li>
      </nav>
    </header>
  );
}
export default Header;
