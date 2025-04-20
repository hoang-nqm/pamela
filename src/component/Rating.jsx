// components/Rating.js
import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  setDoc,
  doc,
  orderBy,
} from "firebase/firestore";
import { db } from "../config";

const Rating = ({ username }) => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null); // For modal

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
    const q = query(collection(db, "ratings"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    const reviewsList = querySnapshot.docs.map((doc) => doc.data());
    setReviews(reviewsList);
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

    setLoading(true);

    try {
      await setDoc(doc(db, "ratings", username), {
        username,
        rating,
        comment,
        timestamp: new Date(),
      });

      await checkExistingRating();
      await fetchReviews();

      setSubmitted(true);
    } catch (error) {
      console.error("Lỗi khi gửi đánh giá:", error);
    } finally {
      setLoading(false);
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
              color: star <= (hovered || rating) ? "#ffc107" : "#999",
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

      {/* Confirmation */}
      {submitted && (
        <p style={{ marginTop: "15px", color: "#28a745", fontWeight: "bold" }}>
          {`Đã lưu đánh giá: ${rating} sao - “${truncateComment(comment)}”`}
        </p>
      )}

      {/* Reviews List */}
      <div
        style={{
          margin: "40px 10px",
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
          gap: "20px",
        }}
      >
        {reviews.length === 0 ? (
          <p>Chưa có đánh giá nào</p>
        ) : (
          reviews.map((review, index) => (
            <div
              key={index}
              style={{
                minWidth: "250px",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                padding: "15px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                cursor: "pointer",
              }}
              onClick={() => setSelectedReview(review)}
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
                {truncateComment(review.comment)}
              </p>
            </div>
          ))
        )}
      </div>

      {selectedReview && (
        <div
          onClick={() => setSelectedReview(null)}
          style={{
            position: "fixed",
            zIndex: 1000,
            left: 0,
            top: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "12px",
              width: "90%",
              maxWidth: "500px",
              boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{selectedReview.username}</h3>
            <div
              style={{
                fontSize: "24px",
                color: "#ffc107",
                marginBottom: "15px",
              }}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{
                    color: star <= selectedReview.rating ? "#ffc107" : "#999",
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            <p
              style={{
                whiteSpace: "pre-wrap", // Cho phép xuống dòng đúng theo ngắt dòng trong chuỗi
                wordWrap: "break-word", // Tự động ngắt dòng khi dài
                lineHeight: "1.5",
                fontSize: "16px",
              }}
            >
              {selectedReview.comment}
            </p>
            <button
              onClick={() => setSelectedReview(null)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#f8bbd0",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rating;
