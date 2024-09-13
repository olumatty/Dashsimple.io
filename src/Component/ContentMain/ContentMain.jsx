import MainAccount from "../MainAccount/MainAccount";
import OtherAccount from "../OtherAccount/OtherAccount";
import "./ContentMain.css";

const ContentMain = () => {
    return ( 
        <div className="contentMain">
            <div className="main-one">
            <div className="box-one"><MainAccount/> </div>
            <div className="box-two"><OtherAccount/> </div>
            </div>
        </div>
     );
}
 
export default ContentMain;