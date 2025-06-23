import React from 'react'
import photo from "../assets/standby.png";
import photo1 from "../assets/right-arrow.png";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import { dataList } from "../AllData";
import { Link } from "react-router-dom";
const Primary = () => {

    const navigate = useNavigate();
    const data = dataList.filter((d) => d.case === "childhood");
    console.log(data);
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
            padding: 40px 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .white-card {
            background-color: #ffffff;
            padding: 30px 40px;
            border-radius: 16px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
            text-align: center;
            transition: transform 0.3s ease;
          }

          .white-card:hover {
            transform: translateY(-4px);
          }

          .main-button {
            width: 100%;
            background-color: #007a5e;
            color: white;
            border: none;
            padding: 14px 0;
            border-radius: 25px;
            margin-bottom: 16px;
            font-size: 20px;
            font-weight:bold ;
            cursor: pointer;
            transition: background-color 0.2s ease;
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
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
            margin-top: 50px;
            color: #007a5e;

          }

          .main-button:hover {
            background-color: #00614c;
          }
        `}
            </style>

            <div className="full-screen-bg">
                <div className="white-card">
                    <div className="top-icons">
                        <span onClick={() => navigate(-1)} style={{ cursor: "pointer" }}><img src={photo1} alt="standby icon" style={{ width: "40px" }} /></span>
                        <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                            <img src={photo} alt="standby icon" style={{ width: "40px" }} />

                        </span>
                    </div>
                    <div className="main-title">الإدارة العامة للتعليم بالمنطقه الشرقيه</div>
                    <div className="main-title">إدارة التطوير والتحول</div>
                    <div className="main-title">قسم التخطيط</div>
                    <div style={{ marginTop: "50px" }}>
                        <hr />
                    </div>

                    <div className="sub-title">التشكيلات المدرسيه المعتمده من الفصول والاستيعاب للعام الدراسي 1447هـ</div>
                    <button className="main-button" onClick={() => navigate("/primary/boys")}>
                        تشكيلات مدارس البنين
                    </button>
                    <button className="main-button" onClick={() => navigate("/primary/girls")}>
                        تشكيلات مدارس البنات
                    </button>
                </div>
            </div>
        </>
    );
};


export default Primary