import { updateTuitThunk } from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(
      updateTuitThunk({
        ...tuit,
        likes: tuit.likes + 1,
        liked: true,
      })
    );
  };

  const handleUnlike = () => {
    dispatch(
      updateTuitThunk({
        ...tuit,
        likes: tuit.likes - 1,
        liked: false,
      })
    );
  };

  const handleDislike = () => {
    dispatch(
      updateTuitThunk({
        ...tuit,
        dislikes: tuit.dislikes + 1,
        disliked: true,
      })
    );
  };

  const handleUndislike = () => {
    dispatch(
      updateTuitThunk({
        ...tuit,
        dislikes: tuit.dislikes - 1,
        disliked: false,
      })
    );
  };

  return (
    <div className="d-flex flex-row justify-content-evenly">
      <span>
        <i className="bi bi-chat"></i> {tuit.replies}
      </span>
      <span>
        <i className="bi bi-arrow-repeat"></i> {tuit.retuits}
      </span>
      <span>
        {tuit.liked ? (
          <i
            className="bi bi-heart-fill text-danger"
            onClick={() => handleUnlike()}
          ></i>
        ) : (
          <i className="bi bi-heart " onClick={() => handleLike()}></i>
        )}{" "}
        {tuit.likes}
      </span>
      <span>
        {tuit.disliked ? (
          <i
            className="bi bi-hand-thumbs-down-fill text-danger"
            onClick={() => handleUndislike()}
          ></i>
        ) : (
          <i
            className="bi bi-hand-thumbs-down "
            onClick={() => handleDislike()}
          ></i>
        )}{" "}
        {tuit.dislikes}
      </span>
      <i className="bi bi-share"></i>
    </div>
  );
};

export default TuitStats;
