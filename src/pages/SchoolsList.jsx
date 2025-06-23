import React, { useState, useEffect } from 'react';
import photo from "../assets/standby.png";
import photo1 from "../assets/right-arrow.png";
import { useNavigate, useParams } from "react-router-dom";
import { dataList } from "../AllData";

const SchoolsList = () => {
  const navigate = useNavigate();
  const { region, stage, gender } = useParams();
  const [filteredSchools, setFilteredSchools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // تحويل اسم المنطقة إلى التنسيق المستخدم في البيانات
    const regionMapping = {
      'الجبيل': ['الجبيل', '(الجبيل)', '(بالجبيل)'],
      'الخبر': ['الخبر', '(الخبر)', '(بالخبر)'],
      'الخفجي': ['الخفجي', '(الخفجي)', '(بالخفجي)'],
      'القرية العليا': ['القرية العليا', '(القرية العليا)', '(القرية العليا)'],
      'القطيف': ['القطيف', '(القطيف)', '(بالقطيف)'],
      'النعيرية': ['النعيرية', '(النعيرية)', '(بالنعيرية)'],
      'بقيق': ['بقيق', '(بقيق)', '(ببقيق)'],
      'رأس تنورة': ['رأس تنورة', '(رأس تنورة)', '(برأس تنورة)'],
      'غرب الدمام': ['غرب الدمام', '(غرب الدمام)', '(بغرب الدمام)'],
      'شرق الدمام': ['شرق الدمام', '(شرق الدمام)', '(بشرق الدمام)']
    };

    const regionInData = regionMapping[decodeURIComponent(region)];
    
    // تحويل الجنس إلى التنسيق المستخدم في البيانات
    const genderMapping = {
      'boys': 'boy',
      'girls': 'girl'
    };

    const genderInData = genderMapping[gender];

    // دالة لإزالة الأقواس والمسافات من اسم المنطقة
    const normalize = (str) => str.replace(/[()\s]/g, '');

    // تصفية المدارس حسب المعايير مع تجاهل الأقواس
    const filtered = dataList.filter(school => {
      const normalizedSchoolLocation = normalize(school.schoollocation || '');
      
      // التحقق من أن المنطقة تتطابق مع أي من الأشكال المحتملة
      const regionMatch = regionInData.some(region => 
        normalize(region) === normalizedSchoolLocation
      );
      
      return regionMatch && 
             school.case === stage && 
             school.type === genderInData;
    });

    setFilteredSchools(filtered);
    setLoading(false);
  }, [region, stage, gender]);

  const getStageName = (stagePath) => {
    const stageNames = {
      'childhood': 'الطفولة المبكرة',
      'primary': 'المرحلة الابتدائية',
      'secondary': 'المرحلة المتوسطة'
    };
    return stageNames[stagePath] || stagePath;
  };

  const getGenderName = (genderPath) => {
    return genderPath === 'boys' ? 'البنين' : 'البنات';
  };

  const handleSchoolClick = (schoolId) => {
    navigate(`/data/${schoolId}`);
  };

  if (loading) {
    return (
      <div className="full-screen-bg">
        <div className="white-card">
          <div className="loading">جاري التحميل...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>
        {`
          .full-screen-bg {
            min-height: 100vh;
            background-color: #007a5e;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .white-card {
            background-color: #f9f9f9;
            border-radius: 12px;
            padding: 30px 20px;
            width: 100%;
            max-width: 600px;
            text-align: center;
            position: relative;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            margin-top: 20px;
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

          .info-box {
            font-size: 14px;
            color: #666;
            margin-bottom: 20px;
            padding: 10px;
            background-color: #e8f5e8;
            border-radius: 8px;
          }

          .schools-list {
            max-height: 400px;
            overflow-y: auto;
            margin-top: 20px;
          }

          .school-item {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 10px;
            cursor: pointer;
            transition: all 0.2s ease;
            text-align: right;
          }

          .school-item:hover {
            background-color: #f0f8f0;
            border-color: #007a5e;
            transform: translateY(-2px);
          }

          .school-name {
            font-weight: bold;
            color: #007a5e;
            margin-bottom: 5px;
          }

          .school-details {
            font-size: 14px;
            color: #666;
          }

          .no-schools {
            color: #666;
            font-style: italic;
            margin-top: 20px;
          }

          .loading {
            color: #007a5e;
            font-size: 18px;
            text-align: center;
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
            <div>المرحلة: {getStageName(stage)}</div>
            <div>الجنس: {getGenderName(gender)}</div>
          </div>

          <div className="main-title">المدارس المتاحة</div>

          <div className="schools-list">
            {filteredSchools.length > 0 ? (
              filteredSchools.map((school) => (
                <div
                  key={school.id}
                  className="school-item"
                  onClick={() => handleSchoolClick(school.id)}
                >
                  <div className="school-name">{school.schoolName}</div>
                  <div className="school-details">
                    إجمالي الطلاب: {school.totalStudents}
                  </div>
                </div>
              ))
            ) : (
              <div className="no-schools">
                لا توجد مدارس متاحة للاختيارات المحددة
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolsList; 