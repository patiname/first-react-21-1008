import React from "react";
import { kakaoApi } from "./api";

const Kakao = () => {
  return (
    <div>
      <h2>카카오</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {kakaoApi.map((con) => (
          <div key={con.id} style={{ width: "350px" }}>
            <div
              style={{
                width: "100%",
                height: "300px",
                background: `url(${con.img}) no-repeat center / cover`,
              }}
            ></div>
            <h3>{con.title}</h3>
            <p>{con.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kakao;
