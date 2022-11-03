import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Kuli-Coolly</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
            <li>
              <DashboardIcon/>
                <span>Dashboard</span>
            </li>
          <p className="title">LIST</p>
            <li>
              <PersonOutlinedIcon/>
                <span>Users</span>
            </li>
            <p className="title">USEFULL</p>
            <li>
              <StoreOutlinedIcon/>
                <span>Products</span>
            </li>
            <li>
              <CreditCardOutlinedIcon/>
                <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon/>
                <span>Delivery</span>
            </li>
            <li>
              <AssessmentIcon/>
                <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon/>
                <span>Notification</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <LiveHelpOutlinedIcon/>
                <span>System Health</span>
            </li>
            <li>
              <PsychologyOutlinedIcon/>
                <span>Logs</span>
            </li>
            <li>
              <SettingsSuggestOutlinedIcon/>
                <span>Setting</span>
            </li>
            <p className="title">USER</p>
            <li>
              <AssignmentIndOutlinedIcon/>
                <span>Profile</span>
            </li>
            <li>
              <ExitToAppIcon/>
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className="bottom">Color Option</div>
    </div>
  );
};

export default Sidebar;
