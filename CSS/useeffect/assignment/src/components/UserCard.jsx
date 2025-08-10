import React from "react";

export default function UserCard({ name, email, city }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "10px",
        background: "#fff",
      }}
    >
      <h2 style={{ margin: "0 0 10px" }}>{name}</h2>
      <p style={{ margin: "5px 0" }}>
        <strong>Email:</strong> {email}
      </p>
      <p style={{ margin: "5px 0" }}>
        <strong>City:</strong> {city}
      </p>
    </div>
  );
}
