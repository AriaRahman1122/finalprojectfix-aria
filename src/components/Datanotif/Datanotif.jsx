import "./datanotif.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Datanotif = ({ type }) => {
  let data;

  //temporary
  const amount = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, et. Tempore facilis corrupti commodi quod, sequi asperiores iure consequatur ipsa, repellat voluptates itaque. Dolore omnis, tempore delectus obcaecati est nesciunt placeat at illo iste consectetur, temporib";
  switch (type) {
    case "user":
      data = {
        title: "UPDATE VERSION",
        link: "Pelajari Lebih Lanjut",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="datanotif">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {amount}
        </span>
      </div>
      <div className="right">
          <MoreVertIcon className="icon"/>
          <span className="link">{data.link}</span>
      </div>
    </div>
  );
};

export default Datanotif;
