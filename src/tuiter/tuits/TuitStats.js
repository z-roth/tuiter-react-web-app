const TuitStats = ({ replies, retuits, liked, likes }) => {
  return (
    <div className="d-flex flex-row justify-content-evenly">
      <span>
        <i className="bi bi-chat"></i> {replies}
      </span>
      <span>
        <i className="bi bi-arrow-repeat"></i> {retuits}
      </span>
      <span>
        {liked ? (
          <i className="bi bi-heart-fill text-danger"></i>
        ) : (
          <i className="bi bi-heart "></i>
        )}{" "}
        {likes}
      </span>
      <i className="bi bi-share"></i>
    </div>
  );
};

export default TuitStats;
