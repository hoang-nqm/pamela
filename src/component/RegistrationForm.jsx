import React, { useState } from "react";
import { db, addDoc, collection } from "../config"; // Import cấu hình Firebase
import "./Regis.css"
const RegistrationForm = () => {
    const [formData, setFormData] = useState({
      username: "",
      numberphone: "",
      email: "",
      gender: "",
    });
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true); // Hiển thị loading khi đang lưu
  
      try {
        // Lưu dữ liệu vào Firestore
        await addDoc(collection(db, "registrations"), {
          username: formData.username,
          numberphone: formData.numberphone,
          email: formData.email,
          gender: formData.gender,
          timestamp: new Date(),
        });
  
        // Reset form sau khi lưu thành công
        setFormData({
          username: "",
          numberphone: "",
          email: "",
          gender: "",
        });
  
        alert("Đăng ký thành công!");
      } catch (error) {
        console.error("Lỗi khi lưu dữ liệu:", error);
        alert("Có lỗi xảy ra khi đăng ký.");
      } finally {
        setLoading(false); // Ẩn loading khi hoàn tất
      }
    };
  
    return (
      <div className="form-container">
        <div id="idd">
          <img
            style={{
              width: "100%",
              maxWidth: "500px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            src="form.svg"
            alt="form"
          />
        </div>
  
        <div id="dang-ki">
          <h1>Đăng ký nhận thông tin</h1>
          <form id="registrationForm" className="form-reg" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullname">Họ và tên</label>
              <input
                type="text"
                className="form-control"
                placeholder="Họ và tên"
                required
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="numberphone">Số điện thoại</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Số điện thoại"
                pattern="[0]{1}[0-9]{9}"
                minlength="10"
                maxlength="10"
                required
                name="numberphone"
                value={formData.numberphone}
                onChange={handleChange}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="your-email@gmail.com"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
  
            <div className="form-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />{" "}
                Nam
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />{" "}
                Nữ
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                />{" "}
                Khác
              </label>
            </div>
  
            <input
              id="submit"
              type="submit"
              value={loading ? "Đang đăng ký..." : "Đăng ký"}
              className="form-submit"
              disabled={loading}
            />
          </form>
        </div>
      </div>
    );
  };
export default RegistrationForm;
