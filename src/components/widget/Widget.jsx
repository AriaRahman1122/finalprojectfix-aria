import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Widget = () => {
  return (
    <div className="widget">
        <div className="left">
            <span className="title">USERS</span>
            <span className="counter">12345</span>
            <span className="link">See All Users</span>
        </div>
        <div className="right">
            <div className="percentage positive">
               <KeyboardArrowUpOutlinedIcon/> 20%
            </div>
            <PersonOutlinedIcon className="icon" />
        </div>
    </div>
  );
};

export default Widget;
