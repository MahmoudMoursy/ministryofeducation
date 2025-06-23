import React from 'react';
import { dataList } from "../AllData";

const TestData = () => {
  // فحص البيانات للبنات
  const girlsData = dataList.filter(school => school.type === 'girl');
  
  // تجميع البيانات حسب المنطقة
  const regions = {};
  girlsData.forEach(school => {
    const region = school.schoollocation;
    if (!regions[region]) {
      regions[region] = [];
    }
    regions[region].push(school);
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>فحص بيانات البنات</h1>
      <p>إجمالي مدارس البنات: {girlsData.length}</p>
      
      <h2>المناطق المتاحة للبنات:</h2>
      {Object.keys(regions).map(region => (
        <div key={region} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}>
          <h3>{region}</h3>
          <p>عدد المدارس: {regions[region].length}</p>
          <div>
            {regions[region].slice(0, 3).map(school => (
              <div key={school.id} style={{ margin: '5px 0', padding: '5px', backgroundColor: '#f0f0f0' }}>
                <strong>{school.schoolName}</strong> - {school.case} - {school.type}
              </div>
            ))}
            {regions[region].length > 3 && <p>...و {regions[region].length - 3} مدرسة أخرى</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestData; 