import React from "react";
import Header from "../component/Header";
import "./Skincare5.css";

const Skincare5 = () => {
  return (
    <div style={{ backgroundColor: "#fde2e2" }}>
      <Header />

      <main>
        <div style={{ padding: "20px" }}>
          <br />
        </div>

        <div id="wrapper">
          <div id="slide-bar">
            <ul id="muc-luc">
              <p>
                <strong>Mục lục</strong>
              </p>
              <li>
                <a href="#buoc-1">Bước 1: Rửa mặt</a>
              </li>
              <li>
                <a href="#buoc-2">Bước 2: Dùng Toner</a>
              </li>
              <li>
                <a href="#buoc-3">Bước 3: Serum cấp ẩm cho da</a>
              </li>
              <li>
                <a href="#buoc-4">Bước 4: Dùng kem dưỡng mắt</a>
              </li>
              <li>
                <a href="#buoc-5">Bước 5: Dưỡng ẩm</a>
              </li>
              <li>
                <a href="#buoc-6">Các bước chăm sóc da không bắt buộc</a>
              </li>
            </ul>
          </div>
          <div id="noi-dung">
            <div>
              <img src="Picture/hình 56.jpeg" alt="Programing" />
            </div>
            <h2>Skincare cho da thường</h2>

            <div id="buoc-1">
              <h4>Bước 1: Rửa mặt</h4>
              <img src="Picture/hình 86.jpeg" alt="Rửa mặt" />
              <p>
                Dùng sữa rửa mặt dịu nhẹ để loại bỏ tạp chất: Bạn nên làm sạch
                da 2 lần mỗi ngày với sữa rửa mặt tạo bọt dịu nhẹ để duy trì làn
                da khỏe đẹp và cân bằng.
              </p>
            </div>

            <div id="buoc-2">
              <h4>Bước 2: Dùng Toner</h4>
              <img src="Picture/hình 75.jpeg" alt="Dùng Toner" />
              <p>
                Dùng toner/nước hoa hồng/toner pad dịu nhẹ để cân bằng ẩm và độ
                pH trên da: Sử dụng nước hoa hồng vào lúc nào? Bạn nên sử dụng
                toner sau khi rửa mặt để làm sạch hết cặn bẩn còn sót lại. Cho
                toner ra bông tẩy trang, sau đó lau lên da mặt để tinh chỉnh kết
                cầu bề mặt, đảm bảo da hấp thụ dưỡng chất tốt hơn ở các bước
                skincare tiếp theo.
              </p>
            </div>

            {/* Các bước skincare tiếp theo */}
            {/* Lặp lại cách làm cho các bước còn lại như trong các bước trước */}

            <div id="ket-luan">
              <p>
                Trên đây là các thông tin chia sẻ về da thường, cách nhận biết
                và chăm sóc da thường hiệu quả với quy trình skincare chuẩn khoa
                học. Hy vọng với những chia sẻ này, bạn đã có thêm nhiều gợi ý
                hữu ích để duy trì làn da luôn khoẻ đẹp.
              </p>
            </div>
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

export default Skincare5;
