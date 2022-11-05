import "./notif.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"

const Notif = () => {
  return (
    <div className="notif">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Widget/>
      </div>
    </div>
  )
}

export default Notif