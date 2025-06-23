import React from 'react';
import photo from "../assets/standby.png";
import photo1 from "../assets/right-arrow.png";
import { useNavigate } from "react-router-dom";

const RegionSelect = () => {
  const navigate = useNavigate();

  const regions = [
    "الجبيل",
    "الخبر", 
    "الخفجي",
    "القرية العليا",
    "القطيف",
    "النعيرية",
    "بقيق",
    "رأس تنورة",
    "غرب الدمام",
    "شرق الدمام"
  ];

  const handleRegionSelect = (region) => {
    navigate(`/gender/${encodeURIComponent(region)}`);
  };

  return (
    <>
      <style>
        {`
          .full-screen-bg {
            min-height: 100vh;
            background-color: #007a5e;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .white-card {
            background-color: #f9f9f9;
            border-radius: 12px;
            padding: 30px 20px;
            width: 100%;
            max-width: 420px;
            text-align: center;
            position: relative;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }

          .top-icons {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            color: #007a5e;
            font-size: 20px;
          }

          .main-title {
            font-size: 18px;
            font-weight: bold;
            color: #007a5e;
            margin-bottom: 10px;
          }

          .sub-title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 20px;
            margin-top: 30px;
            color: #007a5e;
          }

          .region-button {
            width: 100%;
            background-color: #007a5e;
            color: white;
            border: none;
            padding: 12px 0;
            border-radius: 25px;
            margin-bottom: 10px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.2s ease;
          }

          .region-button:hover {
            background-color: #00614c;
          }

          .regions-grid {
            display: grid;
            gap: 10px;
            margin-top: 20px;
          }
        `}
      </style>

      <div className="full-screen-bg">
        <div className="white-card">
          <div className="top-icons">
            <span onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
              <img src={photo1} alt="back icon" style={{ width: "40px" }} />
            </span>
            <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
              <img src={photo} alt="home icon" style={{ width: "40px" }} />
            </span>
          </div>

          <div className="main-title">الإدارة العامة للتعليم بالمنطقه الشرقيه</div>
          <div className="main-title">إدارة التطوير والتحول</div>
          <div className="main-title">قسم التخطيط</div>
          
          <div style={{ marginTop: "30px" }}>
            <hr />
          </div>


          <div className="regions-grid">
            {regions.map((region, index) => (
              <button
                key={index}
                className="region-button"
                onClick={() => handleRegionSelect(region)}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegionSelect; 
