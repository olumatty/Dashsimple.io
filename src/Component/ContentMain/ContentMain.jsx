import Balance from "../Balance/Balance";
import Card from "../Card/Card";
import Deposit from "../Deposit/Deposit";
import MainAccount from "../MainAccount/MainAccount";
import OtherAccount from "../OtherAccount/OtherAccount";
import "./ContentMain.css";

const ContentMain = () => {
  return (
    <div className="contentMain">
      <div className="main-one">
        <div className="box-one">
          <MainAccount />
        </div>
        <div className="box-two">
          <OtherAccount />
        </div>
      </div>
      <div className="main-two">
        <div className="box-three">
          <Deposit />
        </div>
        <div className="box-four">
          <Balance />
        </div>
          <div className="box-five">
            <Card />
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
