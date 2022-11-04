import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget  from "../../components/widget/Widget ";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar/>
        <hr />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="erarning"/>
          <Widget type="balance"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
