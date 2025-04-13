import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Page2 = () => {
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
      <header>
        <img id="banner" src="Header.svg" alt="Programing" style={{ width: "100%" }} />
        <a href="#banner">
          <p style={{ fontSize: 25, backgroundColor: "#f8eeec", position: "fixed", top: "85%", left: "95%" }}>
            &#128285;
          </p>
        </a>
        <nav style={{ backgroundColor: "#ab5c72", display: "flex", listStyleType: "none", margin: 0, padding: 0 }}>
          <li style={{ padding: 10 }}>
            <a href="Trang chủ.html">
              <img src="Logo1.svg" width="194" height="50" alt="Programing" style={{ paddingTop: 5 }} />
            </a>
          </li>
          <li style={{ marginTop: 10 }} className="dropdown">
            <Link to="/chuyen-muc-skincare" style={styles.linkText}>
              <strong>Chuyên mục Skincare</strong>
            </Link>
            <div className="dropdown-content">
              <Link to="/page1">
                Nhận biết các loại da
              </Link>
              <Link to="/page2">
                Skincare cho da mụn
              </Link>
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

          <li style={{marginTop:10}} className="dropdown">
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

          <li style={{marginTop:10}}  className="dropdown">
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
          <li style={{marginTop:10}} className="dropdown">
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
        <div style={{ padding: 20 }}></div>
        <div style={{ display: "flex" }}>
          <aside style={{ width: "20%" }}>
            <ul style={{ fontFamily: "NotoSerifDisplay-Condensed", fontSize: 20, listStyleType: "none", border: "1px solid #502d25", backgroundColor: "#ffffff", opacity: 0.7, paddingLeft: 20, position: "sticky", top: 20 }}>
              <p style={{ fontSize: 25 }}><strong>Mục lục</strong></p>
              {[...Array(7)].map((_, i) => (
                <li key={i}>
                  <a href={`#buoc-${i + 1}`}>Bước {i + 1}</a>
                </li>
              ))}
            </ul>
          </aside>

          <section style={{ width: "79%", fontSize: 20, maxWidth: "65%", margin: "0 auto", textAlign: "justify", paddingLeft: 10, paddingRight: 5 }}>
            <div><img src="Picture/hình 50.jpeg" width="100%" alt="Programing" /></div>
            <h2>Skincare cho da mụn</h2>
            {[
              {
                id: 1,
                title: "Tẩy trang",
                img: "Picture/hình 51.jpeg",
                text: "..."
              },
              {
                id: 2,
                title: "Rửa mặt",
                img: "Picture/hình 73.jpeg",
                text: "..."
              },
              // Add other steps similarly...
            ].map(step => (
              <div id={`buoc-${step.id}`} key={step.id}>
                <h4>Bước {step.id}: {step.title}</h4>
                <img style={{ width: "100%" }} src={step.img} alt={step.title} />
                <p>{step.text}</p>
              </div>
            ))}
          </section>
        </div>
      </main>

      <hr />
      <div style={{ textAlign: "center" }}>
        {[1, 2, 3, 4, 5].map(i => (
          <a
            key={i}
            style={{ padding: 10, backgroundColor: i === 2 ? "#f2c4c4" : "transparent" }}
            href={`Bài viết ${i} - Skincare cho da ${i === 1 ? "mụn" : "dầu"}.html`}
          >
            {i}
          </a>
        ))}
      </div>

      <footer>
        <div style={{ display: "flex", justifyContent: "space-around", padding: 20 }}>
          <div>
            <p style={{ fontSize: 25 }}><strong>Giới thiệu</strong></p>
            <img width="194" height="50" src="Logo.svg" alt="Programing" />
            <p>Không gian trực tuyến dành cho những ai đam mê làm đẹp...</p>
          </div>
          <div>
            <p style={{ fontSize: 25 }}><strong>Liên hệ với chúng tôi</strong></p>
            <div style={{ display: "flex" }}>
              {['facebook', 'instagram', 'youtube'].map((net, i) => (
                <a href={`https://${net}.com`} target="_blank" key={i}>
                  <img style={{ height: 30, width: 30, padding: 5 }} src={`icon ${net.slice(0, 2)}.png`} alt={net} />
                </a>
              ))}
            </div>
            <div style={{ display: "flex" }}>
              <img style={{ height: 30, width: 30, padding: 5 }} src="icon dt.png" alt="Phone" />
              <p>0987.654.321</p>
            </div>
            <div style={{ display: "flex" }}>
              <img style={{ height: 30, width: 30, padding: 5 }} src="email.png" alt="Email" />
              <p>ptttrang7070@gmail.com</p>
            </div>
          </div>
          <div>
            <p style={{ fontSize: 25 }}><strong>Địa chỉ</strong></p>
            <div style={{ display: "flex", paddingTop: 90 }}>
              <img style={{ height: 30, width: 30, padding: 5 }} src="diachi.png" alt="Địa chỉ" />
              <p>Trường THPT chuyên Nguyễn Chí Thanh</p>
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center" }}>Bản quyền © 2024 Trang web của tôi. Mọi quyền được bảo lưu.</p>
      </footer>
    </div>
  );
};

export default Page2;