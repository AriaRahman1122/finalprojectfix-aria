import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search ..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <NightlightRoundOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img src="https://i0.wp.com/dianisa.com/wp-content/uploads/2022/08/7.-Gambar-Anime-HD-Keren.jpg?resize=1000%2C580&ssl=1" alt="profile admin"  className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
