import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./message.scss";
import Datachat from "../../components/Datachat/Datachat";

const Message = () => {
  return (
    <div className="message">
      <Sidebar />
      <div className="messageContainer">
        <Navbar />
        <div className="chat">
          <img src="../../assets/gallery/2.jpg" alt="photoprofil" />
          <div className="chatContainer">
            <Datachat type="user"/>
          </div>
        </div>
        <div className="chat">
          <img src="../../assets/gallery/2.jpg" alt="photoprofil" />
          <div className="chatContainer">
            <Datachat type="user"/>
          </div>
        </div>
        <div className="chat">
          <img src="../../assets/gallery/2.jpg" alt="photoprofil" />
          <div className="chatContainer">
            <Datachat type="user"/>
          </div>
        </div>
        <div className="chat">
          <img src="../../assets/gallery/2.jpg" alt="photoprofil" />
          <div className="chatContainer">
            <Datachat type="user"/>
          </div>
        </div>
        <div className="chat">
          <img src="../../assets/gallery/2.jpg" alt="photoprofil" />
          <div className="chatContainer">
            <Datachat type="user"/>
          </div>
        </div>
        <div className="chat">
          <img src="../../assets/gallery/2.jpg" alt="photoprofil" />
          <div className="chatContainer">
            <Datachat type="user"/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Message;
