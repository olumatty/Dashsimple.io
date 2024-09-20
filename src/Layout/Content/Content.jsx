import ContentMain from "../../Component/ContentMain/ContentMain";
import ContentTop from "../../Component/ContentTop/ContentTop";
import "./Content.css";

const Content = ({Opensidebar}) => {
    return (
        <div className="content">
            <ContentTop Opensidebar ={Opensidebar}/>
            <ContentMain/>
        </div>
      );
}
 
export default Content;