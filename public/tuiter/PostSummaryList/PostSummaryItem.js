const PostSummaryItem = (post) => {
  return `
    <a
      class="list-group-item list-group-item-action d-flex gap-1 justify-content-between"
      href="#"
    >
      <div>
        <small class="text-muted">${post.topic}</small>
        <div>
          <div>
            <b>${post.userName}</b>
            <i class="fa fa-check-circle"></i>
            <small class="text-muted">• ${post.time}</small>
          </div>
          <div>
            <b>
              ${post.title}
            </b>
          </div>
          <small class="text-muted">${post.tweets && `${post.tweets} Tweets`} 
          </small>
        </div>
      </div>
      <div>
        <img
          src="${post.image}"
          width="100px"
          height="100px"
          class="rounded"
        />
      </div>
    </a>`;
};

export default PostSummaryItem;
