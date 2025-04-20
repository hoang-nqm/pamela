import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Skincare1 = () => {
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
    <div style={{ backgroundColor: "#fde2e2" }}>
      <style>
        {`
        html {
      scroll-behavior: smooth;
    }
          #banner { width: 100%; }
          .cursor {
            position: fixed;
            width: 30px;
            height: 30px;
            border: 1px solid salmon;
            border-radius: 50%;
            transition: 0.1s;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 1000;
          }
          .cursor2 {
            position: fixed;
            width: 8px;
            height: 8px;
            background: #edb1b3;
            border-radius: 50%;
            transition: 0.15s;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 1000;
          }
        `}
      </style>

      <img id="banner" src="Header.svg" alt="Programing" />
      <a href="#banner">
        <p
          style={{
            fontSize: 25,
            backgroundColor: "#f8eeec",
            position: "fixed",
            top: "85%",
            left: "95%",
          }}
        >
          💅
        </p>
      </a>

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

      <main style={{ maxWidth: "90%", margin: "0 auto" }}>
        <div style={{ display: "flex" }}>
          <aside style={{ width: "20%" }}>
            <ul
              style={{
                listStyleType: "none",
                border: "1px solid #502d25",
                backgroundColor: "#ffffff",
                opacity: 0.9,
                padding: "20px",
                position: "sticky",
                top: 100,
                fontFamily: "Noto Serif, serif",
                fontSize: "18px",
                color: "#502d25",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <li
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                📚 Mục lục
              </li>
              <li style={{ margin: "8px 0" }}>
                <a
                  href="#phan-vung"
                  style={{ textDecoration: "none", color: "#502d25" }}
                >
                  Phân vùng và cách nhận biết
                </a>
              </li>
              <li style={{ margin: "8px 0" }}>
                <a
                  href="#da-thuong"
                  style={{ textDecoration: "none", color: "#502d25" }}
                >
                  Da thường
                </a>
              </li>
              <li style={{ margin: "8px 0" }}>
                <a
                  href="#da-dau"
                  style={{ textDecoration: "none", color: "#502d25" }}
                >
                  Da dầu
                </a>
              </li>
              <li style={{ margin: "8px 0" }}>
                <a
                  href="#da-kho"
                  style={{ textDecoration: "none", color: "#502d25" }}
                >
                  Da khô
                </a>
              </li>
              <li style={{ margin: "8px 0" }}>
                <a
                  href="#da-hon-hop"
                  style={{ textDecoration: "none", color: "#502d25" }}
                >
                  Da hỗn hợp
                </a>
              </li>
              <li style={{ margin: "8px 0" }}>
                <a
                  href="#da-nhay-cam"
                  style={{ textDecoration: "none", color: "#502d25" }}
                >
                  Da nhạy cảm
                </a>
              </li>
            </ul>
          </aside>

          <section
            style={{
              width: "79%",
              paddingLeft: 10,
              paddingRight: 5,
              fontSize: 20,
              maxWidth: "65%",
              margin: "0 auto",
              textAlign: "justify",
            }}
          >
            <div>
              <img src="Picture/hình 15.png" width="100%" alt="Programing" />
            </div>
            <div id="phan-vung">
              <h2>Nhận biết các loại da</h2>
              <h4>Phân vùng da trên khuôn mặt</h4>
              <p>Da mặt chúng ta tạm thời chia làm 2 phần:</p>
              <div style={{ display: "flex" }}>
                <div>
                  <img
                    src="da chữ t.jpeg"
                    height="350"
                    style={{ padding: 10 }}
                    alt="Vùng chữ T"
                  />
                  <p style={{ textAlign: "center" }}>
                    Vùng chữ T bao gồm trán – mũi – cằm: đây là vùng hay tiết ra
                    dầu, bã nhờn dễ tắt lỗ chân lông gây mụn, sưng viêm
                  </p>
                </div>
                <div>
                  <img
                    src="da chữ u.jpg"
                    height="350"
                    width="320"
                    style={{ padding: 10 }}
                    alt="Vùng chữ U"
                  />
                  <p style={{ textAlign: "center" }}>
                    Vùng chữ U bao gồm 2 má.
                  </p>
                </div>
              </div>
              <h4>Cách nhận biết các loại da</h4>
              <p>
                Buổi sáng thức dậy...
                <br />
                T dầu nhiều – U dầu nhiều: đích thị là da dầu.
                <br />
                T dầu nhiều – U dầu ít/ khô: da hỗn hợp thiên dầu.
                <br />
                T dầu ít – U khô: da hỗn hợp thiên khô.
                <br />T khô – U khô: da khô.
              </p>
            </div>
            <div>
              <div id="da-thuong">
                <h2></h2>
                <h4>Nhận biết da thường</h4>
                <img
                  style={{ width: "100%" }}
                  src="https://i.pinimg.com/474x/4c/2e/9e/4c2e9e9e47c10eeb3a0aa4f1450dabd3.jpg"
                  alt="Da thường"
                />
              </div>

              <div id="da-dau">
                <h2></h2>
                <h4>Nhận biết da dầu</h4>
                <img
                  style={{ width: "100%" }}
                  src="https://i.pinimg.com/474x/26/ad/21/26ad215abd7bfdb5b9d91a0b33b1d6ec.jpg"
                  alt="Da dầu"
                />
              </div>

              <div id="da-kho">
                <h2></h2>
                <h4>Nhận biết da khô</h4>
                <img
                  style={{ width: "100%" }}
                  src="https://i.pinimg.com/474x/f7/5a/3b/f75a3b4ccf8d4409017b30c5fe71fd1b.jpg"
                  alt="Da khô"
                />
              </div>

              <div id="da-hon-hop">
                <h2></h2>
                <h4>Nhận biết da hỗn hợp</h4>
                <img
                  style={{ width: "100%" }}
                  src="https://i.pinimg.com/474x/b8/06/1e/b8061edf8cb46ae91292e753530cabba.jpg"
                  alt="Da hỗn hợp 1"
                />
                <img
                  style={{ width: "100%" }}
                  src="https://i.pinimg.com/474x/63/46/dd/6346dd107c5d03bce15b79baf1d250b4.jpg"
                  alt="Da hỗn hợp 2"
                />
              </div>

              <div id="da-nhay-cam">
                <h2></h2>
                <h4>Nhận biết da nhạy cảm</h4>
                <img
                  style={{ width: "100%" }}
                  src="https://i.pinimg.com/474x/ff/98/e1/ff98e1ac3c9836400275d1fecf68aa7f.jpg"
                  alt="Da nhạy cảm"
                />
              </div>

              <div id="ket-luan">
                <p>
                  Như vậy là mình đã chia sẻ cho bạn các kiến thức về phân biệt
                  loại da, để mà đi sâu hơn về da thì mình sẽ hẹn bạn ở một bài
                  khác để phân tích thật là kỹ tất cả loại da và các tình trạng
                  cho da luôn.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <hr
        style={{
          color: "#502d25",
          background: "#502d25",
          border: 0,
          height: 1,
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <a
            key={num}
            style={{
              padding: 10,
              backgroundColor: num === 1 ? "#f2c4c4" : undefined,
              textDecoration: "none",
              color: "#502d25",
            }}
            href={`Bài viết ${num} - Skincare.html`}
          >
            {num}
          </a>
        ))}
      </div>

      <footer style={{ backgroundColor: "#fceff3", padding: 30 }}>
        <div style={{ display: "flex" }}>
          <div>
            <p style={{ fontSize: 25 }}>
              <strong>Giới thiệu</strong>
            </p>
            <img width={194} height={50} src="Logo.svg" alt="Programing" />
            <p>Không gian trực tuyến dành cho những ai đam mê làm đẹp...</p>
          </div>
          <div style={{ paddingLeft: 20 }}>
            <p style={{ fontSize: 25 }}>
              <strong>Liên hệ</strong>
            </p>
            <div style={{ display: "flex" }}>{/* Social icons */}</div>
            <div style={{ display: "flex" }}>
              <img
                src="icon dt.png"
                style={{ height: 30, width: 30, padding: 5 }}
                alt="phone"
              />
              <p>0987.654.321</p>
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center" }}>
          Bản quyền © 2024 Trang web của tôi
        </p>
      </footer>

      <div className="cursor"></div>
      <div className="cursor2"></div>

      <script>
        {`
          document.addEventListener('mousemove', function(e) {
            const cursor = document.querySelector('.cursor');
            const cursor2 = document.querySelector('.cursor2');
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursor2.style.left = e.clientX + 'px';
            cursor2.style.top = e.clientY + 'px';
          });
        `}
      </script>
    </div>
  );
};

export default Skincare1;
