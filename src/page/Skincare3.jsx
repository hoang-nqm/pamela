import React from "react";
import Header from "../component/Header";

const Skincare3 = () => {
  return (
    <div style={{ backgroundColor: "#fde2e2" }}>
      <Header />

      <main style={{ padding: "20px" }}>
        <div style={{ padding: "20px" }}>
          <br />
        </div>

        <div id="wrapper" style={{ display: "flex" }}>
          <div id="slide-bar">
            <ul id="muc-luc">
              <p
                style={{
                  fontFamily: "NotoSerifDisplay-Condensed",
                  fontSize: "25px",
                  paddingBottom: "-10px",
                }}
              >
                <strong>Mục lục</strong>
              </p>
              <li>
                <a href="#buoc-1">Bước 1: Tẩy trang</a>
              </li>
              <li>
                <a href="#buoc-2">Bước 2: Rửa mặt</a>
              </li>
              <li>
                <a href="#buoc-3">Bước 3: Dùng Toner</a>
              </li>
              <li>
                <a href="#buoc-4">Bước 4: Dưỡng ẩm</a>
              </li>
              <br />
            </ul>
          </div>

          <div
            id="noi-dung"
            style={{
              border: "0px solid #502d25",
              paddingRight: "5px",
              paddingLeft: "10px",
              width: "79%",
              fontSize: "20px",
              maxWidth: "65%",
              margin: "0px auto",
              textAlign: "justify",
            }}
          >
            <div>
              <img src="Picture/hình 55.jpeg" width="100%" alt="Programing" />
            </div>
            <h2>Skincare cho da dầu</h2>

            <div id="buoc-1">
              <h4>Bước 1: Tẩy trang</h4>
              <img
                style={{ width: "100%" }}
                src="Picture/hình 76.jpeg"
                alt="Tẩy trang"
              />
              <p>
                Đây là bước cực kỳ quan trọng trong tất cả các bước skincare cho
                da dầu. Bởi vì nếu tẩy trang không đúng cách sẽ khiến làn da của
                bạn không sạch, đối với người đang bị mụn viêm sẽ khiến tình
                trạng viêm nhiễm nặng hơn. Để tẩy trang sạch bạn cần chọn cho
                mình sản phẩm phù hợp với làn da dầu. Hiện nay trên thị trường
                có nhiều sản phẩm tẩy trang với nhiều kết cấu khác nhau, tùy vào
                từng sở thích của từng người mà lựa chọn sản phẩm thích hợp.
              </p>
            </div>

            <div id="buoc-2">
              <h4>Bước 2: Rửa mặt</h4>
              <img
                style={{ width: "100%" }}
                src="Picture/hình 73.jpeg"
                alt="Rửa mặt"
              />
              <p>
                Sau bước làm sạch da bằng nước tẩy trang thì bạn cũng cần thêm
                bước rửa mặt với sữa rửa mặt thích hợp, để vô hiệu sạch lớp bụi
                bẩn còn sót lại trên da. Sữa rửa mặt dành cho da dầu nên chọn
                những mẫu sản phẩm có độ pH từ 5.5, năng lực lạm sạch dịu nhẹ,
                không gây kích ứng và trấn áp dầu tốt để hạn chế thực trạng mụn
                trên da.
              </p>
            </div>

            <div id="buoc-3">
              <h4>Bước 3: Dùng Toner</h4>
              <img
                style={{ width: "100%" }}
                src="Picture/hình 74.jpeg"
                alt="Dùng Toner"
              />
              <p>
                Sau bước rửa mặt thì làn da của bạn đã bị mất đi tương đối nhiệt
                độ, chính cho nên vì thế sẽ thật thiếu sót nếu không cấp ẩm ngay
                cho da bằng nước hoa hồng / toner. Không chỉ có tính năng dưỡng
                ẩm mà nước hoa hoa hồng còn có công dụng se khít lỗ chân lông
                cho da dầu hiệu suất cao. Hơn nữa nước hoa hồng / toner còn có
                năng lực kiềm dầu, hạn chế da bị xỉn màu.
              </p>
            </div>

            <div id="buoc-4">
              <h4>Bước 4: Dưỡng ẩm</h4>
              <img
                style={{ width: "100%" }}
                src="Picture/hình 85.jpeg"
                alt="Dưỡng ẩm"
              />
              <p>
                Phần lớn nguyên do khiến làn da dễ bị dầu là do cấp ẩm cho da
                không đủ. Chính vì thế bạn cần phải bổ trợ thêm bước dưỡng da
                với kem dưỡng ẩm để có được làn da mịn màng, căng mướt. Một làn
                da được cấp ẩm tốt sẽ tránh khỏi các tín hiệu lão hóa như nếp
                nhăn, tàn nhan.
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

export default Skincare3;
