import React from "react";
import Header from "../component/Header";

const Skincare4 = () => {
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
                <a href="#buoc-3">Bước 3: Tẩy da chết</a>
              </li>
              <li>
                <a href="#buoc-4">Bước 4: Dùng Toner</a>
              </li>
              <li>
                <a href="#buoc-5">Bước 5: Đắp mặt nạ</a>
              </li>
              <li>
                <a href="#buoc-6">Bước 6: Serum cho da khô</a>
              </li>
              <li>
                <a href="#buoc-7">Bước 7: Dưỡng ẩm</a>
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
              <img src="Picture/hình 54.jpeg" width="100%" alt="Programing" />
            </div>
            <h2>Skincare cho da khô</h2>

            <div id="buoc-1">
              <h4>Bước 1: Tẩy trang</h4>
              <img
                style={{ width: "100%" }}
                src="Picture/hình 76.jpeg"
                alt="Tẩy trang"
              />
              <p>
                Tẩy trang là bước đầu tiên quan trọng nhất trong quy trình
                skincare cho da khô. Bởi lẽ, tẩy trang giúp loại bỏ sạch sẽ bụi
                bẩn, bã nhờn, dầu thừa và lớp makeup trên da, giúp làn da khô
                thoáng, sạch sẽ. Với làn da khô, bạn nên ưu tiên các sản phẩm
                tẩy trang có kết cấu dạng nước hoặc dạng dầu để sử dụng trên da.
                Đặc biệt, sử dụng các dòng nước tẩy trang có bảng thành phần
                lành tính, dịu nhẹ và an toàn với làn da cũng là cách để da khô
                không bị kích ứng, mẩn đỏ.
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
                Khi skincare cho da khô, rửa mặt là bước không thể thiếu giúp
                loại bỏ một cách triệt để bụi bẩn, bã nhờn và cặn mỹ phẩm còn
                lại trên da sau bước tẩy trang. Khi chọn sữa rửa mặt cho làn da
                khô, nên ưu tiên các thành phần lành tính, dịu nhẹ và tránh các
                sản phẩm có độ tẩy rửa cao vì sẽ làm tình trạng khô ráp trên da
                thêm trầm trọng. Các dòng sản phẩm sữa rửa mặt dành riêng cho da
                khô nên có độ pH ở mức cân bằng 5.5, vừa nhẹ nhàng làm sạch, vừa
                giữ được độ ẩm tự nhiên trên da.
              </p>
            </div>

            <div id="buoc-3">
              <h4>Bước 3: Tẩy da chết</h4>
              <img
                style={{ width: "100%" }}
                src="Picture/hình 82.jpeg"
                alt="Tẩy da chết"
              />
              <p>
                Làm sạch bằng nước tẩy trang và sữa rửa mặt là chưa đủ, nhất là
                với làn da khô. Bởi lẽ, khi rửa mặt chỉ có thể lấy đi bụi bẩn,
                dầu thừa ở trên da mà không có khả năng làm sạch tế bào chết.
                Theo thời gian, lớp tế bào chết ngày càng tích tụ khiến làn da
                trông sần sùi, kém tươi tắn.
                <br />
                Vì thế, tẩy tế bào chết là cách hữu hiệu giúp làm sạch lớp sừng,
                tế bào da chết để lỗ chân lông được sạch sẽ, thông thoáng và làm
                đều màu da của bạn. Khi tẩy tế bào chết cho da khô, nên ưu tiên
                các sản phẩm có chứa thành phần AHA và thực hiện đều đặn 1 lần
                mỗi tuần.
              </p>
            </div>

            <div id="buoc-4">
              <h4>Bước 4: Dùng Toner</h4>
              <img
                style={{ width: "100%" }}
                src="Picture/hình 84.jpeg"
                alt="Dùng Toner"
              />
              <p>
                Skincare cho da hỗn hợp thiên khô hay da khô thì đều không thể
                thiếu toner/ nước hoa hồng. Sản phẩm này có khả năng bổ sung độ
                ẩm nhanh chóng cho làn da sau bước làm sạch và tẩy tế bào chết.
                Toner giúp làn da sạch sâu, cân bằng độ pH, làm thông thoáng lỗ
                chân lông để các dưỡng chất ở bước skincare cho da khô đằng sau
                được phát huy tác dụng tốt nhất trên da.
              </p>
            </div>

            <div id="buoc-5">
              <h4>Bước 5: Đắp mặt nạ</h4>
              <img
                style={{ width: "100%" }}
                src="Picture/hình 80.jpeg"
                alt="Đắp mặt nạ"
              />
              <p>
                Có khá nhiều các loại mặt nạ như mặt nạ giấy, mặt nạ lột, mặt nạ
                rửa… trên thị trường hiện nay. Tuy nhiên, mặt nạ giấy là sản
                phẩm phù hợp nhất để bổ sung vào các bước skincare cho da khô.
                Mặt nạ giấy giúp cung cấp các dưỡng chất tức thì cho làn da mềm
                mại, căng sáng. Sử dụng mặt nạ giấy đều đặn 2-3 lần mỗi tuần sẽ
                giúp làn da khô cải thiện được tình trạng căng rát và nếp nhăn
                hữu hiệu.
              </p>
            </div>

            <div id="buoc-6">
              <h4>Bước 6: Serum cho da khô</h4>
              <img
                style={{ width: "100%" }}
                src="Picture/hình 79.jpeg"
                alt="Serum cho da khô"
              />
              <p>
                Serum với các thành phần có chứa dầu hoặc dạng tinh chất với kết
                cấu phân tầng (dầu và nước) là sự lựa chọn hoàn hảo để skincare
                cho da khô. Đối với sản phẩm serum có kết cấu phân tầng, tầng
                trên là dầu, tầng dưới là nước, khi sử dụng, cần lắc nhẹ để 2
                tầng này hoà quyện vào nhau. Các sản phẩm serum cho da khô có
                tác dụng 2 trong 1, vừa cấp ẩm, vừa phục hồi các tổn thương cũng
                như đẩy lùi các dấu hiệu lão hoá da.
              </p>
            </div>

            <div id="buoc-7">
              <h4>Bước 7: Dưỡng ẩm</h4>
              <img
                style={{ width: "100%" }}
                src="Picture/hình 74.jpeg"
                alt="Dưỡng ẩm"
              />
              <p>
                Kem dưỡng hay Xịt dưỡng ẩm là một trong những bước quan trọng
                không thể thiếu trong skincare cho da khô. Bởi lẽ, với làn da
                khô, dưỡng ẩm là cách hữu hiệu giúp duy trì làn da mịn màng,
                không bị khô rát, nứt nẻ. Trong chu trình skincare cho da hỗn
                hợp thiên khô và da khô, kem dưỡng được xem như lớp màng có khả
                năng dưỡng ẩm và khoá ẩm tối ưu cho làn da, để các dưỡng chất
                không bị bốc hơi khỏi da trong 1 đêm dài.
              </p>
            </div>

            <div id="ket-luan">
              <p>
                Thực hiện đầy đủ 7 bước skincare cho da khô đơn giản tại nhà như
                Panmela hướng dẫn trên đây là cách hoàn hảo giúp bạn lấy lại làn
                da ẩm mịn, căng sáng nhanh chóng. Ngoài ra, bạn có thể tham khảo
                thêm combo skincare cho da khô để lựa chọn được những sản phẩm
                chuyên biệt giúp chăm sóc và bảo vệ làn da khô một cách tốt nhất
                nhé.
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

export default Skincare4;
