// component/Rating.js
import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  setDoc,
  doc,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../config";

const Rating = ({ username }) => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại


  const checkExistingRating = async () => {
    const q = query(
      collection(db, "ratings"),
      where("username", "==", username)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0].data();
      setRating(doc.rating);
      setComment(doc.comment);
      setSubmitted(true);
    }
  };

  const fetchReviews = async () => {
    const q = query(
      collection(db, "ratings"),
      orderBy("timestamp", "desc")
    );
    const querySnapshot = await getDocs(q);
    const reviewsList = querySnapshot.docs.map((doc) => doc.data());
    setReviews(reviewsList); // Lưu các đánh giá vào state
  };

  useEffect(() => {
    checkExistingRating();
    fetchReviews();
  }, [username]);

  const handleSubmit = async () => {
    if (rating === 0 || comment.trim() === "") {
      alert("Vui lòng chọn số sao và nhập bình luận.");
      return;
    }

    setLoading(true); // Bắt đầu loading

    try {
      await setDoc(doc(db, "ratings", username), {
        username,
        rating,
        comment,
        timestamp: new Date(),
      });

      // Cập nhật lại dữ liệu từ Firestore để chắc chắn mọi thứ hiển thị đúng
      await checkExistingRating();
      await fetchReviews();

      setSubmitted(true);
    } catch (error) {
      console.error("Lỗi khi gửi đánh giá:", error);
    } finally {
      setLoading(false); // Dừng loading sau khi xong
    }
  };
 
  const truncateComment = (comment) => {
    return comment.length > 50 ? comment.slice(0, 50) + "..." : comment;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Đánh giá trải nghiệm của bạn với trang web:</h2>

      {/* Star Rating */}
      <div style={{ fontSize: "30px", marginTop: "10px" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            style={{
              cursor: "pointer",
              color: star <= (hovered || rating) ? "#ffc107" : "#999", // xám đậm
              transition: "transform 0.2s, color 0.2s",
              transform: star === hovered ? "scale(1.2)" : "scale(1)",
              textShadow:
                star <= (hovered || rating)
                  ? "0 0 5px rgba(255,193,7,0.5)"
                  : "none",
            }}
          >
            ★
          </span>
        ))}
      </div>

      {/* Comment Box */}
      <textarea
        placeholder="Viết bình luận của bạn..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={4}
        style={{
          width: "60%",
          marginTop: "20px",
          fontSize: "16px",
          padding: "10px",
          borderRadius: "8px",
        }}
      />

      <br />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: loading ? "#ccc" : "#edb1b3",
          border: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading
          ? "Đang gửi..."
          : submitted
          ? "Cập nhật đánh giá"
          : "Gửi đánh giá"}
      </button>
      {/* Confirmation Text */}
      {submitted && (
        <p style={{ marginTop: "15px", color: "#28a745", fontWeight: "bold" }}>
          {`Đã lưu đánh giá: ${rating} sao - “${comment}”`}
        </p>
      )}
        <div
        style={{
          margin: "40px 10px",
          display: "flex",
          flexWrap: "nowrap", // Các đánh giá nằm trên một hàng
          overflowX: "auto", // Cuộn ngang khi hết không gian
          gap: "20px", // Khoảng cách giữa các thẻ
          animation: "scroll 20s linear infinite", // Animation cuộn ngang
        }}
      >
        {reviews.length === 0 ? (
          <p>Chưa có đánh giá nào</p>
        ) : (
          reviews.map((review, index) => (
            <div
              key={index}
              style={{
                minWidth: "250px", // Đảm bảo mỗi đánh giá có chiều rộng tối thiểu
                textAlign: "center",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                padding: "15px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <strong>{review.username}</strong>
              <div
                style={{
                  fontSize: "20px",
                  color: "#ffc107",
                  marginTop: "10px",
                }}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      color: star <= review.rating ? "#ffc107" : "#999",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p style={{ marginTop: "10px" }}>
                {truncateComment(review.comment)} {/* Cắt ngắn bình luận */}
              </p>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default Rating;
