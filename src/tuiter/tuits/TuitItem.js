import TuitStats from "./TuitStats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";

const TuitItem = ({ post }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-1">
          <img
            src={post.image}
            className="rounded-circle"
            width="48px"
            alt={post.topic}
          ></img>
        </div>
        <div className="col ms-3">
          <span>
            <b>{post.userName}</b>
            {"  "}
            <i class="bi bi-patch-check-fill text-primary"></i>
            {"  "}
            {post.handle} • {post.time}
            <i
              className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(post._id)}
            ></i>
          </span>
          <p>{post.tuit}</p>
        </div>
      </div>
      <TuitStats
        replies={post.replies}
        retuits={post.retuits}
        likes={post.likes}
        liked={post.liked}
      />
    </div>
  );
};

export default TuitItem;
