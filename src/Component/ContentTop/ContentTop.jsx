import "./ContentTop.css"
import { LuCalendar,LuListFilter } from "react-icons/lu";
const ContentTop = () => {
  return (
    <div className="ContentTop">
      <div className="dashboard">
        <div className="text">
          <h4>Your Finance Dashboard</h4>
          <p>Welcome back,Fatin!</p>
        </div>
        <div className="buttons">
          <button className="dashboard-buttons one">$ Deposit</button>
          <button className="dashboard-buttons two">Kirim uang</button>
        </div>
      </div>

      <div className="ContentTop-btn">
        <div className="btn-right">
          <button className="button One">12bulan</button>
          <button className="button Two">12bulan</button>
          <button className="button three">12bulan</button>
          <button className="button Four">12bulan</button>
        </div>
        <div className="btn-left">
          <button className="btn-calendar">
            <LuCalendar className="bt-icon" />
            <span>Philih tangall</span>
          </button>
          <button className="btn-Filter">
            <LuListFilter className="bt-icon" />
            <span>Filter </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentTop;
