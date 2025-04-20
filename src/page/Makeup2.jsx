import React from "react";
import Header from "../component/Header";
import "./Makeup.css";

const Makeup2 = () => {
  const MucLuc = () => (
    <div id="slide-bar">
      <ul
        id="muc-luc"
        style={{
          fontFamily: "NotoSerifDisplay-Condensed",
          fontSize: "20px",
          textAlign: "left",
        }}
      >
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
          <a href="#buoc-1">Kem chống nắng</a>
        </li>
        <li>
          <a href="#buoc-2">Kem lót</a>
        </li>
        <li>
          <a href="#buoc-3">Kem nền</a>
        </li>
        <li>
          <a href="#buoc-4">Che khuyết điểm</a>
        </li>
        <li>
          <a href="#buoc-5">Phấn phủ</a>
        </li>
        <li>
          <a href="#buoc-6">Tạo khối</a>
        </li>
        <li>
          <a href="#buoc-7">Phấn má</a>
        </li>
      </ul>
    </div>
  );

  const Buoc = ({ id, title, imageSrc, children }) => (
    <div id={id}>
      <h4>{title}</h4>
      <img style={{ width: "100%" }} src={imageSrc} alt={title} />
      <p>{children}</p>
    </div>
  );
  return (
    <div style={{ backgroundColor: "#fde2e2" }}>
      <Header />

      <main>
        <div style={{ padding: "20px" }}>
          <br />
        </div>

        <div id="wrapper">
          <MucLuc />

          <div id="noi-dung">
            <div>
              <img src="Picture/hình 21.jpeg" width="100%" alt="Programing" />
            </div>
            <h2>Trang điểm mặt</h2>

            <Buoc
              id="buoc-1"
              title="Kem chống nắng"
              imageSrc="https://p16-sign-sg.lemon8cdn.com/tos-alisg-v-a3e477-sg/osAkQEpIzuNomC1QghtFENAA8fKjAyBeYN12Uk~tplv-sdweummd6v-shrink:640:0:q50.webp?lk3s=66c60501&source=seo_middle_feed_list&x-expires=1765195200&x-signature=M5x0Bq1ARYlY2s1HW70SELpN%2BwY%3D"
            >
              Kem chống nắng là sản phẩm bảo vệ da khỏi tác hại của tia UV trong
              ánh nắng mặt trời (gồm tia UVA, UVB và UVC) nhờ khả năng hấp thụ
              hoặc phản xạ các bức xạ tia UV.
              <ul>
                <li>Bảo vệ da</li>
                <li>Làm chậm lão hóa da</li>
                <li>Giảm tình trạng cháy nắng, sạm da</li>
                <li>Ngăn ngừa ung thư da</li>
                <li>Có thể thay thế kem nền</li>
              </ul>
              Phân loại:
              <ul>
                <li>
                  <strong>Kem chống nắng vật lý:</strong>
                  <ul>
                    <li>
                      Ưu điểm: Sản phẩm phát huy hiệu quả ngay khi thoa lên da,
                      ngăn chặn tác động của tia UVA, UVB, an toàn cho da nhạy
                      cảm.
                    </li>
                    <li>
                      Nhược điểm: Chất kem đặc, dễ bị rửa trôi khi tiếp xúc với
                      nước hoặc da tiết mồ hôi.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Kem chống nắng hóa học:</strong>
                  <ul>
                    <li>
                      Ưu điểm: Thấm nhanh, ít gây nhờn, dễ tiệp màu da, tiết
                      kiệm.
                    </li>
                    <li>
                      Nhược điểm: Có thể gây kích ứng da, phải bôi lại liên tục.
                    </li>
                  </ul>
                </li>
              </ul>
            </Buoc>

            <Buoc id="buoc-2" title="Kem lót" imageSrc="Picture/hình 63.jpeg">
              Kem lót (hay còn gọi là primer/base) là bước đầu tiên khi makeup
              nền. Kem lót trang điểm giúp tạo một lớp màng mỏng cấp ẩm và bảo
              vệ da.
              <ul>
                <li>
                  <strong>Kem lót dạng lỏng (liquid):</strong> Thường trong suốt
                  và dễ tán, phù hợp cho da ít khuyết điểm.
                </li>
                <li>
                  <strong>Kem lót dạng kem (cream):</strong> Che phủ tốt, phù
                  hợp với da dễ tổn thương, tuy nhiên dễ bị vón cục.
                </li>
                <li>
                  <strong>Kem lót dạng xịt (spray):</strong> Tạo lớp base bền,
                  giúp kem nền lâu trôi.
                </li>
              </ul>
            </Buoc>

            <Buoc id="buoc-3" title="Kem nền" imageSrc="Picture/hình 64.jpeg">
              Kem nền (foundation) tạo lớp nền mịn màng cho da, giúp che khuyết
              điểm và làm đều màu da.
              <ul>
                <li>
                  <strong>Kem nền dạng lỏng (liquid):</strong> Phổ biến, dễ
                  thấm, phù hợp cho da ít khuyết điểm.
                </li>
                <li>
                  <strong>Kem nền dạng kem:</strong> Phù hợp cho da khô, cấp ẩm
                  tốt.
                </li>
                <li>
                  <strong>Phấn nền:</strong> Kiềm dầu tốt, thích hợp cho da dầu
                  và nhạy cảm.
                </li>
                <li>
                  <strong>Kem nền dạng serum:</strong> Dưỡng da kết hợp với
                  trang điểm, phù hợp cho mọi loại da.
                </li>
                <li>
                  <strong>Kem nền gốc nước:</strong> Thích hợp cho da mụn, giúp
                  giữ ẩm và không gây bít tắc lỗ chân lông.
                </li>
              </ul>
            </Buoc>

            <Buoc
              id="buoc-4"
              title="Che khuyết điểm"
              imageSrc="Picture/hình 68.jpeg"
            >
              Kem che khuyết điểm giúp che các vết thâm, mụn, sẹo trên da.
              <ul>
                <li>
                  <strong>Dạng thỏi:</strong> Độ che phủ cao, phù hợp với các
                  khuyết điểm nhỏ.
                </li>
                <li>
                  <strong>Dạng lỏng:</strong> Che phủ trung bình, thích hợp cho
                  vùng da rộng như quầng thâm mắt.
                </li>
                <li>
                  <strong>Dạng bút:</strong> Che phủ thấp, thích hợp cho những
                  khuyết điểm nhỏ hoặc dùng làm highlight.
                </li>
              </ul>
            </Buoc>

            <Buoc id="buoc-5" title="Phấn phủ" imageSrc="Picture/hình 69.jpeg">
              Phấn phủ tạo lớp nền mịn màng, giúp lớp trang điểm lâu trôi và tự
              nhiên.
              <ul>
                <li>
                  <strong>Phấn phủ dạng bột:</strong> Giúp thẩm thấu vào da, tạo
                  lớp trang điểm mỏng nhẹ, tự nhiên.
                </li>
                <li>
                  <strong>Phấn phủ dạng nén:</strong> Phấn nén tạo lớp mịn và
                  phẳng, phù hợp khi cần dặm lại lớp trang điểm.
                </li>
              </ul>
            </Buoc>

            <Buoc
              id="buoc-6"
              title="Tạo khối"
              imageSrc="https://p16-sign-sg.lemon8cdn.com/tos-alisg-v-a3e477-sg/o07ctgCfkIQA9ABFBC7eNHJDQ3nAJyEkOgbqJi~tplv-sdweummd6v-shrink:640:0:q50.webp?lk3s=66c60501&source=seo_middle_feed_list&x-expires=1765195200&x-signature=QyQHh%2B7ITXwG7MGaqrcqVGBhtSM%3D"
            >
              Tạo khối giúp tạo đường nét cho gương mặt, làm thon gọn hoặc tạo
              điểm nhấn.
              <ul>
                <li>
                  <strong>Tạo khối (contour):</strong> Sử dụng phấn tối để thu
                  gọn các khuôn mặt.
                </li>
                <li>
                  <strong>Highlight:</strong> Dùng để làm sáng các điểm nhấn
                  trên khuôn mặt như sống mũi, cằm, trán.
                </li>
                <li>
                  <strong>Bronzer:</strong> Tạo làn da rám nắng, phù hợp với làn
                  da khỏe khoắn.
                </li>
              </ul>
            </Buoc>

            <Buoc id="buoc-7" title="Má hồng" imageSrc="Picture/hình 24.jpeg">
              Má hồng giúp tạo vẻ tươi tắn cho gương mặt.
              <ul>
                <li>
                  <strong>Da trắng sáng:</strong> Màu đỏ hồng là lựa chọn lý
                  tưởng.
                </li>
                <li>
                  <strong>Da trung bình:</strong> Màu cam vàng tạo nét tươi tắn.
                </li>
                <li>
                  <strong>Da thiên vàng:</strong> Hồng sáng hoặc cam đào phù
                  hợp.
                </li>
                <li>
                  <strong>Da sẫm màu:</strong> Màu cam đất giúp nổi bật vẻ cá
                  tính.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Da khô:</strong> Má hồng dạng kem, lỏng dễ thẩm thấu
                  và không làm lộ khuyết điểm.
                </li>
                <li>
                  <strong>Da dầu và hỗn hợp thiên dầu:</strong> Phấn má hồng
                  giúp kiềm dầu và bền màu.
                </li>
              </ul>
            </Buoc>
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

export default Makeup2;
