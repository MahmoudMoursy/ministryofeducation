import React from 'react';
import photo from "../assets/standby.png";
import photo1 from "../assets/right-arrow.png";
import { useNavigate, useParams } from "react-router-dom";

const StageSelect = () => {
  const navigate = useNavigate();
  const { region, gender } = useParams();

  const stages = [
    { name: "من مدارس الطفولة", path: "childhood" },
    { name: "من المرحلة الابتدائية إلى المتوسطة", path: "primary" },
    { name: "من المرحلة المتوسطة إلى الثانوية", path: "secondary" }
  ];

  const handleStageSelect = (stagePath) => {
    navigate(`/schools/${encodeURIComponent(region)}/${stagePath}/${gender}`);
  };

  const getGenderName = (genderPath) => {
    return genderPath === 'boys' ? 'البنين' : 'البنات';
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

          .info-box {
            font-size: 14px;
            color: #666;
            margin-bottom: 20px;
            padding: 10px;
            background-color: #e8f5e8;
            border-radius: 8px;
          }

          .stage-button {
            width: 100%;
            background-color: #007a5e;
            color: white;
            border: none;
            padding: 14px 0;
            border-radius: 25px;
            margin-bottom: 12px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.2s ease;
          }

          .stage-button:hover {
            background-color: #00614c;
          }

          .stages-grid {
            display: grid;
            gap: 12px;
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

          <div className="info-box">
            <div>المنطقة: {decodeURIComponent(region)}</div>
            <div>الجنس: {getGenderName(gender)}</div>
          </div>


          <div className="stages-grid">
            {stages.map((stage, index) => (
              <button
                key={index}
                className="stage-button"
                onClick={() => handleStageSelect(stage.path)}
              >
                {stage.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StageSelect; 
