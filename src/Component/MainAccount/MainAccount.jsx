import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { LuMoreVertical, LuArrowUp } from "react-icons/lu";
import "react-circular-progressbar/dist/styles.css";
import "./MainAccount.css";
const MainAccount = () => {
  const value = 75;
  const amount = 4523.98;
  const percentageChange = 250;
  return (
    <div className="Main-grid grid-common1 c1 ">
      <div className="dashboard-grid">
        <div className="piechart">
          <div
            style={{
              width: 150,
              height: 150,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgressbar
              value={value}
              strokeWidth={8}
              styles={buildStyles({
                pathColor: `#9B51E0`,
                trailColor: `#E8C6F4`,
                rotation: 0.25,
                counterClockwise: false,
              })}
            />
          </div>
        </div>
        <div className="details">
          <div className="Account">
            <span className="Account_name">Akun utama</span>
            <LuMoreVertical className="icons" />
          </div>
          <p>Saldo saat ini </p>
          <div className="amount">
            <h4>Rp75.160.000</h4>
            <div className="progress">
              <LuArrowUp className="icon" />
              <span>7.1%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAccount;
