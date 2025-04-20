import React from "react";
import Header from "../component/Header";

const Skincare2 = () => {
  return (
    <div style={{ backgroundColor: "#fde2e2" }}>
      <Header />

      <main style={{ maxWidth: "90%", margin: "0 auto" }}>
        <div style={{ padding: 20 }}></div>
        <div style={{ display: "flex" }}>
          {/* Sidebar */}
          <div style={{ width: "20%", marginRight: "10px" }}>
            <ul
              style={{
                fontFamily: "NotoSerifDisplay-Condensed, serif",
                fontSize: 18,
                textAlign: "left",
                listStyle: "none",
                border: "1px solid #502d25",
                borderRadius: "10px",
                padding: "20px",
                backgroundColor: "#fff8f5",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  color: "#502d25",
                  marginBottom: 16,
                }}
              >
                Mục lục
              </p>
              {Array.from({ length: 7 }).map((_, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: "12px",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateX(5px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateX(0)")
                  }
                >
                  <a
                    style={{
                      color: "#502d25",
                      textDecoration: "none",
                      fontWeight: "500",
                    }}
                    href={`#buoc-${i + 1}`}
                  >
                    Bước {i + 1}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div style={{ width: "80%" }}>
            <img src="Picture/hình 50.jpeg" width="100%" alt="Programing" />
            <h2>Skincare cho da mụn</h2>

            {[...Array(7)].map((_, index) => {
              const steps = [
                {
                  title: "Tẩy trang",
                  img: "hình 51.jpeg",
                  content: `Dù không trang điểm nhưng sau một ngày dài, da vẫn bám bụi bẩn và tiết bã nhờn, vì vậy cần tẩy trang.`,
                },
                {
                  title: "Rửa mặt",
                  img: "hình 73.jpeg",
                  content: `Dùng sữa rửa mặt chứa BHA, AHA, Hyaluronic acid... giúp làm sạch sâu và hỗ trợ tái tạo da.`,
                },
                {
                  title: "Tẩy da chết",
                  img: "hình 82.jpeg",
                  content: `Da mụn nhẹ có thể tẩy da chết 1-2 lần/tuần để tái tạo da, da mụn nặng thì nên bỏ qua.`,
                },
                {
                  title: "Dùng Toner",
                  img: "hình 84.jpeg",
                  content: `Toner giúp cân bằng độ pH và giữ da mềm mại sau khi rửa mặt.`,
                },
                {
                  title: "Dùng sản phẩm trị mụn",
                  img: "hình 79.jpeg",
                  content: `Chọn serum hoặc kem phù hợp để trị mụn và nuôi dưỡng da hiệu quả.`,
                },
                {
                  title: "Đắp mặt nạ",
                  img: "hình 78.jpeg",
                  content: `Mặt nạ giúp da hấp thu dưỡng chất, cấp ẩm và hỗ trợ điều trị mụn.`,
                },
                {
                  title: "Dưỡng ẩm",
                  img: "hình 60.jpeg",
                  content: `Dưỡng ẩm giúp cân bằng độ ẩm, hạn chế tiết dầu và ngăn ngừa mụn.`,
                },
              ];

              const step = steps[index];

              return (
                <div key={index} id={`buoc-${index + 1}`}>
                  <h4>
                    Bước {index + 1}: {step.title}
                  </h4>
                  <img
                    style={{ width: "100%" }}
                    src={`Picture/${step.img}`}
                    alt={step.title}
                  />
                  <p>{step.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ marginTop: 40 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <div>
            <p style={{ fontSize: 25 }}>
              <strong>Giới thiệu</strong>
            </p>
            <img width="194px" height="50px" src="Logo.svg" alt="Programing" />
            <p>
              Không gian trực tuyến dành cho những ai đam mê làm đẹp. Chúng tôi
              tin rằng làm đẹp không chỉ là bề ngoài, mà còn là cách để mỗi
              người phụ nữ cảm nhận giá trị của bản thân.
            </p>
          </div>

          <div style={{ paddingLeft: 20 }}>
            <p style={{ fontSize: 25 }}>
              <strong>Liên hệ với chúng tôi</strong>
            </p>
            <div style={{ display: "flex" }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={{ height: 30, width: 30, padding: 5 }}
                  src="icon fb.png"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={{ height: 30, width: 30, padding: 5 }}
                  src="icon ig.png"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={{ height: 30, width: 30, padding: 5 }}
                  src="icon yt.png"
                  alt="YouTube"
                />
              </a>
            </div>
            <div style={{ display: "flex" }}>
              <img
                style={{ height: 30, width: 30, padding: 5 }}
                src="icon dt.png"
                alt="Phone"
              />
              <p>0987.654.321</p>
            </div>
            <div style={{ display: "flex" }}>
              <img
                style={{ height: 30, width: 30, padding: 5 }}
                src="email.png"
                alt="Email"
              />
              <p>ptttrang7070@gmail.com</p>
            </div>
          </div>

          <div style={{ paddingLeft: 30 }}>
            <p style={{ fontSize: 25 }}>
              <strong>Địa chỉ</strong>
            </p>
            <div style={{ display: "flex", paddingTop: 90 }}>
              <img
                style={{ height: 30, width: 30, padding: 5 }}
                src="diachi.png"
                alt="Địa chỉ"
              />
              <p>Trường THPT chuyên Nguyễn Chí Thanh</p>
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center" }}>
          Bản quyền © 2024 Trang web của tôi. Mọi quyền được bảo lưu.
        </p>
      </footer>
    </div>
  );
};

export default Skincare2;
