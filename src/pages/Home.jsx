import { Link } from "react-router-dom";
import { dataList } from "../AllData";
import "../styles.css";

const Home = () => (
    <div className="full-screen-bg">
        <div className="white-card">
            <h2 className="section-title" style={{ textAlign: "center" }}>
                قائمة المدارس
            </h2>

            {dataList.map((item) =>
            (
                <div key={item.id} style={{ marginBottom: "12px" }}>
                    <Link
                        to={`/data/${item.id}`}
                        style={{ color: "#2563eb", textDecoration: "none" }}
                    >
                        {item.schoolName}
                    </Link>
                </div>
            ))}
        </div>
    </div>
);

export default Home;
