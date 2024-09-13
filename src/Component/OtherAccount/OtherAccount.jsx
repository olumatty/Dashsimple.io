import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { LuMoreVertical, LuArrowDown  } from "react-icons/lu";
import "react-circular-progressbar/dist/styles.css";
import "./OtherAccount.css";
const OtherAccount = () => {
    const value = 75;
    const amount = 4523.98;
    const percentageChange = 250;
    return (
        <div className="Main-grid grid-common1 c2">
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
                pathColor: `#697586`,
                trailColor: `#EEF2F6`,
                rotation: 0.25,
                counterClockwise: false,
              })}
            />
          </div>
        </div>
        <div className="details">
          <div className="Account">
            <span className="Account_name">Akun sampingan</span>
            <LuMoreVertical className="icons" />
          </div>
          <p>Saldo saat ini </p>
          <div className="amount">
            <h4>Rp11.000.000</h4>
            <div className="progress1">
              <LuArrowDown className="icon" />
              <span>2.9%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default OtherAccount;