import { useParams, useNavigate } from "react-router-dom";
import { dataList } from "../AllData";
import "../styles.css";
import photo1 from "../assets/right-arrow.png";

const DataPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const data = dataList.find((d) => d.id === Number(id));
    console.log(data);

    if (!data) return <div className="full-screen-bg">لم يتم العثور على البيانات</div>;

    return (
        <div className="full-screen-bg">
            <div className="white-card">
                {/* زر العودة */}
                <span onClick={() => navigate(-1)} style={{ cursor: "pointer" }}><img src={photo1} alt="standby icon" style={{ width: "40px" }} /></span>
                {/* العنوان الرئيسي */}
                <h2 className="main-title">
                    {data.title}{data.schoollocation}
                </h2>

                {/* بيانات المدرسة المرحلة منها */}
                <h3 className="section-title">المدرسة المرحلة منها</h3>
                <div className="grid-header">
                    <span >اسم المدرسة</span>
                    <span style={{ textAlign: "center" }}>{data.schoolName}</span>
                </div>
                <div className="grid-row">
                    <span>إجمالي الطلاب المرحلين منها</span>
                    <span style={{ textAlign: "center" }}>{data.totalStudents}</span>
                </div>

                {/* المدارس المستقبلة */}
                <h3 className="section-title" style={{ marginTop: "24px" }}>
                    المدارس المستقبلة
                </h3>
                <div className="grid-header">
                    <span>المدرسة</span>
                    <span>اسم المدرسة</span>
                    <span>العدد</span>
                </div>
                {data.destinations.map((dest, idx) => (
                    <div key={idx} className="grid-row">
                        <span>المدرسة المستقبله {idx + 1}</span>
                        <span>{dest.school}</span>
                        <span>{dest.count}</span>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default DataPage;
