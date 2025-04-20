// src/Home.js
import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import { Link, useNavigate } from "react-router-dom";
import DropdownMenu from "../component/DropdownMenu";
import Rating from "../component/Rating";
import RegistrationForm from "../component/RegistrationForm";

// Define styles for the component
const styles = {
  header: {
    width: "100%",
  },
  logoImage: {
    paddingTop: "5px",
  },
  linkText: {
    fontFamily: "NotoSerifDisplay-Condensed",
    color: "#ab5c72",
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
    padding: "0px 200px",
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

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    new Typed(".auto-type", {
      strings: ["ABOUT US", "VỀ CHÚNG TÔI"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });
  }, []);
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
    <div className="home">
      <header>
        <video id="banner" style={styles.header} autoPlay loop>
          <source src="PANMELA Beauty.mp4" type="video/mp4" />
        </video>
        <div>
          <ul id="menu">
            <li>
              <a id="logo" href="Trang chủ.html">
                <img
                  src="Logo.svg"
                  width="194px"
                  height="50px"
                  alt="Programing"
                  style={styles.logoImage}
                />
              </a>
            </li>
            <li className="dropdown" style={{ paddingLeft: "100px" }}>
              <Link to="/" style={styles.linkText}>
                <strong>Trang chủ</strong>
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/chuyen-muc-skincare" style={styles.linkText}>
                <strong>Chuyên mục Skincare</strong>
              </Link>
              <div className="dropdown-content">
                <Link to="/skincare1">Nhận biết các loại da</Link>
                <Link to="/skincare2">Skincare cho da mụn</Link>
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

            <li className="dropdown">
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

            <li className="dropdown">
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
            <li className="dropdown">
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
          </ul>
        </div>
      </header>

      <main>
        <div
          className="container"
          style={{
            width: "100%",
            fontFamily: "NotoSerifDisplay-Condensed",
            fontSize: "25px",
            color: "#502d25",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>
            <span className="auto-type"></span>
          </h1>
        </div>

        <div id="giới thiệu" style={styles.introContent}>
          <div style={styles.introText} id="text">
            <p>
              {" "}
              Chào mừng bạn đến với{" "}
              <mark style={{ backgroundColor: "#edb1b3" }}>Panmela Beauty</mark>
              , không gian trực tuyến dành cho những ai đam mê làm đẹp. Đây là
              nơi bạn có thể khám phá các bí quyết chăm sóc da, trang điểm tự
              nhiên, và cập nhật xu hướng mỹ phẩm mới nhất. Chúng tôi tin rằng
              làm đẹp không chỉ là ngoại hình, mà còn là cách nuôi dưỡng sự tự
              tin và niềm vui trong cuộc sống. Chúng tôi tin rằng làm đẹp không
              chỉ là bề ngoài, mà còn là cách để mỗi người phụ nữ cảm nhận giá
              trị của bản thân, nuôi dưỡng sự tự tin và niềm vui trong cuộc
              sống. Với các bài viết chi tiết, dễ hiểu, cùng những gợi ý về sản
              phẩm chất lượng,{" "}
              <mark style={{ backgroundColor: "#edb1b3" }}>Panmela Beauty</mark>{" "}
              sẽ là cẩm nang không thể thiếu cho mọi cô nàng hiện đại. Dù bạn là
              người mới bắt đầu học cách chăm sóc bản thân hay đã là một chuyên
              gia làm đẹp, chắc chắn bạn sẽ tìm thấy cho mình những bí quyết phù
              hợp để tỏa sáng theo cách riêng. Hãy để chúng tôi cùng bạn trên
              hành trình khám phá và yêu thương chính mình qua từng thói quen
              làm đẹp mỗi ngày!
            </p>
          </div>
          <div style={{ paddingRight: 300 }} id="content">
            <img
              src="Picture/hình 1.jpg"
              alt="Beauty"
              style={styles.introImage}
            />
          </div>
        </div>
      </main>
      <RegistrationForm />
      {username && <Rating username={username} />}
      <footer>
        <img
          style={{ width: "100%" }}
          className="Banner"
          src="Footer.svg"
          alt="Programing"
        />
        <p style={styles.footer}>
          Bản quyền © 2024 Trang web của tôi. Mọi quyền được bảo lưu.
        </p>
      </footer>
    </div>
  );
}

export default Home;
