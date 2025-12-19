import React, { useState } from "react";

function ProfileCard({ name, age, bio, image }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const cardStyle = {
    width: "220px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "16px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    position: "relative" // IMPORTANT for corner button
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px"
  };

  const likeButtonStyle = {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    cursor: "pointer",
    fontSize: "18px",
    border: "none",
    background: "none"
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <h3>{name}</h3>
      <p><strong>Age:</strong> {age}</p>
      <p>{bio}</p>

      {/* Like Button */}
      <button style={likeButtonStyle} onClick={handleLike}>
        {liked ? "❤️" : "🤍"} {likes}
      </button>
    </div>
  );
}

export default ProfileCard;
