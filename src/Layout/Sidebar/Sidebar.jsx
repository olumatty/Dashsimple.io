import {
  LuHome,
  LuSignalHigh,
  LuLayers,
  LuCheckSquare,
  LuFlag,
  LuUsers,
  LuLifeBuoy,
  LuSettings,
} from "react-icons/lu";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-list-item">
            <a href="#">
              <button>
                <LuHome className="icon" />
              </button>
            </a>
          </li>
          <li className="nav-list-item">
            <a href="#">
              <button>
                <LuSignalHigh className="icon" />
              </button>
            </a>
          </li>
          <li className="nav-list-item">
            <a href="#">
              <button>
                <LuLayers className="icon" />
              </button>
            </a>
          </li>
          <li className="nav-list-item">
            <a href="#">
              <button>
                <LuCheckSquare className="icon" />
              </button>
            </a>
          </li>
          <li className="nav-list-item">
            <a href="#">
              <button>
                <LuFlag className="icon" />
              </button>
            </a>
          </li>
          <li className="nav-list-item">
            <a href="#">
              <button>
                <LuUsers className="icon" />
              </button>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="navigation-two">
        <ul className="nav-list">
          <li className="nav-list-item">
            <a className="link" href="#">
              <button>
                <LuLifeBuoy className="icon" />
              </button>
            </a>
          </li>
          <li className="nav-list-item">
            <a className="link" href="#">
              <button>
                <LuSettings className="icon" />
              </button>
            </a>
          </li>
        </ul>
      
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile-image"
            className="img-fit-cover"
          />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
