import React from "react";
import Header from "../component/Header";
import "./Makeup.css";

const Makeup1 = () => {
  const stepsData = [
    {
      id: "buoc-1",
      title: "Thoa kem lót",
      imageSrc: "Picture/hình 63.jpeg",
      description: `Kem lót là một bước quan trọng không thể thiếu trong quy trình trang điểm. Nó giúp làm mịn da, thu nhỏ lỗ chân lông và tạo lớp nền hoàn hảo để các lớp trang điểm sau đó bám lâu và đều màu hơn.`,
    },
    {
      id: "buoc-2",
      title: "Thoa kem nền",
      imageSrc: "Picture/hình 64.jpeg",
      description: `Kem nền đóng vai trò quan trọng nhất trong quá trình trang điểm cơ bản. Tùy vào loại da mà bạn chọn kem nền phù hợp như dạng lỏng, dạng mousse, hoặc dạng cushion.`,
    },
    {
      id: "buoc-3",
      title: "Che khuyết điểm",
      imageSrc: "Picture/hình 65.jpeg",
      description: `Che khuyết điểm giúp bạn giấu đi các vết thâm, mụn, quầng thâm mắt và các vùng da không đều màu.`,
    },
    {
      id: "buoc-4",
      title: "Phủ phấn",
      imageSrc: "Picture/hình 66.jpeg",
      description: `Lớp phấn phủ giúp cố định lớp nền và kiềm dầu, giúp lớp trang điểm lâu trôi hơn.`,
    },
  ];

  return (
    <div style={{ backgroundColor: "#fde2e2" }}>
      <Header />

      <main>
        <div id="wrapper">
          {/* Sidebar */}
          <div className="slide-bar">
            <ul id="muc-luc">
              <p>
                <strong>Mục lục</strong>
              </p>
              {stepsData.map((step, index) => (
                <li key={step.id}>
                  <a href={`#${step.id}`}>{`Bước ${index + 1}: ${
                    step.title
                  }`}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nội dung */}
          <div id="noi-dung">
            <div>
              <img
                src="Picture/hình 21.jpeg"
                width="100%"
                alt="Makeup overview"
              />
            </div>
            <h2>Các bước makeup cơ bản</h2>

            {stepsData.map((step) => (
              <div key={step.id} id={step.id}>
                <h4>{step.title}</h4>
                <img src={step.imageSrc} width="100%" alt={step.title} />
                <p>{step.description}</p>
              </div>
            ))}
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

export default Makeup1;
