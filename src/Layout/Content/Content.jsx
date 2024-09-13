import ContentMain from "../../Component/ContentMain/ContentMain";
import ContentTop from "../../Component/ContentTop/ContentTop";
import "./Content.css";

const Content = () => {
    return (
        <div className="content">
            <ContentTop/>
            <ContentMain/>
        </div>
      );
}
 
export default Content;