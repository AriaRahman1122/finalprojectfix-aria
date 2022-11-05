import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./notif.scss";
import Datanotif from "../../components/Datanotif/Datanotif";

const Notif = () => {
  return (
    <div className="message">
      <Sidebar />
      <div className="messageContainer">
        <Navbar />
        <div className="chat">
          <Datanotif type="user"/>
        </div>
        <div className="chat">
          <Datanotif type="user"/>
        </div>
        <div className="chat">
          <Datanotif type="user"/>
        </div>
        
      </div>
    </div>
  );
};

export default Notif;
