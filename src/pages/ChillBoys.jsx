import React from 'react';
import { dataList } from "../AllData";
import { Link } from 'react-router-dom';


function Boys() {

  const data = dataList.filter((d) => d.case === "childhood" && d.type === "boy");

  return (
    <>
      <style>
         {`
          .full-screen-bg {
            min-height: 100vh;
            background: linear-gradient(135deg, #f0f4ff, #e6ecf9);
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
            max-width: 500px;
            transition: transform 0.3s ease;
          }

          .white-card:hover {
            transform: translateY(-4px);
          }

          .section-title {
            font-size: 24px;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 24px;
            border-bottom: 2px solid #2563eb;
            padding-bottom: 10px;
            text-align: center;
          }

          .school-link {
            margin-bottom: 12px;
          }

          .school-link-anchor {
            display: block;
            background-color: #f9fafb;
            padding: 12px 16px;
            border-radius: 8px;
            color: #2563eb;
            font-weight: 500;
            text-decoration: none;
            transition: background-color 0.2s ease, transform 0.2s ease;
          }

          .school-link-anchor:hover {
            background-color: #e0e7ff;
            transform: translateX(4px);
          }
        `}
      </style>
      <div className="full-screen-bg">
        <div className="white-card">
          <h2 className="section-title">قائمة المدارس</h2>
          {data.map((item) => (
            <div key={item.id} className="school-link">
              <Link to={`/data/${item.id}`} className="school-link-anchor">
                {item.schoolName}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Boys;
