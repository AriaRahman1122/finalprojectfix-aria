import "./datachat.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Datachat = ({ type }) => {
  let data;

  //temporary
  const amount = "Hello Aria Rahman Ganteng, Aku suka banget deh sama kamu";

  switch (type) {
    case "user":
      data = {
        title: "Aria Rahman",
        link: "See all users",
      };
      break;
    default:
      break;
  }

  return (
    <div className="datachat">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{amount}
        </span>
      </div>
      <div className="right">
          <MoreVertIcon />
      </div>
    </div>
  );
};

export default Datachat;
